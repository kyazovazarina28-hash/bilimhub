import { X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { getApiErrorMessage } from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { useDashboardLang } from "../context/DashboardLangContext";
import { useDashboardSound } from "../context/DashboardSoundContext";
import { useModalBubbleAnimation } from "../hooks/useModalBubbleAnimation";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function usernameFromFullName(fullName: string, email: string): string {
  const fromName = fullName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
  if (fromName.length >= 3) return fromName.slice(0, 30);
  const fromEmail = email.split("@")[0]?.replace(/[^a-z0-9_]/gi, "") ?? "user";
  return (fromEmail || "user").slice(0, 30);
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const { t } = useDashboardLang();
  const { playSound } = useDashboardSound();
  const { registerUser } = useAuth();
  const canvasRef = useModalBubbleAnimation(isOpen);
  const [fullName, setFullName] = useState("");
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

    if (!fullName.trim() || !email.trim() || password.length < 8) {
      setError(
        t.email === "Email Address"
          ? "Please fill all fields. Password must be at least 8 characters."
          : "Бардык талааларды толтуруңуз. Пароль кеминде 8 символ болушу керек.",
      );
      return;
    }

    setSubmitting(true);
    try {
      await registerUser(
        usernameFromFullName(fullName, email),
        email.trim(),
        password,
        "STUDENT",
      );
      onClose();
    } catch (err) {
      setError(
        getApiErrorMessage(
          err,
          t.email === "Email Address" ? "Registration failed." : "Катталуу ийгиликсиз.",
        ),
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative flex w-full max-w-[430px] flex-col items-center overflow-hidden rounded-3xl border border-purple-500/40 bg-[#070b19]/60 p-8 shadow-[0_0_40px_rgba(168,85,247,0.4)] backdrop-blur-2xl">
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
          <div className="mb-3 animate-bounce text-4xl">✨</div>
          <h2 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-black uppercase tracking-wider text-transparent">
            {t.register}
          </h2>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <div>
              <label className="mb-1.5 block pl-1 text-[10px] font-black uppercase tracking-widest text-purple-300">
                {t.fullname}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => playSound("hover")}
                className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-purple-500/80 focus:shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="mb-1.5 block pl-1 text-[10px] font-black uppercase tracking-widest text-purple-300">
                {t.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => playSound("hover")}
                className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-purple-500/80 focus:shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="mb-1.5 block pl-1 text-[10px] font-black uppercase tracking-widest text-purple-300">
                {t.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => playSound("hover")}
                className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-purple-500/80 focus:shadow-[0_0_12px_rgba(168,85,247,0.2)]"
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
              className="mt-4 w-full rounded-xl border border-[#f43f5e]/20 bg-gradient-to-r from-[#9333ea] to-[#db2777] py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_5px_20px_rgba(219,39,119,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
            >
              {submitting ? "..." : t.register}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
