import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  FileQuestion,
  Layers,
  Loader2,
  Plus,
  Shield,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  createQuiz,
  createSubject,
  createTopic,
  fetchAdminAnalytics,
  fetchAdminSubjects,
  fetchAdminTopics,
} from "../services/adminService";
import type {
  AdminAnalytics,
  AdminSubject,
  AdminTopic,
  FormErrors,
  QuizFormData,
  SubjectFormData,
  TopicFormData,
} from "../types/admin";

type TabId = "analytics" | "subject" | "topic" | "quiz";

const TABS: { id: TabId; label: string; icon: typeof BarChart3 }[] = [
  { id: "analytics", label: "Аналитика", icon: BarChart3 },
  { id: "subject", label: "Сабак", icon: BookOpen },
  { id: "topic", label: "Тема", icon: Layers },
  { id: "quiz", label: "Тест", icon: FileQuestion },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600 dark:text-red-400">{message}</p>;
}

function validateSubject(data: SubjectFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name_kg.trim()) errors.name_kg = "Кыргызча аты зарыл.";
  if (!data.name_ru.trim()) errors.name_ru = "Орусча аты зарыл.";
  if (!data.icon_name.trim()) errors.icon_name = "Иконка аты зарыл.";
  return errors;
}

function validateTopic(data: TopicFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.subject) errors.subject = "Сабак тандалması зарыл.";
  if (data.title.trim().length < 3) errors.title = "Аталышы кеминде 3 символ.";
  if (data.content_text.trim().length < 10)
    errors.content_text = "Мазмун кеминде 10 символ.";
  if (data.video_url && !/^https?:\/\/.+/.test(data.video_url))
    errors.video_url = "Жарактуу URL киргизиңиз.";
  return errors;
}

function validateQuiz(data: QuizFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.topic) errors.topic = "Тема тандалması зарыл.";
  if (data.question_text.trim().length < 5)
    errors.question_text = "Суроо кеминде 5 символ.";
  if (!data.option_a.trim()) errors.option_a = "A варианты зарыл.";
  if (!data.option_b.trim()) errors.option_b = "B варианты зарыл.";
  if (!data.option_c.trim()) errors.option_c = "C варианты зарыл.";
  if (!data.option_d.trim()) errors.option_d = "D варианты зарыл.";
  if (!["a", "b", "c", "d"].includes(data.correct_answer))
    errors.correct_answer = "Туура жоопту тандаңыз.";
  if (data.points < 1) errors.points = "Упай 1ден чоң болушu керек.";
  return errors;
}

const initialSubject: SubjectFormData = {
  name_kg: "",
  name_ru: "",
  slug: "",
  icon_name: "book",
  sort_order: 0,
  is_active: true,
};

const initialTopic: TopicFormData = {
  subject: 0,
  title: "",
  content_text: "",
  video_url: "",
  section_title: "Негизги бөлүм",
  sort_order: 0,
  is_published: true,
};

