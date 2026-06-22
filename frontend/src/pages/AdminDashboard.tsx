import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  FilePlus,
  FileQuestion,
  Loader2,
  Shield,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchAdminAnalytics, getAdminErrorMessage } from "../services/adminService";
import type { AdminAnalytics } from "../types/admin";

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AdminAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAdminAnalytics();
        setAnalytics(data);
      } catch (err) {
        setError(getAdminErrorMessage(err, "Аналитика жүктөлбөй калды."));
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

  if (error || !analytics) {
    return (
      <div className="container-app py-16 text-center">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  const stats = [
    {
      label: "Жалпы окуучулар",
      value: analytics.users.students,
      icon: Users,
      sub: `${analytics.users.total} колдонуучу`,
      color: "text-kyrgyz-600",
    },
    {
      label: "Сабактар",
      value: analytics.content.subjects,
      icon: BookOpen,
      sub: `${analytics.content.topics} тема`,
      color: "text-alpine-600",
    },
    {
      label: "Тесттер",
      value: analytics.content.quizzes,
      icon: FileQuestion,
      sub: "активдүү суроолор",
      color: "text-violet-600",
    },
    {
      label: "Аякталган темалар",
      value: analytics.engagement.completed_topics,
      icon: CheckCircle2,
      sub: `${analytics.engagement.total_points_awarded} упай`,
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="container-app py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kyrgyz-700 to-alpine-600 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-kyrgyz-950 dark:text-white">
              Админ панели
            </h1>
            <p className="text-sm text-kyrgyz-500 dark:text-slate-400">
              BilimHub платформасынын статистикасы
            </p>
          </div>
        </div>
        <Link to="/admin/content" className="btn-primary gap-2 self-start">
          <FilePlus className="h-4 w-4" />
          Контент кошуу
        </Link>
      </motion.div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card-base p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-kyrgyz-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-3xl font-bold text-kyrgyz-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-kyrgyz-400">{stat.sub}</p>
              </div>
              <stat.icon className={`h-9 w-9 opacity-60 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-base p-5"
        >
          <h2 className="mb-4 font-semibold text-kyrgyz-950 dark:text-white">
            Апталык активдүүлүк
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={analytics.charts.weekly_activity}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-kyrgyz-100 dark:stroke-kyrgyz-800" />
              <XAxis dataKey="day_label" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="new_users"
                name="Жаңы окуучулар"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="new_topics"
                name="Жаңы темалар"
                stroke="#059669"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="progress_updates"
                name="Прогресс"
                stroke="#d97706"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="card-base p-5"
        >
          <h2 className="mb-4 font-semibold text-kyrgyz-950 dark:text-white">
            Колдонуучулар рол боюнча
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={analytics.charts.users_by_role}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-kyrgyz-100 dark:stroke-kyrgyz-800" />
              <XAxis dataKey="role" tick={{ fontSize: 11 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                }}
              />
              <Bar dataKey="count" name="Саны" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card-base p-5"
      >
        <h2 className="mb-4 font-semibold text-kyrgyz-950 dark:text-white">
          Акыркы кошулган темалар
        </h2>
        {analytics.recent_topics.length === 0 ? (
          <p className="text-sm text-kyrgyz-500 dark:text-slate-400">
            Темалар жок.{" "}
            <Link to="/admin/content" className="text-alpine-600 hover:underline">
              Бirinchi теманы кошуңуз
            </Link>
          </p>
        ) : (
          <ul className="divide-y divide-kyrgyz-100 dark:divide-kyrgyz-800">
            {analytics.recent_topics.map((topic) => (
              <li
                key={topic.id}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-medium text-kyrgyz-800 dark:text-slate-200">
                  {topic.title}
                </span>
                <span className="text-sm text-kyrgyz-400">{topic.subject_name}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
