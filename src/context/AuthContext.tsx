import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import apiClient from '../api/apiClient';
import type {
  AuthApiResponse,
  AuthContextValue,
  LoginPayload,
  RegisterPayload,
  User,
} from '../types/authTypes';

const AUTH_TOKEN_KEY = 'authToken';
const AUTH_USER_KEY = 'authUser';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function getStoredAuth(): Promise<{token: string | null; user: User | null}> {
  const entries = await AsyncStorage.multiGet([AUTH_TOKEN_KEY, AUTH_USER_KEY]);
  const storedToken = entries[0][1];
  const storedUser = entries[1][1];

  return {
    token: storedToken,
    user: storedUser ? (JSON.parse(storedUser) as User) : null,
  };
}

function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const serverMessage = (error.response?.data as {message?: string} | undefined)
      ?.message;

    return serverMessage ?? error.message ?? 'Something went wrong. Please try again.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong. Please try again.';
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const storedAuth = await getStoredAuth();

        if (storedAuth.token && storedAuth.user) {
          setToken(storedAuth.token);
          setUser(storedAuth.user);
        }
      } catch (error) {
        console.warn('Unable to load stored auth data.', error);
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAuth();
  }, []);

  const persistAuth = async (nextUser: User, nextToken: string) => {
    await AsyncStorage.multiSet([
      [AUTH_TOKEN_KEY, nextToken],
      [AUTH_USER_KEY, JSON.stringify(nextUser)],
    ]);

    setUser(nextUser);
    setToken(nextToken);
  };

  const clearAuth = async () => {
    try {
      await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_KEY]);
    } finally {
      setUser(null);
      setToken(null);
    }
  };

  const loadStoredAuth = async () => {
    try {
      setIsLoading(true);

      const storedAuth = await getStoredAuth();

      if (storedAuth.token && storedAuth.user) {
        setToken(storedAuth.token);
        setUser(storedAuth.user);
        return;
      }

      setToken(null);
      setUser(null);
    } catch (error) {
      console.warn('Unable to refresh stored auth data.', error);
      await clearAuth();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (payload: LoginPayload) => {
    try {
      const response = await apiClient.post<AuthApiResponse>('/auth/login', payload);
      const authData = response.data.data;

      if (!authData?.user || !authData?.token) {
        throw new Error(response.data.message || 'Login failed.');
      }

      await persistAuth(authData.user, authData.token);
    } catch (error) {
      throw new Error(getApiErrorMessage(error));
    }
  };

  const register = async (payload: RegisterPayload) => {
    try {
      const response = await apiClient.post<AuthApiResponse>(
        '/auth/register',
        payload,
      );
      const authData = response.data.data;

      if (!authData?.user || !authData?.token) {
        throw new Error(response.data.message || 'Registration failed.');
      }

      await persistAuth(authData.user, authData.token);
    } catch (error) {
      throw new Error(getApiErrorMessage(error));
    }
  };

  const logout = async () => {
    await clearAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        register,
        logout,
        loadStoredAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider.');
  }

  return context;
}
