import { X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { getApiErrorMessage } from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { useDashboardLang } from "../context/DashboardLangContext";
import { useDashboardSound } from "../context/DashboardSoundContext";
import { useModalBubbleAnimation } from "../hooks/useModalBubbleAnimation";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { t } = useDashboardLang();
  const { playSound } = useDashboardSound();
  const { loginUser } = useAuth();
  const canvasRef = useModalBubbleAnimation(isOpen);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    playSound("click");
    setError(null);

    if (!email.trim() || password.length < 8) {
      setError(
        t.email === "Email Address"
          ? "Please enter email and password (min. 8 characters)."
          : "Email жана парольду киргизиңиз (кеминде 8 символ).",
      );
      return;
    }

    setSubmitting(true);
    try {
      await loginUser(email.trim(), password);
      onClose();
    } catch (err) {
      setError(
        getApiErrorMessage(
          err,
          t.email === "Email Address" ? "Invalid email or password." : "Email же пароль ката.",
        ),
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative flex w-full max-w-[430px] flex-col items-center overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#070b19]/60 p-8 shadow-[0_0_40px_rgba(6,182,212,0.4)] backdrop-blur-2xl">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          aria-hidden
        />

        <button
          type="button"
          onClick={() => {
            playSound("click");
            onClose();
          }}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-3 animate-bounce text-4xl">🔑</div>
          <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-black uppercase tracking-wider text-transparent">
            {t.login}
          </h2>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <div>
              <label className="mb-1.5 block pl-1 text-[10px] font-black uppercase tracking-widest text-cyan-300">
                {t.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => playSound("hover")}
                className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-500/80 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="mb-1.5 block pl-1 text-[10px] font-black uppercase tracking-widest text-cyan-300">
                {t.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => playSound("hover")}
                className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-500/80 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-center text-xs font-bold text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              onMouseEnter={() => playSound("hover")}
              className="mt-4 w-full rounded-xl border border-[#06b6d4]/20 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_5px_20px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
            >
              {submitting ? "..." : t.login}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
