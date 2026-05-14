export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  profileImage: string | null;
  fcmToken: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export interface ApiFieldError {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors: ApiFieldError[];
}

export interface AuthApiResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface UserApiResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export interface AuthContextValue {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateFcmToken: (fcmToken: string) => Promise<void>;
}
