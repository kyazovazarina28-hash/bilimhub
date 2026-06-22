import { useNavigate } from "react-router-dom";
import { dailyQuestions, dailyQuests } from "../data/lobbyData";

export default function QuestionsPage() {
  const navigate = useNavigate();
  const completedQuests = dailyQuests.filter((q) => q.done).length;
  const totalReward = dailyQuests.reduce((sum, q) => sum + (q.done ? q.reward : 0), 0);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 font-sans text-white">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-2xl font-black uppercase tracking-wide text-transparent sm:text-3xl">
            ❓ Суроолор
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-xl border-4 border-black bg-white px-5 py-2.5 font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-0.5"
          >
            ← Башкы бет
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-4 border-black bg-pink-100 p-4 text-black shadow-[6px_6px_0px_#0f172a]">
            <p className="text-xs font-bold text-slate-600">Күнүмдүк суроолор</p>
            <p className="text-3xl font-black text-pink-600">{dailyQuestions.length}</p>
          </div>
          <div className="rounded-2xl border-4 border-black bg-orange-100 p-4 text-black shadow-[6px_6px_0px_#0f172a]">
            <p className="text-xs font-bold text-slate-600">Аткарылган квесттер</p>
            <p className="text-3xl font-black text-orange-600">
              {completedQuests}/{dailyQuests.length}
            </p>
            <p className="mt-1 text-xs font-bold text-slate-500">+{totalReward} Б сыйлык</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-pink-300">
            💡 Күнүмдүк суроолор
          </h2>
          <ul className="space-y-4">
            {dailyQuestions.map((item, index) => (
              <li
                key={item.q}
                className="rounded-2xl border-4 border-black bg-amber-50 p-5 text-black shadow-[6px_6px_0px_#0f172a]"
              >
                <p className="text-xs font-black uppercase tracking-wider text-indigo-700">
                  Суроо {index + 1}
                </p>
                <p className="mt-2 text-base font-black text-slate-900">❓ {item.q}</p>
                <p className="mt-3 border-l-4 border-pink-400 pl-3 text-sm leading-relaxed text-slate-700">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-orange-300">
            ⚔️ Күнүмдүк квесттер
          </h2>
          <ul className="space-y-3">
            {dailyQuests.map((quest) => (
              <li
                key={quest.id}
                className={`flex items-center justify-between rounded-2xl border-4 border-black px-4 py-4 shadow-[4px_4px_0px_#0f172a] ${
                  quest.done ? "bg-green-100 text-green-900" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{quest.done ? "✅" : "⏳"}</span>
                  <span className="text-sm font-bold">{quest.title}</span>
                </div>
                <span className="rounded-full border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-black text-black">
                  +{quest.reward} Б
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
