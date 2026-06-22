import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Bot,
  Layers,
  Loader2,
  MessageSquare,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchDashboard } from "../services/dashboardService";
import type { Achievement, DashboardData } from "../types/dashboard";

const ACHIEVEMENT_ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  star: Star,
  trophy: Trophy,
  layers: Layers,
  award: Award,
  bot: Bot,
  message: MessageSquare,
};

function AchievementBadge({ achievement }: { achievement: Achievement }) {
  const Icon = ACHIEVEMENT_ICONS[achievement.icon] ?? Star;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative rounded-2xl border p-4 text-center transition-all ${
        achievement.unlocked
          ? "border-alpine-200 bg-alpine-50 dark:border-alpine-800 dark:bg-alpine-950/30"
          : "border-kyrgyz-100 bg-kyrgyz-50 opacity-60 grayscale dark:border-kyrgyz-800 dark:bg-kyrgyz-900/50"
      }`}
    >
      <div
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${
          achievement.unlocked
            ? "bg-alpine-500 text-white"
            : "bg-kyrgyz-200 text-kyrgyz-500 dark:bg-kyrgyz-700 dark:text-kyrgyz-400"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-3 text-sm font-semibold text-kyrgyz-900 dark:text-white">
        {achievement.title}
      </h3>
      <p className="mt-1 text-xs text-kyrgyz-500 dark:text-slate-400">
        {achievement.description}
      </p>
      {achievement.unlocked && (
        <span className="mt-2 inline-block text-xs font-medium text-alpine-600 dark:text-alpine-400">
          ✓ Ачылды
        </span>
      )}
    </motion.div>
  );
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const dashboard = await fetchDashboard();
        setData(dashboard);
      } catch {
        setError("Панел маалыматтарын жүктөөдө ката кетти.");
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-alpine-500" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container-app py-16 text-center">
        <p className="text-kyrgyz-600 dark:text-slate-400">{error}</p>
      </div>
    );
  }

  const displayName =
    data.user.first_name || data.user.username || data.user.email;
  const unlockedCount = data.achievements.filter((a) => a.unlocked).length;

  return (
    <div className="container-app py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-kyrgyz-950 sm:text-3xl dark:text-white">
          Салам, {displayName}! 👋
        </h1>
        <p className="mt-1 text-kyrgyz-600 dark:text-slate-400">
          Окуу прогрессиңиз жана жетишкендиктериңиз
        </p>
      </motion.div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Жалпы упай",
            value: data.stats.total_points,
            icon: Star,
            color: "text-sunset-500",
            bg: "bg-orange-50 dark:bg-orange-950/30",
          },
          {
            label: "Аякталган темалар",
            value: data.stats.completed_topics,
            icon: BookOpen,
            color: "text-alpine-500",
            bg: "bg-alpine-50 dark:bg-alpine-950/30",
          },
          {
            label: "Башталган темалар",
            value: data.stats.started_topics,
            icon: Target,
            color: "text-kyrgyz-500",
            bg: "bg-kyrgyz-50 dark:bg-kyrgyz-900/50",
          },
          {
            label: "AI суроолор",
            value: data.stats.chat_messages,
            icon: Bot,
            color: "text-violet-500",
            bg: "bg-violet-50 dark:bg-violet-950/30",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="card-base p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-kyrgyz-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-kyrgyz-950 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg}`}
              >
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-base p-5 lg:col-span-3"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-kyrgyz-950 dark:text-white">
              Окуу активдүүлүгү
            </h2>
            <span className="text-xs text-kyrgyz-500 dark:text-slate-400">
              Акыркы 7 күн
            </span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.weekly_activity}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  className="text-kyrgyz-100 dark:text-kyrgyz-800"
                />
                <XAxis
                  dataKey="day_label"
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-kyrgyz-500"
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-kyrgyz-500"
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "13px",
                  }}
                  labelFormatter={(_, payload) =>
                    payload?.[0]?.payload?.date ?? ""
                  }
                />
                <Legend />
                <Bar
                  dataKey="topics_studied"
                  name="Темалар"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="chat_messages"
                  name="AI суроолор"
                  fill="#0c8ce7"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-base flex flex-col justify-center bg-gradient-to-br from-kyrgyz-700 to-alpine-700 p-6 text-white lg:col-span-2"
        >
          <Zap className="h-8 w-8 text-alpine-300" />
          <p className="mt-4 text-3xl font-bold">{data.stats.total_points}</p>
          <p className="mt-1 text-kyrgyz-200">Жалпы упай</p>
          <p className="mt-4 text-sm text-kyrgyz-200">
            {unlockedCount} / {data.achievements.length} жетишкендик ачылды
          </p>
          <Link
            to="/ai-tutor"
            className="btn-primary mt-6 inline-flex bg-white/20 hover:bg-white/30"
          >
            <Bot className="h-4 w-4" />
            AI мугалим менен сүйлөшүү
          </Link>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-8"
      >
        <h2 className="mb-4 text-lg font-bold text-kyrgyz-950 dark:text-white">
          Жетишкендиктер
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="mb-4 text-lg font-bold text-kyrgyz-950 dark:text-white">
          Сабактар боюнча прогресс
        </h2>
        <div className="space-y-3">
          {data.subject_progress.map((subject) => (
            <Link
              key={subject.slug}
              to={`/subjects/${subject.slug}`}
              className="card-base flex items-center gap-4 p-4 transition-all hover:shadow-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kyrgyz-100 text-kyrgyz-600 dark:bg-kyrgyz-800 dark:text-kyrgyz-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-medium text-kyrgyz-900 dark:text-white">
                    {subject.name_kg}
                  </p>
                  <span className="shrink-0 text-sm font-semibold text-alpine-600 dark:text-alpine-400">
                    {subject.progress_percent}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-kyrgyz-100 dark:bg-kyrgyz-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-kyrgyz-500 to-alpine-500 transition-all"
                    style={{ width: `${subject.progress_percent}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-kyrgyz-500 dark:text-slate-500">
                  {subject.completed_topics} / {subject.total_topics} тема
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