const initialQuiz: QuizFormData = {
  topic: 0,
  question_text: "",
  option_a: "",
  option_b: "",
  option_c: "",
  option_d: "",
  correct_answer: "a",
  points: 1,
  sort_order: 0,
  is_active: true,
};

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState<TabId>("analytics");
  const [analytics, setAnalytics] = useState<AdminAnalytics | null>(null);
  const [subjects, setSubjects] = useState<AdminSubject[]>([]);
  const [topics, setTopics] = useState<AdminTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [subjectForm, setSubjectForm] = useState<SubjectFormData>(initialSubject);
  const [topicForm, setTopicForm] = useState<TopicFormData>(initialTopic);
  const [quizForm, setQuizForm] = useState<QuizFormData>(initialQuiz);
  const [subjectErrors, setSubjectErrors] = useState<FormErrors>({});
  const [topicErrors, setTopicErrors] = useState<FormErrors>({});
  const [quizErrors, setQuizErrors] = useState<FormErrors>({});

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [analyticsData, subjectsData, topicsData] = await Promise.all([
        fetchAdminAnalytics(),
        fetchAdminSubjects(),
        fetchAdminTopics(),
      ]);
      setAnalytics(analyticsData);
      setSubjects(subjectsData);
      setTopics(topicsData);
    } catch {
      setApiError("Маалыматтарды жүктөөдө ката кетти.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const handleSubjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSubject(subjectForm);
    setSubjectErrors(errors);
    if (Object.keys(errors).length) return;

    setSubmitting(true);
    setApiError(null);
    setSuccess(null);
    try {
      const payload: SubjectFormData = { ...subjectForm };
      if (!payload.slug.trim()) {
        payload.slug = "";
      }
      await createSubject(payload);
      setSuccess("Сабак ийгиликтүү кошулду!");
      setSubjectForm(initialSubject);
      await loadData();
    } catch {
      setApiError("Сабак кошууда ката кетти.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateTopic(topicForm);
    setTopicErrors(errors);
    if (Object.keys(errors).length) return;

    setSubmitting(true);
    setApiError(null);
    setSuccess(null);
    try {
      await createTopic(topicForm);
      setSuccess("Тема ийгиликтүү кошулду!");
      setTopicForm(initialTopic);
      await loadData();
    } catch {
      setApiError("Тема кошууда ката кетти.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateQuiz(quizForm);
    setQuizErrors(errors);
    if (Object.keys(errors).length) return;

    setSubmitting(true);
    setApiError(null);
    setSuccess(null);
    try {
      await createQuiz(quizForm);
      setSuccess("Тест суроосу ийгиликтүү кошулду!");
      setQuizForm(initialQuiz);
      await loadData();
    } catch {
      setApiError("Тест кошууда ката кетти.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-alpine-500" />
      </div>
    );
  }

  return (
    <div className="container-app py-8 sm:py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kyrgyz-700 to-alpine-600 text-white">
          <Shield className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-kyrgyz-950 dark:text-white">
            Администратор панели
          </h1>
          <p className="text-sm text-kyrgyz-500 dark:text-slate-400">
            Мазмунду башкаруу жана аналитика
          </p>
        </div>
      </div>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center gap-2 rounded-xl bg-alpine-50 px-4 py-3 text-sm text-alpine-800 dark:bg-alpine-950/40 dark:text-alpine-300"
        >
          <CheckCircle2 className="h-4 w-4" />
          {success}
        </motion.div>
      )}
      {apiError && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
          {apiError}
        </div>
      )}

      <div className="mb-6 flex gap-2 overflow-x-auto border-b border-kyrgyz-100 dark:border-kyrgyz-800">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setSuccess(null);
              setApiError(null);
            }}
            className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-alpine-500 text-alpine-600 dark:text-alpine-400"
                : "border-transparent text-kyrgyz-500 hover:text-kyrgyz-800 dark:text-slate-400"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "analytics" && analytics && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Колдонуучулар",
                value: analytics.users.total,
                icon: Users,
                sub: `${analytics.users.students} окуучу`,
              },
              {
                label: "Сабактар",
                value: analytics.content.subjects,
                icon: BookOpen,
                sub: `${analytics.content.topics} тема`,
              },
              {
                label: "Тесттер",
                value: analytics.content.quizzes,
                icon: FileQuestion,
                sub: "активдүү",
              },
              {
                label: "Аякталган темалар",
                value: analytics.engagement.completed_topics,
                icon: CheckCircle2,
                sub: `${analytics.engagement.total_points_awarded} упай`,
              },
            ].map((stat) => (
              <div key={stat.label} className="card-base p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-kyrgyz-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-kyrgyz-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-kyrgyz-400">{stat.sub}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-alpine-500/60" />
                </div>
              </div>
            ))}
          </div>

          <div className="card-base p-5">
            <h2 className="mb-4 font-semibold text-kyrgyz-950 dark:text-white">
              Акыркы кошулган темалар
            </h2>
            {analytics.recent_topics.length === 0 ? (
              <p className="text-sm text-kyrgyz-500">Темалар жок.</p>
            ) : (
              <ul className="divide-y divide-kyrgyz-100 dark:divide-kyrgyz-800">
                {analytics.recent_topics.map((t) => (
                  <li
                    key={t.id}
                    className="flex justify-between py-3 text-sm"
                  >
                    <span className="text-kyrgyz-800 dark:text-slate-200">
                      {t.title}
                    </span>
                    <span className="text-kyrgyz-400">{t.subject_name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      )}

      {activeTab === "subject" && (
        <form onSubmit={handleSubjectSubmit} className="card-base max-w-xl space-y-4 p-6">
          <h2 className="font-semibold text-kyrgyz-950 dark:text-white">
            Жаңы сабак кошуу
          </h2>
          <div>
            <label className="mb-1 block text-sm font-medium">Аты (кыргызча) *</label>
            <input
              value={subjectForm.name_kg}
              onChange={(e) =>
                setSubjectForm({ ...subjectForm, name_kg: e.target.value })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={subjectErrors.name_kg} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Аты (орусча) *</label>
            <input
              value={subjectForm.name_ru}
              onChange={(e) =>
                setSubjectForm({ ...subjectForm, name_ru: e.target.value })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={subjectErrors.name_ru} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Slug (опционал)</label>
            <input
              value={subjectForm.slug}
              onChange={(e) =>
                setSubjectForm({ ...subjectForm, slug: e.target.value })
              }
              placeholder="matematika"
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Иконка аты *</label>
            <input
              value={subjectForm.icon_name}
              onChange={(e) =>
                setSubjectForm({ ...subjectForm, icon_name: e.target.value })
              }
              placeholder="calculator"
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={subjectErrors.icon_name} />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            Сабак кошуу
          </button>
        </form>
      )}

      {activeTab === "topic" && (
        <form onSubmit={handleTopicSubmit} className="card-base max-w-xl space-y-4 p-6">
          <h2 className="font-semibold text-kyrgyz-950 dark:text-white">
            Жаңы тема кошуу
          </h2>
          <div>
            <label className="mb-1 block text-sm font-medium">Сабак *</label>
            <select
              value={topicForm.subject || ""}
              onChange={(e) =>
                setTopicForm({ ...topicForm, subject: Number(e.target.value) })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            >
              <option value="">Тандаңыз...</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name_kg}
                </option>
              ))}
            </select>
            <FieldError message={topicErrors.subject} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Тема аталышы *</label>
            <input
              value={topicForm.title}
              onChange={(e) =>
                setTopicForm({ ...topicForm, title: e.target.value })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={topicErrors.title} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Бөлүм</label>
            <input
              value={topicForm.section_title}
              onChange={(e) =>
                setTopicForm({ ...topicForm, section_title: e.target.value })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Мазмун *</label>
            <textarea
              value={topicForm.content_text}
              onChange={(e) =>
                setTopicForm({ ...topicForm, content_text: e.target.value })
              }
              rows={5}
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={topicErrors.content_text} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Видео URL</label>
            <input
              value={topicForm.video_url}
              onChange={(e) =>
                setTopicForm({ ...topicForm, video_url: e.target.value })
              }
              placeholder="https://youtube.com/..."
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={topicErrors.video_url} />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            Тема кошуу
          </button>
        </form>
      )}

      {activeTab === "quiz" && (
        <form onSubmit={handleQuizSubmit} className="card-base max-w-xl space-y-4 p-6">
          <h2 className="font-semibold text-kyrgyz-950 dark:text-white">
            Жаңы тест суроосу
          </h2>
          <div>
            <label className="mb-1 block text-sm font-medium">Тема *</label>
            <select
              value={quizForm.topic || ""}
              onChange={(e) =>
                setQuizForm({ ...quizForm, topic: Number(e.target.value) })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            >
              <option value="">Тандаңыз...</option>
              {topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.subject_name}: {t.title}
                </option>
              ))}
            </select>
            <FieldError message={quizErrors.topic} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Суроо *</label>
            <textarea
              value={quizForm.question_text}
              onChange={(e) =>
                setQuizForm({ ...quizForm, question_text: e.target.value })
              }
              rows={3}
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={quizErrors.question_text} />
          </div>
          {(["a", "b", "c", "d"] as const).map((key) => {
            const field = `option_${key}` as keyof QuizFormData;
            return (
            <div key={key}>
              <label className="mb-1 block text-sm font-medium">
                Вариант {key.toUpperCase()} *
              </label>
              <input
                value={quizForm[field] as string}
                onChange={(e) =>
                  setQuizForm({ ...quizForm, [field]: e.target.value })
                }
                className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              />
              <FieldError message={quizErrors[`option_${key}`]} />
            </div>
            );
          })}
          <div>
            <label className="mb-1 block text-sm font-medium">Туура жооп *</label>
            <select
              value={quizForm.correct_answer}
              onChange={(e) =>
                setQuizForm({ ...quizForm, correct_answer: e.target.value })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
            <FieldError message={quizErrors.correct_answer} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Упай</label>
            <input
              type="number"
              min={1}
              value={quizForm.points}
              onChange={(e) =>
                setQuizForm({ ...quizForm, points: Number(e.target.value) })
              }
              className="w-full rounded-xl border border-kyrgyz-200 px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={quizErrors.points} />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            Тест кошуу
          </button>
        </form>
      )}
    </div>
  );
}
