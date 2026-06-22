import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileQuestion,
  Layers,
  Loader2,
  Save,
  Shield,
  Video,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  createQuiz,
  createTopic,
  fetchAdminTopics,
  fetchSubjects,
  getAdminErrorMessage,
} from "../services/adminService";
import type {
  AdminTopic,
  FormErrors,
  QuizFormState,
  SubjectSummary,
  TopicFormState,
} from "../types/admin";

type TabId = "topic" | "quiz";

const INITIAL_TOPIC: TopicFormState = {
  subject: 0,
  title: "",
  content_text: "",
  video_url: "",
  section_title: "Негизги бөлүм",
  sort_order: 0,
  is_published: true,
};

const INITIAL_QUIZ: QuizFormState = {
  topic: 0,
  question_text: "",
  option_a: "",
  option_b: "",
  option_c: "",
  option_d: "",
  correct_answer: "a",
  points: 2,
  sort_order: 1,
  is_active: true,
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600 dark:text-red-400">{message}</p>;
}

function normalizeYouTubeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const idMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  );
  if (idMatch?.[1]) return `https://www.youtube.com/watch?v=${idMatch[1]}`;

  if (/^[\w-]{11}$/.test(trimmed)) {
    return `https://www.youtube.com/watch?v=${trimmed}`;
  }

  return trimmed;
}

function validateTopicForm(data: TopicFormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.subject) errors.subject = "Сабак тандоо зарыл.";
  if (data.title.trim().length < 3) errors.title = "Аталышы кеминде 3 символ.";
  if (data.content_text.trim().length < 10) {
    errors.content_text = "Теориялык материал кеминде 10 символ.";
  }
  const video = normalizeYouTubeUrl(data.video_url);
  if (data.video_url.trim() && !/^https?:\/\/.+/.test(video)) {
    errors.video_url = "YouTube шилтемеси же 11 символдук видео кодун киргизиңиз.";
  }
  return errors;
}

function validateQuizForm(data: QuizFormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.topic) errors.topic = "Тема тандоо зарыл.";
  if (data.question_text.trim().length < 5) {
    errors.question_text = "Суроо кеминде 5 символ.";
  }
  if (!data.option_a.trim()) errors.option_a = "A варианты зарыл.";
  if (!data.option_b.trim()) errors.option_b = "B варианты зарыл.";
  if (!data.option_c.trim()) errors.option_c = "C варианты зарыл.";
  if (!data.option_d.trim()) errors.option_d = "D варианты зарыл.";
  if (!["a", "b", "c", "d"].includes(data.correct_answer)) {
    errors.correct_answer = "Туура жоопту тандаңыз.";
  }
  if (data.points < 1) errors.points = "Упай 1ден чоң болушu керек.";
  return errors;
}

