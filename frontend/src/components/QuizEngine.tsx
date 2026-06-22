import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Trophy,
} from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { submitProgress } from "../services/educationalService";
import type {
  Quiz,
  QuizAnswerRecord,
  QuizResult,
  SubmitProgressPayload,
} from "../types/educational";

interface QuizWithAnswer extends Quiz {
  correct_answer: string;
}

interface QuizEngineProps {
  topicId: number;
  quizzes: QuizWithAnswer[];
  onComplete?: (result: QuizResult) => void;
}

type QuizPhase = "question" | "feedback" | "summary";

export default function QuizEngine({
  topicId,
  quizzes,
  onComplete,
}: QuizEngineProps) {
  const { isAuthenticated, refreshProfile } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [phase, setPhase] = useState<QuizPhase>("question");
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const sortedQuizzes = [...quizzes].sort((a, b) => a.sort_order - b.sort_order);
  const currentQuiz = sortedQuizzes[currentIndex];
  const isLastQuestion = currentIndex === sortedQuizzes.length - 1;

  const handleSelect = (key: string) => {
    if (phase !== "question") return;
    setSelectedKey(key);
  };

  const handleCheck = () => {
    if (!selectedKey || !currentQuiz) return;

    const isCorrect = selectedKey === currentQuiz.correct_answer;
    const record: QuizAnswerRecord = {
      quizId: currentQuiz.id,
      selectedKey,
      isCorrect,
      points: isCorrect ? currentQuiz.points : 0,
    };

    setAnswers((prev) => [...prev, record]);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setPhase("summary");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedKey(null);
    setPhase("question");
  };

  const buildResult = useCallback((): QuizResult => {
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const totalScore = answers.reduce((sum, a) => sum + a.points, 0);
    return {
      correctCount,
      totalQuestions: sortedQuizzes.length,
      totalScore,
      answers,
    };
  }, [answers, sortedQuizzes.length]);

  const handleSubmitProgress = async () => {
    if (!isAuthenticated) {
      setSubmitError("Прогрессти сактоо үчүн системага кириңиз.");
      return;
    }

    const result = buildResult();
    const payload: SubmitProgressPayload = {
      topic_id: topicId,
      score: result.totalScore,
      is_completed: result.correctCount === result.totalQuestions,
      correct_count: result.correctCount,
      total_questions: result.totalQuestions,
    };

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitProgress(payload);
      await refreshProfile();
      onComplete?.(result);
    } catch {
      setSubmitError("Прогрессти сактоодо ката кетти. Кайра аракет кылыңыз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sortedQuizzes.length === 0) {
    return (
      <div className="card-base p-6 text-center text-sm text-kyrgyz-600 dark:text-slate-400">
        Бул тема үчүн тест суроолору азырынча жок.
      </div>
    );
  }

  if (phase === "summary") {
    const result = buildResult();
    const percent = Math.round(
      (result.correctCount / result.totalQuestions) * 100,
    );

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-base overflow-hidden"
      >
        <div className="bg-gradient-to-br from-kyrgyz-700 to-alpine-600 px-6 py-8 text-center text-white">
          <Trophy className="mx-auto h-12 w-12 text-alpine-300" />
          <h3 className="mt-4 text-xl font-bold">Тест аяктады!</h3>
          <p className="mt-2 text-kyrgyz-100">
            {result.correctCount} / {result.totalQuestions} туура жооп
          </p>
        </div>

        <div className="space-y-4 p-6">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-kyrgyz-600 dark:text-slate-400">Натыжа</span>
              <span className="font-semibold text-alpine-600 dark:text-alpine-400">
                {percent}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-kyrgyz-100 dark:bg-kyrgyz-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-alpine-500 to-alpine-400"
              />
            </div>
          </div>

          <p className="text-center text-sm text-kyrgyz-600 dark:text-slate-400">
            Топтолгон упай:{" "}
            <span className="font-bold text-alpine-600 dark:text-alpine-400">
              {result.totalScore}
            </span>
          </p>

          {submitError && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {submitError}
              {!isAuthenticated && (
                <Link to="/login" className="ml-auto font-semibold underline">
                  Кирүү
                </Link>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleSubmitProgress}
              disabled={isSubmitting}
              className="btn-primary flex-1 justify-center disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Сакталууда...
                </>
              ) : (
                "Прогрессти сактоо"
              )}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const isCorrect =
    selectedKey !== null && selectedKey === currentQuiz.correct_answer;

  return (
    <div className="card-base overflow-hidden">
      <div className="border-b border-kyrgyz-100 px-5 py-4 dark:border-kyrgyz-800">
        <div className="mb-2 flex items-center justify-between text-xs text-kyrgyz-500 dark:text-slate-500">
          <span>
            Суроо {currentIndex + 1} / {sortedQuizzes.length}
          </span>
          <span>{currentQuiz.points} упай</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-kyrgyz-100 dark:bg-kyrgyz-800">
          <div
            className="h-full rounded-full bg-alpine-500 transition-all duration-300"
            style={{
              width: `${((currentIndex + (phase === "feedback" ? 1 : 0)) / sortedQuizzes.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold leading-relaxed text-kyrgyz-950 dark:text-white">
          {currentQuiz.question_text}
        </h3>

        <div className="mt-5 space-y-2.5">
          {currentQuiz.options.map((option) => {
            const isSelected = selectedKey === option.key;
            const showCorrect = phase === "feedback" && option.key === currentQuiz.correct_answer;
            const showWrong =
              phase === "feedback" && isSelected && option.key !== currentQuiz.correct_answer;

            let optionClass =
              "w-full rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ";

            if (phase === "feedback") {
              if (showCorrect) {
                optionClass +=
                  "border-alpine-500 bg-alpine-50 text-alpine-800 dark:bg-alpine-950/40 dark:text-alpine-300";
              } else if (showWrong) {
                optionClass +=
                  "border-red-400 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300";
              } else {
                optionClass +=
                  "border-kyrgyz-100 bg-kyrgyz-50/50 opacity-60 dark:border-kyrgyz-800 dark:bg-kyrgyz-900/50";
              }
            } else if (isSelected) {
              optionClass +=
                "border-kyrgyz-600 bg-kyrgyz-50 ring-2 ring-kyrgyz-300 dark:border-kyrgyz-400 dark:bg-kyrgyz-800 dark:ring-kyrgyz-600";
            } else {
              optionClass +=
                "border-kyrgyz-200 hover:border-kyrgyz-300 hover:bg-kyrgyz-50 dark:border-kyrgyz-700 dark:hover:border-kyrgyz-600 dark:hover:bg-kyrgyz-800/60";
            }

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => handleSelect(option.key)}
                disabled={phase === "feedback"}
                className={optionClass}
              >
                <span className="mr-2 font-semibold uppercase">{option.key}.</span>
                {option.text}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {phase === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-5 flex items-center gap-3 rounded-xl px-4 py-3 ${
                isCorrect
                  ? "bg-alpine-50 text-alpine-800 dark:bg-alpine-950/40 dark:text-alpine-300"
                  : "bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300"
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 shrink-0" />
              )}
              <p className="text-sm font-medium">
                {isCorrect
                  ? "Туура жооп! Упай алдыңыз."
                  : `Ката. Туура жооп: ${currentQuiz.correct_answer.toUpperCase()}`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex justify-end gap-2">
          {phase === "question" ? (
            <button
              type="button"
              onClick={handleCheck}
              disabled={!selectedKey}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Текшерүү
            </button>
          ) : (
            <button type="button" onClick={handleNext} className="btn-primary">
              {isLastQuestion ? "Жыйынтык" : "Кийинки"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
