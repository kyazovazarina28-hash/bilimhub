import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  FilePlus,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Shield,
  Sun,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { to: "/#sabaktar", label: "Сабактар", hash: true },
  { to: "/statistics", label: "Статистика" },
  { to: "/questions", label: "Суроолор" },
] as const;

const AUTH_NAV_LINKS: { to: string; label: string; roles: Array<"STUDENT" | "TEACHER" | "ADMIN"> }[] = [
  { to: "/dashboard", label: "Панел", roles: ["STUDENT"] },
  { to: "/ai-tutor", label: "AI Мугалим", roles: ["STUDENT"] },
];

const ADMIN_NAV_LINKS = [
  { to: "/admin", label: "Админ панели", icon: LayoutDashboard },
  { to: "/admin/content", label: "Контент кошуу", icon: FilePlus },
];

function roleLabel(role: string | null): string {
  switch (role) {
    case "ADMIN":
      return "Администратор";
    case "TEACHER":
      return "Мугалим";
    case "STUDENT":
      return "Окуучу";
    default:
      return "";
  }
}

export default function Navbar() {
  const { isAuthenticated, user, logoutUser, isLoading, isAdmin } = useAuth();
  const role = user?.role ?? null;
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleLogout = () => {
    logoutUser();
    closeMobile();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-kyrgyz-100/80 bg-white/80 backdrop-blur-lg dark:border-kyrgyz-800/80 dark:bg-kyrgyz-950/80">
      <nav className="container-app flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          onClick={closeMobile}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-kyrgyz-600 to-alpine-500 text-white shadow-glow-blue">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-kyrgyz-950 dark:text-white">
            Bilim<span className="text-alpine-500">Hub</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            "hash" in link && link.hash ? (
              <a
                key={link.to}
                href={link.to}
                className="btn-ghost rounded-lg px-3 py-2"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="btn-ghost rounded-lg px-3 py-2"
              >
                {link.label}
              </Link>
            ),
          )}
          {isAuthenticated &&
            !isAdmin &&
            AUTH_NAV_LINKS.filter(
              (link) => !link.roles || (role && link.roles.includes(role)),
            ).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="btn-ghost rounded-lg px-3 py-2"
              >
                {link.label}
              </Link>
            ))}
          {isAuthenticated &&
            isAdmin &&
            ADMIN_NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="btn-ghost gap-1.5 rounded-lg px-3 py-2"
              >
                <link.icon className="h-4 w-4 text-alpine-500" />
                {link.label}
              </Link>
            ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost rounded-lg p-2.5"
            aria-label={isDark ? "Жарык режим" : "Караңгы режим"}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-sunset-400" />
            ) : (
              <Moon className="h-5 w-5 text-kyrgyz-600" />
            )}
          </button>

          {!isLoading && isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-xl border border-kyrgyz-100 bg-kyrgyz-50 px-3 py-1.5 lg:flex dark:border-kyrgyz-700 dark:bg-kyrgyz-900">
                <User className="h-4 w-4 text-alpine-500" />
                <div className="text-left">
                  <p className="text-xs font-semibold text-kyrgyz-900 dark:text-white">
                    {user.first_name || user.username}
                  </p>
                  <p className="text-[10px] text-kyrgyz-500 dark:text-slate-400">
                    {role === "ADMIN" ? (
                      <span className="inline-flex items-center gap-1 font-medium text-alpine-600 dark:text-alpine-400">
                        <Shield className="h-3 w-3" />
                        Администратор
                      </span>
                    ) : (
                      <>
                        {roleLabel(user.role)} · {user.points} упай
                      </>
                    )}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-ghost gap-1.5 text-red-600 dark:text-red-400"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Чыгуу</span>
              </button>
            </div>
          ) : (
            !isLoading && (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn-ghost gap-1.5">
                  <LogIn className="h-4 w-4" />
                  Кирүү
                </Link>
                <Link to="/register" className="btn-primary">
                  Катталуу
                </Link>
              </div>
            )
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost rounded-lg p-2.5"
            aria-label={isDark ? "Жарык режим" : "Караңгы режим"}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-sunset-400" />
            ) : (
              <Moon className="h-5 w-5 text-kyrgyz-600" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="btn-ghost rounded-lg p-2.5"
            aria-label={mobileOpen ? "Жабуу" : "Меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-kyrgyz-100 md:hidden dark:border-kyrgyz-800"
          >
            <div className="container-app space-y-1 py-4">
              {NAV_LINKS.map((link) =>
                "hash" in link && link.hash ? (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={closeMobile}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-kyrgyz-800 transition-colors hover:bg-kyrgyz-50 dark:text-slate-200 dark:hover:bg-kyrgyz-900"
                  >
                    <BookOpen className="h-4 w-4 text-alpine-500" />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMobile}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-kyrgyz-800 transition-colors hover:bg-kyrgyz-50 dark:text-slate-200 dark:hover:bg-kyrgyz-900"
                  >
                    <BookOpen className="h-4 w-4 text-alpine-500" />
                    {link.label}
                  </Link>
                ),
              )}
              {isAuthenticated &&
                !isAdmin &&
                AUTH_NAV_LINKS.filter(
                  (link) => !link.roles || (role && link.roles.includes(role)),
                ).map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMobile}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-kyrgyz-800 transition-colors hover:bg-kyrgyz-50 dark:text-slate-200 dark:hover:bg-kyrgyz-900"
                  >
                    <BookOpen className="h-4 w-4 text-alpine-500" />
                    {link.label}
                  </Link>
                ))}
              {isAuthenticated &&
                isAdmin &&
                ADMIN_NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMobile}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-kyrgyz-800 transition-colors hover:bg-kyrgyz-50 dark:text-slate-200 dark:hover:bg-kyrgyz-900"
                  >
                    <link.icon className="h-4 w-4 text-alpine-500" />
                    {link.label}
                  </Link>
                ))}

              <div className="my-3 border-t border-kyrgyz-100 dark:border-kyrgyz-800" />

              {!isLoading && isAuthenticated && user ? (
                <div className="space-y-2 px-4">
                  <div className="rounded-xl bg-kyrgyz-50 p-3 dark:bg-kyrgyz-900">
                    <p className="text-sm font-semibold text-kyrgyz-900 dark:text-white">
                      {user.first_name || user.username}
                    </p>
                    <p className="text-xs text-kyrgyz-500 dark:text-slate-400">
                      {role === "ADMIN" ? (
                        <span className="inline-flex items-center gap-1 font-medium text-alpine-600 dark:text-alpine-400">
                          <Shield className="h-3 w-3" />
                          Администратор
                        </span>
                      ) : (
                        <>
                          {roleLabel(user.role)} · {user.points} упай
                        </>
                      )}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30"
                  >
                    <LogOut className="h-4 w-4" />
                    Чыгуу
                  </button>
                </div>
              ) : (
                !isLoading && (
                  <div className="flex flex-col gap-2 px-4">
                    <Link
                      to="/login"
                      onClick={closeMobile}
                      className="btn-secondary w-full justify-center"
                    >
                      <LogIn className="h-4 w-4" />
                      Кирүү
                    </Link>
                    <Link
                      to="/register"
                      onClick={closeMobile}
                      className="btn-primary w-full justify-center"
                    >
                      Катталуу
                    </Link>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
