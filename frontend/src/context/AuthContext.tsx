import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
} from "../api/axiosInstance";
import {
  fetchProfileRequest,
  loginRequest,
  refreshTokenRequest,
  registerRequest,
} from "../services/authService";
import { normalizeUserRole } from "../components/ProtectedRoute";
import type { AuthUser, UserRole } from "../types/auth";

function normalizeAuthUser(raw: AuthUser): AuthUser {
  const role = normalizeUserRole(raw.role) ?? "STUDENT";
  return { ...raw, role };
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (
    username: string,
    email: string,
    password: string,
    role: "STUDENT" | "TEACHER",
  ) => Promise<void>;
  logoutUser: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return normalizeAuthUser(JSON.parse(raw) as AuthUser);
  } catch {
    localStorage.removeItem(USER_KEY);
    return null;
  }
}

function persistSession(
  access: string,
  refresh: string,
  user: AuthUser,
): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, access);
  localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function clearSession(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

function getRedirectPath(role: UserRole): string {
  switch (role) {
    case "ADMIN":
      return "/admin";
    case "STUDENT":
      return "/dashboard";
    case "TEACHER":
      return "/";
    default:
      return "/";
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(() => loadStoredUser());
  const [isLoading, setIsLoading] = useState(true);

  const redirectByRole = useCallback(
    (role: UserRole) => {
      navigate(getRedirectPath(role), { replace: true });
    },
    [navigate],
  );

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (!accessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = normalizeAuthUser(await fetchProfileRequest());
        setUser(profile);
        localStorage.setItem(USER_KEY, JSON.stringify(profile));
      } catch {
        const refresh = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (refresh) {
          try {
            const { access, refresh: newRefresh } = await refreshTokenRequest(refresh);
            localStorage.setItem(ACCESS_TOKEN_KEY, access);
            if (newRefresh) {
              localStorage.setItem(REFRESH_TOKEN_KEY, newRefresh);
            }
            const profile = normalizeAuthUser(await fetchProfileRequest());
            setUser(profile);
            localStorage.setItem(USER_KEY, JSON.stringify(profile));
          } catch {
            clearSession();
            setUser(null);
          }
        } else {
          clearSession();
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    void initAuth();
  }, []);

  const loginUser = useCallback(
    async (email: string, password: string) => {
      const response = await loginRequest(email, password);
      const authUser = normalizeAuthUser(
        response.user ?? {
          id: response.id,
          username: response.username,
          email: response.email,
          role: response.role,
          points: response.points,
        },
      );

      persistSession(response.access, response.refresh, authUser);
      setUser(authUser);
      redirectByRole(authUser.role);
    },
    [redirectByRole],
  );

  const registerUser = useCallback(
    async (
      username: string,
      email: string,
      password: string,
      role: "STUDENT" | "TEACHER",
    ) => {
      await registerRequest({
        username,
        email,
        password,
        password_confirm: password,
        role,
      });

      await loginUser(email, password);
    },
    [loginUser],
  );

  const logoutUser = useCallback(() => {
    clearSession();
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate]);

  const refreshProfile = useCallback(async () => {
    const profile = normalizeAuthUser(await fetchProfileRequest());
    setUser(profile);
    localStorage.setItem(USER_KEY, JSON.stringify(profile));
  }, []);

  const isAdmin = normalizeUserRole(user?.role) === "ADMIN";

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !isLoading && Boolean(user && localStorage.getItem(ACCESS_TOKEN_KEY)),
      isAdmin,
      isLoading,
      loginUser,
      registerUser,
      logoutUser,
      refreshProfile,
    }),
    [user, isAdmin, isLoading, loginUser, registerUser, logoutUser, refreshProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth AuthProvider ичинде колдонулушу керек.");
  }
  return context;
}
