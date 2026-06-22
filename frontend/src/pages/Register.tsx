import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Mail,
  Lock,
  User,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import { getApiErrorMessage } from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, "Колдонуучу аты зарыл.")
      .min(3, "Колдонуучу аты кеминде 3 символ.")
      .max(30, "Колдонуучу аты 30 символдон ашпоосу керек."),
    email: z
      .string()
      .min(1, "Email дареги зарыл.")
      .email("Жарактуу email дарегин киргизиңиз."),
    password: z
      .string()
      .min(1, "Пароль зарыл.")
      .min(8, "Пароль эң аз 8 символдон турушу керек."),
    password_confirm: z.string().min(1, "Парольду ырастаңыз."),
    role: z.enum(["STUDENT", "TEACHER"]),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Парольдер дал келбейт.",
    path: ["password_confirm"],
  });

type RegisterForm = z.infer<typeof registerSchema>;
type FieldErrors = Partial<Record<keyof RegisterForm, string>>;

export default function Register() {
  const { registerUser, isAuthenticated, isLoading, user } = useAuth();
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    role: "STUDENT",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isLoading && isAuthenticated && user) {
    return (
      <Navigate
        to={
          user.role === "STUDENT"
            ? "/dashboard"
            : user.role === "ADMIN"
              ? "/admin"
              : "/"
        }
        replace
      />
    );
  }

  const handleChange = <K extends keyof RegisterForm>(
    field: K,
    value: RegisterForm[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const result = registerSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      await registerUser(
        result.data.username,
        result.data.email,
        result.data.password,
        result.data.role,
      );
    } catch (error) {
      setApiError(
        getApiErrorMessage(error, "Каттоо ийгиликсиз болду. Кайра аракет кылыңыз."),
      );
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
            Катталуу
          </h1>
          <p className="mt-2 text-sm text-kyrgyz-600 dark:text-slate-400">
            BilimHub платформасына кошулуңуз
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-base space-y-5 p-6 sm:p-8" noValidate>
          {apiError && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
              {apiError}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">Роль *</label>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { value: "STUDENT" as const, label: "Окуучу", icon: GraduationCap },
                  { value: "TEACHER" as const, label: "Мугалим", icon: User },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange("role", option.value)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    form.role === option.value
                      ? "border-alpine-500 bg-alpine-50 text-alpine-700 dark:bg-alpine-950/40 dark:text-alpine-300"
                      : "border-kyrgyz-200 text-kyrgyz-600 hover:border-kyrgyz-300 dark:border-kyrgyz-700 dark:text-slate-400"
                  }`}
                >
                  <option.icon className="h-4 w-4" />
                  {option.label}
                </button>
              ))}
            </div>
            {errors.role && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.role}</p>
            )}
          </div>

          <div>
            <label htmlFor="username" className="mb-1.5 block text-sm font-medium">
              Колдонуучу аты *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="username"
                type="text"
                autoComplete="username"
                value={form.username}
                onChange={(e) => handleChange("username", e.target.value)}
                placeholder="okuuchu1"
                className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.username
                    ? "border-red-400"
                    : "border-kyrgyz-200 dark:border-kyrgyz-700"
                }`}
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email *
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
                className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.email
                    ? "border-red-400"
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
              Пароль *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.password
                    ? "border-red-400"
                    : "border-kyrgyz-200 dark:border-kyrgyz-700"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-kyrgyz-400"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="password_confirm" className="mb-1.5 block text-sm font-medium">
              Парольду ырастаңыз *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="password_confirm"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={form.password_confirm}
                onChange={(e) => handleChange("password_confirm", e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:bg-kyrgyz-900 dark:text-white ${
                  errors.password_confirm
                    ? "border-red-400"
                    : "border-kyrgyz-200 dark:border-kyrgyz-700"
                }`}
              />
            </div>
            {errors.password_confirm && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.password_confirm}
              </p>
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
              <UserPlus className="h-4 w-4" />
            )}
            Катталуу
          </button>

          <p className="text-center text-sm text-kyrgyz-600 dark:text-slate-400">
            Аккаунтуңуз барбы?{" "}
            <Link
              to="/login"
              className="font-semibold text-alpine-600 hover:underline dark:text-alpine-400"
            >
              Кирүү
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
