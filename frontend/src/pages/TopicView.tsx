import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  Download,
  FileText,
  Loader2,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import QuizEngine from "../components/QuizEngine";
import {
  fetchTopicDetail,
  getYouTubeEmbedUrl,
} from "../services/educationalService";
import type { TopicDetail } from "../types/educational";

interface QuizWithAnswer {
  id: number;
  question_text: string;
  options: { key: string; text: string }[];
  correct_answer?: string;
  points: number;
  sort_order: number;
}

export default function TopicViewPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const { isAuthenticated } = useAuth();
  const [topic, setTopic] = useState<TopicDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "video" | "quiz">(
    "content",
  );

  useEffect(() => {
    if (!topicId) return;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTopicDetail(Number(topicId));
        setTopic(data);
      } catch {
        setError("Тема маалыматтарын жүктөөдө ката кетти.");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [topicId]);

  if (loading) {
    return (
      <div className="container-app flex min-h-[50vh] items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-alpine-500" />
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div className="container-app py-16 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
        <p className="mt-4 text-kyrgyz-700 dark:text-slate-300">
          {error ?? "Тема табылган жок."}
        </p>
        <Link to="/" className="btn-secondary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Башкы бетке
        </Link>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(topic.video_url);
  const quizzesWithAnswers = topic.quizzes as QuizWithAnswer[];

  const tabs = [
    { id: "content" as const, label: "Материал", icon: FileText },
    { id: "video" as const, label: "Видео", icon: Video, hidden: !embedUrl },
    { id: "quiz" as const, label: "Тест", icon: FileText },
  ].filter((tab) => !tab.hidden);

  return (
    <div className="container-app py-8 sm:py-12">
      <Link
        to={`/subjects/${topic.subject_slug}`}
        className="btn-ghost mb-6 inline-flex gap-1.5 px-0 hover:bg-transparent"
      >
        <ArrowLeft className="h-4 w-4" />
        {topic.subject_name} — артка
      </Link>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm font-medium text-alpine-600 dark:text-alpine-400">
          {topic.section_title}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-kyrgyz-950 sm:text-3xl dark:text-white">
          {topic.title}
        </h1>

        {topic.is_completed && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-alpine-100 px-3 py-1 text-xs font-semibold text-alpine-700 dark:bg-alpine-950/50 dark:text-alpine-400">
            ✓ Аякталды
          </span>
        )}
      </motion.div>

      <div className="mt-8 flex gap-2 overflow-x-auto border-b border-kyrgyz-100 dark:border-kyrgyz-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-alpine-500 text-alpine-600 dark:text-alpine-400"
                : "border-transparent text-kyrgyz-500 hover:text-kyrgyz-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "content" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <article className="card-base prose prose-kyrgyz max-w-none p-6 dark:prose-invert">
              {topic.content_text.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 last:mb-0 leading-relaxed text-kyrgyz-800 dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {topic.pdf_url && (
              <div className="card-base flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-kyrgyz-900 dark:text-white">
                      PDF материал
                    </p>
                    <p className="text-sm text-kyrgyz-500 dark:text-slate-400">
                      Кошумча окуу китеби
                    </p>
                  </div>
                </div>
                <a
                  href={topic.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn-primary w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Жүктөп алуу
                </a>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "video" && embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-base overflow-hidden"
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={embedUrl}
                title={topic.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {activeTab === "quiz" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {!isAuthenticated ? (
              <div className="card-base p-6 text-center">
                <p className="text-sm text-kyrgyz-600 dark:text-slate-400">
                  Тест тапшыруу үчүн системага кириңиз.
                </p>
                <Link to="/login" className="btn-primary mt-4 inline-flex">
                  Кирүү
                </Link>
              </div>
            ) : quizzesWithAnswers.some((q) => q.correct_answer) ? (
              <QuizEngine
                topicId={topic.id}
                quizzes={quizzesWithAnswers as Parameters<typeof QuizEngine>[0]["quizzes"]}
                onComplete={() => {
                  void fetchTopicDetail(topic.id).then(setTopic);
                }}
              />
            ) : (
              <div className="card-base p-6 text-center text-sm text-kyrgyz-600 dark:text-slate-400">
                Тест суроолору жükтөөдө...
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
