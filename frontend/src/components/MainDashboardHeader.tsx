import { Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDashboardLang } from "../context/DashboardLangContext";
import { useDashboardSound } from "../context/DashboardSoundContext";

interface MainDashboardHeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

export default function MainDashboardHeader({
  onLoginClick,
  onRegisterClick,
}: MainDashboardHeaderProps) {
  const navigate = useNavigate();
  const { isAuthenticated, user, logoutUser, isLoading } = useAuth();
  const { lang, setLang, t } = useDashboardLang();
  const { isMuted, toggleMuted, playSound } = useDashboardSound();

  return (
    <header className="relative z-10 flex items-center justify-between border-b border-gray-900/60 bg-[#060b19]/80 px-6 py-4 backdrop-blur-md md:px-12">
      <button
        type="button"
        onClick={() => {
          playSound("click");
          navigate("/");
        }}
        onMouseEnter={() => playSound("hover")}
        className="flex cursor-pointer items-center gap-3"
      >
        <div className="rounded-xl bg-[#10b981] p-2 text-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          🎓
        </div>
        <span className="text-xl font-black tracking-wider text-white">BilimHub</span>
      </button>

      <div className="flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-slate-900 p-1 text-xs font-black">
        <button
          type="button"
          onClick={toggleMuted}
          onMouseEnter={() => playSound("hover")}
          className={`rounded-lg p-2 transition-all ${
            !isMuted
              ? "bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
              : "text-gray-500"
          }`}
          title={isMuted ? t.unmuteSound : t.muteSound}
          aria-label={isMuted ? t.unmuteSound : t.muteSound}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4 animate-pulse" />
          )}
        </button>

        <div className="h-4 w-px bg-gray-800" />

        <button
          type="button"
          onClick={() => {
            playSound("click");
            setLang("ky");
          }}
          onMouseEnter={() => playSound("hover")}
          className={`rounded-lg px-3 py-1 transition-all ${
            lang === "ky"
              ? "bg-[#10b981] text-black shadow-[0_0_10px_#10b981]"
              : "text-gray-400"
          }`}
        >
          KG
        </button>
        <button
          type="button"
          onClick={() => {
            playSound("click");
            setLang("en");
          }}
          onMouseEnter={() => playSound("hover")}
          className={`rounded-lg px-3 py-1 transition-all ${
            lang === "en"
              ? "bg-[#10b981] text-black shadow-[0_0_10px_#10b981]"
              : "text-gray-400"
          }`}
        >
          EN
        </button>
      </div>

      <div className="flex items-center gap-4">
        {!isLoading && isAuthenticated && user ? (
          <>
            <span className="hidden text-xs font-bold uppercase tracking-widest text-gray-400 sm:inline">
              {user.first_name || user.username}
            </span>
            <button
              type="button"
              onClick={() => {
                playSound("click");
                logoutUser();
              }}
              onMouseEnter={() => playSound("hover")}
              className="px-2 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all duration-300 hover:text-red-400"
            >
              {t.logout}
            </button>
          </>
        ) : (
          !isLoading && (
            <>
              <button
                type="button"
                onClick={() => {
                  playSound("open");
                  onLoginClick?.();
                }}
                onMouseEnter={() => playSound("hover")}
                className="text-xs font-black uppercase tracking-wider text-gray-400 transition-all hover:text-white"
              >
                {t.login}
              </button>
              <button
                type="button"
                onClick={() => {
                  playSound("open");
                  onRegisterClick?.();
                }}
                onMouseEnter={() => playSound("hover")}
                className="rounded-xl border border-black bg-[#10b981] px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:scale-105"
              >
                {t.register}
              </button>
            </>
          )
        )}
      </div>
    </header>
  );
}
