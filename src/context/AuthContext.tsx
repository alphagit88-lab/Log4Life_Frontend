import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  fetchCurrentUser,
  loginRequest,
  registerRequest,
  updateFcmTokenRequest,
} from '../api/authApi';
import type {
  ApiErrorResponse,
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
    const responseData = error.response?.data as ApiErrorResponse | undefined;
    const validationMessage = responseData?.errors?.[0]?.message;

    return (
      validationMessage ??
      responseData?.message ??
      error.message ??
      'Something went wrong. Please try again.'
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong. Please try again.';
}

function isUnauthorizedError(error: unknown): boolean {
  return axios.isAxiosError(error) && error.response?.status === 401;
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const storeUser = useCallback(async (nextUser: User) => {
    await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const syncCurrentUser = useCallback(async (sessionToken: string) => {
    const response = await fetchCurrentUser();
    await storeUser(response.data.user);
    setToken(sessionToken);
  }, [storeUser]);

  const clearAuth = useCallback(async () => {
    try {
      await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_USER_KEY]);
    } finally {
      setUser(null);
      setToken(null);
    }
  }, []);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const storedAuth = await getStoredAuth();

        if (storedAuth.token && storedAuth.user) {
          setToken(storedAuth.token);
          setUser(storedAuth.user);

          try {
            await syncCurrentUser(storedAuth.token);
          } catch (error) {
            console.warn('Unable to sync stored auth session.', error);

            if (isUnauthorizedError(error)) {
              await clearAuth();
            }
          }
        }
      } catch (error) {
        console.warn('Unable to load stored auth data.', error);
        await clearAuth();
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAuth();
  }, [clearAuth, syncCurrentUser]);

  const persistAuth = async (nextUser: User, nextToken: string) => {
    await AsyncStorage.multiSet([
      [AUTH_TOKEN_KEY, nextToken],
      [AUTH_USER_KEY, JSON.stringify(nextUser)],
    ]);

    setUser(nextUser);
    setToken(nextToken);
  };

  const login = async (payload: LoginPayload) => {
    try {
      const response: AuthApiResponse = await loginRequest(payload);
      const authData = response.data;

      if (!authData?.user || !authData?.token) {
        throw new Error(response.message || 'Login failed.');
      }

      await persistAuth(authData.user, authData.token);
    } catch (error) {
      throw new Error(getApiErrorMessage(error));
    }
  };

  const register = async (payload: RegisterPayload) => {
    try {
      const response: AuthApiResponse = await registerRequest(payload);
      const authData = response.data;

      if (!authData?.user || !authData?.token) {
        throw new Error(response.message || 'Registration failed.');
      }

      await persistAuth(authData.user, authData.token);
    } catch (error) {
      throw new Error(getApiErrorMessage(error));
    }
  };

  const refreshProfile = async () => {
    const activeToken = token ?? (await AsyncStorage.getItem(AUTH_TOKEN_KEY));

    if (!activeToken) {
      throw new Error('No active session found.');
    }

    try {
      await syncCurrentUser(activeToken);
    } catch (error) {
      if (isUnauthorizedError(error)) {
        await clearAuth();
      }

      throw new Error(getApiErrorMessage(error));
    }
  };

  const updateFcmToken = async (fcmToken: string) => {
    const trimmedToken = fcmToken.trim();

    if (!trimmedToken) {
      throw new Error('FCM token is required.');
    }

    try {
      const response = await updateFcmTokenRequest(trimmedToken);
      await storeUser(response.data.user);
    } catch (error) {
      if (isUnauthorizedError(error)) {
        await clearAuth();
      }

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
        refreshProfile,
        updateFcmToken,
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
