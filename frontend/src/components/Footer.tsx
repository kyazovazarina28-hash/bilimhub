import {
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  platform: [
    { label: "Сабактар", href: "/#sabaktar" },
    { label: "Статистика", href: "/#statistika" },
    { label: "Суроолор", href: "/#faq" },
  ],
  account: [
    { label: "Катталуу", href: "/register" },
    { label: "Кирүү", href: "/login" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-kyrgyz-100 bg-white dark:border-kyrgyz-800 dark:bg-kyrgyz-950">
      <div className="container-app py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-kyrgyz-600 to-alpine-500 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-kyrgyz-950 dark:text-white">
                Bilim<span className="text-alpine-500">Hub</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-kyrgyz-600 dark:text-slate-400">
              Кыргызстандык мектеп окуучулары үчүн заманбап интерактивдүү билим
              берүү платформасы. Каалаган убакта, каалаган жерден үйрөнүңүз.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kyrgyz-900 dark:text-white">
              Платформа
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.platform.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-kyrgyz-600 transition-colors hover:text-alpine-600 dark:text-slate-400 dark:hover:text-alpine-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kyrgyz-900 dark:text-white">
              Аккаунт
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.account.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-kyrgyz-600 transition-colors hover:text-alpine-600 dark:text-slate-400 dark:hover:text-alpine-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kyrgyz-900 dark:text-white">
              Байланыш
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-kyrgyz-600 dark:text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-alpine-500" />
                <span>Бишкек ш., Кыргызстан</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-kyrgyz-600 dark:text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-alpine-500" />
                <a
                  href="mailto:info@bilimhub.kg"
                  className="transition-colors hover:text-alpine-600 dark:hover:text-alpine-400"
                >
                  info@bilimhub.kg
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-kyrgyz-600 dark:text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-alpine-500" />
                <a
                  href="tel:+996700123456"
                  className="transition-colors hover:text-alpine-600 dark:hover:text-alpine-400"
                >
                  +996 700 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-kyrgyz-100 pt-8 sm:flex-row dark:border-kyrgyz-800">
          <p className="text-sm text-kyrgyz-500 dark:text-slate-500">
            © {currentYear} BilimHub. Бардык укуктар корголгон.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-kyrgyz-500 dark:text-slate-500">
            Кыргызстан үчүн
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            менен жасалган
          </p>
        </div>
      </div>
    </footer>
  );
}
