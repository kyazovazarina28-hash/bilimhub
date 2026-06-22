import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DASHBOARD_LANG_KEY,
  DASHBOARD_TRANSLATIONS,
  type DashboardLang,
  type DashboardTranslations,
} from "../data/dashboardTranslations";

interface DashboardLangContextValue {
  lang: DashboardLang;
  setLang: (lang: DashboardLang) => void;
  t: DashboardTranslations;
}

const DashboardLangContext = createContext<DashboardLangContextValue | null>(null);

function readStoredLang(): DashboardLang {
  try {
    const stored = localStorage.getItem(DASHBOARD_LANG_KEY);
    if (stored === "ky" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return "ky";
}

export function DashboardLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<DashboardLang>(readStoredLang);

  const setLang = useCallback((next: DashboardLang) => {
    setLangState(next);
    try {
      localStorage.setItem(DASHBOARD_LANG_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: DASHBOARD_TRANSLATIONS[lang],
    }),
    [lang, setLang],
  );

  return (
    <DashboardLangContext.Provider value={value}>
      {children}
    </DashboardLangContext.Provider>
  );
}

export function useDashboardLang(): DashboardLangContextValue {
  const ctx = useContext(DashboardLangContext);
  if (!ctx) {
    throw new Error("useDashboardLang must be used within DashboardLangProvider");
  }
  return ctx;
}
