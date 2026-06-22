import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { AuthUser, UserRole } from "../types/auth";

interface ProtectedRouteProps {
  children: ReactNode;
  /** Роль талап кылынган маршруттар үчүн (ADMIN, STUDENT, TEACHER). */
  allowedRoles?: UserRole[];
  /** @deprecated allowedRoles колдонуңуз */
  roles?: UserRole[];
}

/** API/localStorage аркылуу келген ролду бир форматка келтирет. */
export function normalizeUserRole(role: unknown): UserRole | null {
  if (typeof role !== "string") return null;
  const upper = role.trim().toUpperCase();
  if (upper === "ADMIN" || upper === "TEACHER" || upper === "STUDENT") {
    return upper;
  }
  return null;
}

/** Колдонуучунун админ укугу барбы текшерет. */
export function isAdminUser(user: AuthUser | null | undefined): boolean {
  if (!user) return false;
  return normalizeUserRole(user.role) === "ADMIN";
}

export default function ProtectedRoute({
  children,
  allowedRoles,
  roles,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();
  const requiredRoles = allowedRoles ?? roles;
  const userRole = normalizeUserRole(user?.role);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-alpine-500 border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    requiredRoles &&
    requiredRoles.length > 0 &&
    (!userRole || !requiredRoles.includes(userRole))
  ) {
    const fallback =
      userRole === "ADMIN"
        ? "/admin"
        : userRole === "STUDENT"
          ? "/dashboard"
          : "/";
    return <Navigate to={fallback} replace />;
  }

  return <>{children}</>;
}

interface AdminRouteProps {
  children: ReactNode;
}

/** ADMIN гана кирет. */
export function AdminRoute({ children }: AdminRouteProps) {
  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>{children}</ProtectedRoute>
  );
}
