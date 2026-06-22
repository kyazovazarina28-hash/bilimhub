import axiosInstance from "../api/axiosInstance";
import type {
  AuthUser,
  RegisterPayload,
  RegisterResponse,
  TokenResponse,
} from "../types/auth";

export async function loginRequest(
  email: string,
  password: string,
): Promise<TokenResponse> {
  const { data } = await axiosInstance.post<TokenResponse>("auth/token/", {
    email: email.trim().toLowerCase(),
    password,
  });
  return data;
}

export async function registerRequest(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  const { data } = await axiosInstance.post<RegisterResponse>(
    "auth/register/",
    {
      ...payload,
      email: payload.email.trim().toLowerCase(),
      username: payload.username.trim(),
    },
  );
  return data;
}

export async function fetchProfileRequest(): Promise<AuthUser> {
  const { data } = await axiosInstance.get<AuthUser | { user: AuthUser }>(
    "auth/profile/",
  );
  if ("user" in data && data.user) {
    return data.user;
  }
  return data as AuthUser;
}

export async function refreshTokenRequest(
  refresh: string,
): Promise<{ access: string; refresh?: string }> {
  const { data } = await axiosInstance.post<{ access: string; refresh?: string }>(
    "auth/token/refresh/",
    { refresh },
  );
  return data;
}
