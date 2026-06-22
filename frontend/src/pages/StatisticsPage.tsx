import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BADGES, calcProgress, getTitle } from "../data/lobbyData";

export default function StatisticsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const userScore = user?.points ?? 550;
  const progress = calcProgress(userScore);
  const userTitle = getTitle(userScore);
  const unlockedCount = BADGES.filter((b) => b.unlocked).length;
  const displayName = user?.full_name || user?.username;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 font-sans text-white">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-2xl font-black uppercase tracking-wide text-transparent sm:text-3xl">
            📊 Статистика
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-xl border-4 border-black bg-white px-5 py-2.5 font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-0.5"
          >
            ← Башкы бет
          </button>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border-4 border-black bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-950 p-6 shadow-[8px_8px_0px_#0f172a]">
            <p className="text-center text-xs font-black uppercase tracking-widest text-amber-200/80">
              ⭐ Учурдагы наам ⭐
            </p>
            <h2 className="mt-2 text-center text-xl font-black text-amber-200 sm:text-2xl">
              {userTitle}
            </h2>
            {displayName && (
              <p className="mt-2 text-center text-sm font-bold text-purple-200">
                {displayName}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-4 border-black bg-emerald-100 p-5 text-black shadow-[6px_6px_0px_#0f172a]">
              <p className="text-xs font-bold text-slate-600">Жалпы балл</p>
              <p className="mt-1 text-4xl font-black text-emerald-600">
                {userScore} <span className="text-lg">Б</span>
              </p>
            </div>
            <div className="rounded-2xl border-4 border-black bg-purple-100 p-5 text-black shadow-[6px_6px_0px_#0f172a]">
              <p className="text-xs font-bold text-slate-600">Деңгээл прогресси</p>
              <p className="mt-1 text-4xl font-black text-purple-600">{progress}%</p>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#0f172a]">
            <div className="mb-2 flex justify-between text-xs font-black text-slate-600">
              <span>🎯 Деңгээл</span>
              <span className="text-purple-600">{progress}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full border-2 border-black bg-slate-100 p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl border-4 border-black bg-amber-50 p-5 text-black shadow-[6px_6px_0px_#0f172a]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">
                🏅 Төш белгилери
              </h3>
              <span className="rounded-full border-2 border-black bg-yellow-300 px-3 py-0.5 text-xs font-black">
                {unlockedCount}/{BADGES.length}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className={`rounded-xl border-4 border-black p-4 shadow-[3px_3px_0px_#0f172a] ${
                    badge.unlocked ? "bg-violet-100" : "bg-slate-100 opacity-70"
                  }`}
                >
                  <span className="text-2xl">{badge.emoji}</span>
                  <p className="mt-1 text-sm font-black text-slate-800">
                    {badge.unlocked ? badge.title : "🔒 Кулпуланган"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
