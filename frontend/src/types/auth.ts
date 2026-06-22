export type UserRole = "ADMIN" | "TEACHER" | "STUDENT";

export interface AuthUser {
  id: number;
  email: string;
  username: string;
  role: UserRole;
  points: number;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar?: string | null;
  avatar_url?: string | null;
  date_joined?: string;
  last_login?: string | null;
}

export interface TokenResponse {
  access: string;
  refresh: string;
  user: AuthUser;
  id: number;
  username: string;
  email: string;
  role: UserRole;
  points: number;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  role: "STUDENT" | "TEACHER";
  first_name?: string;
  last_name?: string;
}

export interface RegisterResponse {
  detail: string;
  user: AuthUser;
}

export interface ApiErrorBody {
  detail?: string;
  errors?: Record<string, string[]>;
  [key: string]: unknown;
}
