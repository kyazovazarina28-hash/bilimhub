import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, LogIn, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { getApiErrorMessage } from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email дареги зарыл.")
    .email("Жарактуу email дарегин киргизиңиз."),
  password: z
    .string()
    .min(1, "Пароль зарыл.")
    .min(8, "Пароль эң аз 8 символдон турушу керек."),
});

type LoginForm = z.infer<typeof loginSchema>;
type FieldErrors = Partial<Record<keyof LoginForm, string>>;

export default function Login() {
  const { loginUser, isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();
  const fromPath =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname ?? null;
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isLoading && isAuthenticated && user) {
    const defaultPath =
      user.role === "STUDENT"
        ? "/dashboard"
        : user.role === "ADMIN"
          ? "/admin"
          : "/";
    return <Navigate to={fromPath ?? defaultPath} replace />;
  }

  const handleChange = (field: keyof LoginForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof LoginForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      await loginUser(result.data.email, result.data.password);
    } catch (error) {
      setApiError(getApiErrorMessage(error, "Email же пароль ката."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-app flex min-h-[70vh] items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-kyrgyz-950 dark:text-white">
            Системага кирүү
          </h1>
          <p className="mt-2 text-sm text-kyrgyz-600 dark:text-slate-400">
            BilimHub аккаунтуңузга кириңиз
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-base space-y-5 p-6 sm:p-8" noValidate>
          {apiError && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
              {apiError}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="okuuchu@mail.kg"
                className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.email
                    ? "border-red-400 dark:border-red-500"
                    : "border-kyrgyz-200 dark:border-kyrgyz-700"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border py-2.5 pl-10 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.password
                    ? "border-red-400 dark:border-red-500"
                    : "border-kyrgyz-200 dark:border-kyrgyz-700"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-kyrgyz-400 hover:text-kyrgyz-600"
                aria-label={showPassword ? "Жашыруу" : "Көрсөтүү"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="h-4 w-4" />
            )}
            Кирүү
          </button>

          <p className="text-center text-sm text-kyrgyz-600 dark:text-slate-400">
            Аккаунтуңуз жокпу?{" "}
            <Link
              to="/register"
              className="font-semibold text-alpine-600 hover:underline dark:text-alpine-400"
            >
              Катталуу
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