function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      className={`fixed right-4 top-20 z-[100] flex max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 shadow-lg ${
        type === "success"
          ? "border-alpine-200 bg-alpine-50 text-alpine-900 dark:border-alpine-800 dark:bg-alpine-950/90 dark:text-alpine-100"
          : "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950/90 dark:text-red-100"
      }`}
      role="alert"
    >
      {type === "success" ? (
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-alpine-600 dark:text-alpine-400" />
      ) : (
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
      )}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="shrink-0 rounded-lg p-1 opacity-70 hover:opacity-100"
        aria-label="Жабуу"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState<TabId>("topic");
  const [subjects, setSubjects] = useState<SubjectSummary[]>([]);
  const [topics, setTopics] = useState<AdminTopic[]>([]);
  const [topicForm, setTopicForm] = useState<TopicFormState>(INITIAL_TOPIC);
  const [quizForm, setQuizForm] = useState<QuizFormState>(INITIAL_QUIZ);
  const [quizSubjectFilter, setQuizSubjectFilter] = useState(0);
  const [topicErrors, setTopicErrors] = useState<FormErrors>({});
  const [quizErrors, setQuizErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(true);
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [submittingTopic, setSubmittingTopic] = useState(false);
  const [submittingQuiz, setSubmittingQuiz] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const loadSubjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchSubjects();
      setSubjects(data);
    } catch (err) {
      setToast({
        type: "error",
        message: getAdminErrorMessage(err, "Сабактар жүктөлбөй калды."),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const loadTopics = useCallback(async () => {
    setTopicsLoading(true);
    try {
      const data = await fetchAdminTopics();
      setTopics(data);
    } catch (err) {
      setToast({
        type: "error",
        message: getAdminErrorMessage(err, "Темалар жүктөлбөй калды."),
      });
    } finally {
      setTopicsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSubjects();
    void loadTopics();
  }, [loadSubjects, loadTopics]);

  const filteredTopics = useMemo(() => {
    if (!quizSubjectFilter) return topics;
    return topics.filter((t) => t.subject === quizSubjectFilter);
  }, [topics, quizSubjectFilter]);

  const updateTopicField = <K extends keyof TopicFormState>(
    field: K,
    value: TopicFormState[K],
  ) => {
    setTopicForm((prev) => ({ ...prev, [field]: value }));
    setTopicErrors((prev) => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  };

  const updateQuizField = <K extends keyof QuizFormState>(
    field: K,
    value: QuizFormState[K],
  ) => {
    setQuizForm((prev) => ({ ...prev, [field]: value }));
    setQuizErrors((prev) => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  };

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateTopicForm(topicForm);
    setTopicErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmittingTopic(true);
    const savedSubjectId = topicForm.subject;
    try {
      const topic = await createTopic({
        subject: topicForm.subject,
        title: topicForm.title.trim(),
        content_text: topicForm.content_text.trim(),
        video_url: normalizeYouTubeUrl(topicForm.video_url),
        section_title: topicForm.section_title.trim() || "Негизги бөлүм",
        sort_order: topicForm.sort_order,
        is_published: topicForm.is_published,
      });

      setToast({
        type: "success",
        message: "Маалымат базага ийгиликтүү жазылды! Тема кошулду.",
      });
      setTopicForm(INITIAL_TOPIC);
      await loadTopics();

      setQuizSubjectFilter(savedSubjectId);
      setQuizForm((prev) => ({ ...prev, topic: topic.id }));
      setActiveTab("quiz");
    } catch (err) {
      setToast({
        type: "error",
        message: getAdminErrorMessage(err, "Тема сакталбай калды."),
      });
    } finally {
      setSubmittingTopic(false);
    }
  };

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateQuizForm(quizForm);
    setQuizErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmittingQuiz(true);
    try {
      await createQuiz({
        topic: quizForm.topic,
        question_text: quizForm.question_text.trim(),
        option_a: quizForm.option_a.trim(),
        option_b: quizForm.option_b.trim(),
        option_c: quizForm.option_c.trim(),
        option_d: quizForm.option_d.trim(),
        correct_answer: quizForm.correct_answer,
        points: quizForm.points,
        sort_order: quizForm.sort_order,
        is_active: quizForm.is_active,
      });

      setToast({
        type: "success",
        message: "Маалымат базага ийгиликтүү жазылды! Тест суроосу кошулду.",
      });
      setQuizForm(INITIAL_QUIZ);
    } catch (err) {
      setToast({
        type: "error",
        message: getAdminErrorMessage(err, "Тест сакталбай калды."),
      });
    } finally {
      setSubmittingQuiz(false);
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
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          to="/admin"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-kyrgyz-600 transition-colors hover:text-alpine-600 dark:text-slate-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Админ панeline кайтуу
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kyrgyz-700 to-alpine-600 text-white shadow-glow-blue">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-kyrgyz-950 dark:text-white">
              Контент башкаруу
            </h1>
            <p className="text-sm text-kyrgyz-500 dark:text-slate-400">
              Темалар, видеолор жана тесттерди базага кошуңуз
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mb-6 flex gap-2 overflow-x-auto rounded-xl border border-kyrgyz-100 bg-kyrgyz-50/50 p-1 dark:border-kyrgyz-800 dark:bg-kyrgyz-900/50">
        {(
          [
            { id: "topic" as const, label: "Жаңы тема", icon: Layers },
            { id: "quiz" as const, label: "Тест кошуу", icon: FileQuestion },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-white text-alpine-700 shadow-sm dark:bg-kyrgyz-800 dark:text-alpine-300"
                : "text-kyrgyz-600 hover:text-kyrgyz-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "topic" && (
        <motion.form
          key="topic-form"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleTopicSubmit}
          className="card-base space-y-5 p-6"
          noValidate
        >
          <div className="flex items-center gap-2 border-b border-kyrgyz-100 pb-4 dark:border-kyrgyz-800">
            <Layers className="h-5 w-5 text-alpine-500" />
            <h2 className="font-semibold text-kyrgyz-950 dark:text-white">
              Жаңы тема кошуу
            </h2>
          </div>

          <div>
            <label htmlFor="topic-subject" className="mb-1.5 block text-sm font-medium">
              Сабак *
            </label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <select
                id="topic-subject"
                value={topicForm.subject || ""}
                onChange={(e) => updateTopicField("subject", Number(e.target.value))}
                className="w-full appearance-none rounded-xl border border-kyrgyz-200 bg-white py-2.5 pl-10 pr-4 text-sm transition-colors focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              >
                <option value="">Сабак тандаңыз...</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name_kg}
                  </option>
                ))}
              </select>
            </div>
            <FieldError message={topicErrors.subject} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="topic-title" className="mb-1.5 block text-sm font-medium">
                Теманын аталышы *
              </label>
              <input
                id="topic-title"
                value={topicForm.title}
                onChange={(e) => updateTopicField("title", e.target.value)}
                placeholder="Квадраттык теңдемелер"
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm transition-colors focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              />
              <FieldError message={topicErrors.title} />
            </div>
            <div>
              <label htmlFor="topic-section" className="mb-1.5 block text-sm font-medium">
                Бөлүм
              </label>
              <input
                id="topic-section"
                value={topicForm.section_title}
                onChange={(e) => updateTopicField("section_title", e.target.value)}
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic-video" className="mb-1.5 block text-sm font-medium">
              YouTube видео (шилтeme же код)
            </label>
            <div className="relative">
              <Video className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
              <input
                id="topic-video"
                value={topicForm.video_url}
                onChange={(e) => updateTopicField("video_url", e.target.value)}
                placeholder="dQw4w9WgXcQ же https://youtube.com/watch?v=..."
                className="w-full rounded-xl border border-kyrgyz-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              />
            </div>
            <p className="mt-1 text-xs text-kyrgyz-400 dark:text-slate-500">
              11 символдук видео ID же толук YouTube шилтемесин киргизиңиз
            </p>
            <FieldError message={topicErrors.video_url} />
          </div>

          <div>
            <label htmlFor="topic-content" className="mb-1.5 block text-sm font-medium">
              Теориялык материал *
            </label>
            <textarea
              id="topic-content"
              value={topicForm.content_text}
              onChange={(e) => updateTopicField("content_text", e.target.value)}
              rows={8}
              placeholder="Теманын негизги теориясы, формулалар, мисалдар..."
              className="w-full resize-y rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm leading-relaxed focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={topicErrors.content_text} />
          </div>

          <motion.button
            type="submit"
            disabled={submittingTopic}
            whileTap={{ scale: 0.97 }}
            className="btn-primary gap-2 disabled:opacity-60"
          >
            {submittingTopic ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Сакталууда...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Теманы сактоо
              </>
            )}
          </motion.button>
        </motion.form>
      )}

      {activeTab === "quiz" && (
        <motion.form
          key="quiz-form"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleQuizSubmit}
          className="card-base space-y-5 p-6"
          noValidate
        >
          <div className="flex items-center gap-2 border-b border-kyrgyz-100 pb-4 dark:border-kyrgyz-800">
            <FileQuestion className="h-5 w-5 text-alpine-500" />
            <h2 className="font-semibold text-kyrgyz-950 dark:text-white">
              Тест суроосу кошуу
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quiz-subject-filter" className="mb-1.5 block text-sm font-medium">
                Сабак боюнча фильтр
              </label>
              <select
                id="quiz-subject-filter"
                value={quizSubjectFilter || ""}
                onChange={(e) => {
                  setQuizSubjectFilter(Number(e.target.value));
                  setQuizForm((prev) => ({ ...prev, topic: 0 }));
                }}
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              >
                <option value="">Бардык сабактар</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name_kg}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quiz-topic" className="mb-1.5 block text-sm font-medium">
                Тема *
              </label>
              <select
                id="quiz-topic"
                value={quizForm.topic || ""}
                onChange={(e) => updateQuizField("topic", Number(e.target.value))}
                disabled={topicsLoading}
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm disabled:opacity-60 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              >
                <option value="">
                  {topicsLoading ? "Жүктөлүүдө..." : "Тема тандаңыз..."}
                </option>
                {filteredTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.subject_name}: {t.title}
                  </option>
                ))}
              </select>
              <FieldError message={quizErrors.topic} />
            </div>
          </div>

          <div>
            <label htmlFor="quiz-question" className="mb-1.5 block text-sm font-medium">
              Суроонун тексти *
            </label>
            <textarea
              id="quiz-question"
              value={quizForm.question_text}
              onChange={(e) => updateQuizField("question_text", e.target.value)}
              rows={3}
              placeholder="D > 0 болсо, теңдеме канча тамырга ээ?"
              className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <FieldError message={quizErrors.question_text} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(["a", "b", "c", "d"] as const).map((key) => {
              const field = `option_${key}` as keyof QuizFormState;
              return (
                <div key={key}>
                  <label className="mb-1.5 block text-sm font-medium">
                    Вариант {key.toUpperCase()} *
                  </label>
                  <input
                    value={quizForm[field] as string}
                    onChange={(e) => updateQuizField(field, e.target.value)}
                    placeholder={`${key.toUpperCase()} жоопу...`}
                    className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
                  />
                  <FieldError message={quizErrors[`option_${key}`]} />
                </div>
              );
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quiz-correct" className="mb-1.5 block text-sm font-medium">
                Туура жооп *
              </label>
              <select
                id="quiz-correct"
                value={quizForm.correct_answer}
                onChange={(e) => updateQuizField("correct_answer", e.target.value)}
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              >
                <option value="a">A — {quizForm.option_a || "..."}</option>
                <option value="b">B — {quizForm.option_b || "..."}</option>
                <option value="c">C — {quizForm.option_c || "..."}</option>
                <option value="d">D — {quizForm.option_d || "..."}</option>
              </select>
              <FieldError message={quizErrors.correct_answer} />
            </div>
            <div>
              <label htmlFor="quiz-points" className="mb-1.5 block text-sm font-medium">
                Упай
              </label>
              <input
                id="quiz-points"
                type="number"
                min={1}
                max={10}
                value={quizForm.points}
                onChange={(e) => updateQuizField("points", Number(e.target.value))}
                className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
              />
              <FieldError message={quizErrors.points} />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={submittingQuiz}
            whileTap={{ scale: 0.97 }}
            className="btn-primary gap-2 disabled:opacity-60"
          >
            {submittingQuiz ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Сакталууда...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Тестти сактоо
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  );
}
