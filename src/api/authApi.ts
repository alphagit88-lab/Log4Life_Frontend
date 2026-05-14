import apiClient from './apiClient';
import type {
  AuthApiResponse,
  LoginPayload,
  RegisterPayload,
  UserApiResponse,
} from '../types/authTypes';

export async function loginRequest(
  payload: LoginPayload,
): Promise<AuthApiResponse> {
  const response = await apiClient.post<AuthApiResponse>('/auth/login', payload);
  return response.data;
}

export async function registerRequest(
  payload: RegisterPayload,
): Promise<AuthApiResponse> {
  const response = await apiClient.post<AuthApiResponse>(
    '/auth/register',
    payload,
  );
  return response.data;
}

export async function fetchCurrentUser(): Promise<UserApiResponse> {
  const response = await apiClient.get<UserApiResponse>('/auth/me');
  return response.data;
}

export async function updateFcmTokenRequest(
  fcmToken: string,
): Promise<UserApiResponse> {
  const response = await apiClient.put<UserApiResponse>('/auth/fcm-token', {
    fcmToken,
  });
  return response.data;
}
