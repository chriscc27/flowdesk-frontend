import { api } from './api';
import type { LoginRequest, AuthResponse } from '@/types/auth';
import type { ApiResponse } from '@/types/api';

export async function loginUser(credentials: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
  return response.data.data;
}

export async function refreshToken(token: string) {
  const response = await api.post<ApiResponse<{ accessToken: string; refreshToken: string }>>(
    '/auth/refresh',
    { refreshToken: token },
  );
  return response.data.data;
}

export async function logoutUser(): Promise<void> {
  await api.post('/auth/logout');
}

export async function getProfile() {
  const response = await api.get<ApiResponse<AuthResponse['user']>>('/auth/me');
  return response.data.data;
}
