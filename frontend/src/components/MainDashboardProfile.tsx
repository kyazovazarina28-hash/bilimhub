import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAGIC_SOCIAL_LINKS } from "./SocialBrandIcons";
import { useAuth } from "../context/AuthContext";
import { useDashboardLang } from "../context/DashboardLangContext";
import { useDashboardSound } from "../context/DashboardSoundContext";
import { calcProgress } from "../data/lobbyData";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";

function readStoredAvatar(): string {
  try {
    return localStorage.getItem("user_avatar") || DEFAULT_AVATAR;
  } catch {
    return DEFAULT_AVATAR;
  }
}

export default function MainDashboardProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useDashboardLang();
  const { playSound } = useDashboardSound();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [avatar, setAvatar] = useState<string>(() => {
    const stored = readStoredAvatar();
    if (stored !== DEFAULT_AVATAR) return stored;
    return user?.avatar_url || user?.avatar || DEFAULT_AVATAR;
  });

  const userScore = user?.points ?? 550;
  const progress = calcProgress(userScore);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setAvatar(base64String);
      try {
        localStorage.setItem("user_avatar", base64String);
      } catch (err) {
        console.error("Storage error:", err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="sticky top-24 flex w-full flex-col items-center rounded-3xl border border-gray-800/60 bg-[#060b19]/50 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:w-72">
      <div className="mb-6 flex w-full flex-col gap-2">
        <button
          type="button"
          onClick={() => {
            playSound("click");
            navigate("/statistics");
          }}
          onMouseEnter={() => playSound("hover")}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-yellow-500 bg-[#fde047] py-2.5 text-xs font-black uppercase text-black shadow-[0_4px_15px_rgba(253,224,71,0.3)] transition-all duration-300 hover:bg-[#facc15]"
        >
          {t.statsBtn}
        </button>
        <button
          type="button"
          onClick={() => {
            playSound("click");
            navigate("/questions");
          }}
          onMouseEnter={() => playSound("hover")}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white py-2.5 text-xs font-black uppercase text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-gray-100"
        >
          {t.questionsBtn}
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAvatarChange}
        accept="image/*"
        className="hidden"
      />

      <div className="relative mb-4 flex h-32 w-32 items-center justify-center">
        <div className="animate-spin-custom absolute inset-0 rounded-full border-2 border-transparent border-b-emerald-400 border-t-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)]" />

        <button
          type="button"
          onClick={() => {
            playSound("click");
            fileInputRef.current?.click();
          }}
          onMouseEnter={() => playSound("hover")}
          className="group relative z-10 h-[114px] w-[114px] cursor-pointer overflow-hidden rounded-full border border-gray-800 bg-slate-900"
          title={t.changePhoto}
        >
          <img
            src={avatar}
            alt="User profile"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-lg">📸</span>
          </div>
        </button>
      </div>

      <div className="mb-6 w-full text-center">
        <h2 className="text-base font-black uppercase tracking-wider text-white">
          {t.userTitle}
        </h2>
        <p className="mt-1 flex items-center justify-center gap-1 text-[9px] font-black uppercase tracking-widest text-purple-400">
          {t.userSub}
        </p>
      </div>

      <div className="relative my-2 flex h-40 w-40 items-center justify-center rounded-full border border-dashed border-purple-500/20 bg-black/30 shadow-inner">
        <button
          type="button"
          onClick={() => {
            playSound("click");
            setIsMenuOpen((open) => !open);
          }}
          onMouseEnter={() => playSound("hover")}
          className="absolute z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-base font-bold text-purple-600 shadow-[0_0_20px_rgba(255,255,255,0.9)] transition-all duration-300 hover:scale-105"
          aria-expanded={isMenuOpen}
          aria-label={t.toggleSocialMenu}
        >
          ★
        </button>

        {MAGIC_SOCIAL_LINKS.map((link, index) => {
          const angle = (index * 360) / MAGIC_SOCIAL_LINKS.length;
          const radius = isMenuOpen ? 58 : 0;
          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("click")}
              onMouseEnter={() => playSound("hover")}
              className={`absolute z-20 flex h-8 w-8 items-center justify-center rounded-full border bg-[#070b19] transition-all duration-500 ${link.color} ${
                isMenuOpen
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-0 opacity-0"
              }`}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              <Icon className={link.iconClass} />
            </a>
          );
        })}
      </div>

      <div className="mt-5 flex w-full justify-between border-t border-gray-800/60 pt-4 text-center">
        <div>
          <span className="block text-[9px] font-black uppercase tracking-wider text-gray-500">
            {t.level}
          </span>
          <span className="text-sm font-black text-purple-400">{progress}%</span>
        </div>
        <div>
          <span className="block text-[9px] font-black uppercase tracking-wider text-gray-500">
            {t.points}
          </span>
          <span className="text-sm font-black text-yellow-400">
            {userScore} {t.pointsUnit}
          </span>
        </div>
      </div>
    </div>
  );
}
