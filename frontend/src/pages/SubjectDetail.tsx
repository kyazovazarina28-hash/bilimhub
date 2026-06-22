import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSubjectDetail } from "../services/educationalService";
import type { SubjectDetail, SubjectSection } from "../types/educational";
import ForestStartScreen from "./ForestStartScreen";
import ChemistryDetail from "./ChemistryDetail";
import GeographyStartScreen from "./GeographyStartScreen";
import HistoryStartScreen from "./HistoryStartScreen";
import KyrgyzLanguageStartScreen from "./KyrgyzLanguageStartScreen";
import LiteratureStartScreen from "./LiteratureStartScreen";
import EnglishStartScreen from "./EnglishStartScreen";
import InformaticsStartScreen from "./InformaticsStartScreen";
import AstronomyStartScreen from "./AstronomyStartScreen";
import EcologyStartScreen from "./EcologyStartScreen";
import MathStartScreen from "./MathStartScreen";
import PhysicsStartScreen from "./PhysicsStartScreen";

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-kyrgyz-100 dark:bg-kyrgyz-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`h-full rounded-full ${
            percent === 100
              ? "bg-alpine-500"
              : "bg-gradient-to-r from-kyrgyz-500 to-alpine-500"
          }`}
        />
      </div>
      <span className="min-w-[3rem] text-right text-xs font-semibold text-kyrgyz-700 dark:text-slate-300">
        {percent}%
      </span>
    </div>
  );
}

function SectionBlock({ section }: { section: SubjectSection }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-base overflow-hidden"
    >
      <div className="border-b border-kyrgyz-100 px-5 py-4 dark:border-kyrgyz-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-kyrgyz-950 dark:text-white">
            {section.title}
          </h2>
          <div className="w-full sm:max-w-xs">
            <ProgressBar percent={section.progress_percent} />
          </div>
        </div>
      </div>

      <ul className="divide-y divide-kyrgyz-100 dark:divide-kyrgyz-800">
        {section.topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={`/topics/${topic.id}`}
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-kyrgyz-50 dark:hover:bg-kyrgyz-800/40"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  topic.is_completed
                    ? "bg-alpine-100 text-alpine-600 dark:bg-alpine-950/50 dark:text-alpine-400"
                    : "bg-kyrgyz-100 text-kyrgyz-600 dark:bg-kyrgyz-800 dark:text-kyrgyz-300"
                }`}
              >
                {topic.is_completed ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <BookOpen className="h-5 w-5" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-kyrgyz-900 group-hover:text-kyrgyz-700 dark:text-white dark:group-hover:text-alpine-300">
                  {topic.title}
                </p>
                <div className="mt-2">
                  <ProgressBar percent={topic.progress_percent} />
                </div>
                <p className="mt-1.5 text-xs text-kyrgyz-500 dark:text-slate-500">
                  {topic.quiz_count} тест суроосу
                </p>
              </div>

              <ChevronRight className="h-5 w-5 shrink-0 text-kyrgyz-400 transition-transform group-hover:translate-x-0.5 dark:text-slate-500" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

function SubjectDetailContent({ slug }: { slug: string }) {
  const [subject, setSubject] = useState<SubjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSubjectDetail(slug);
        setSubject(data);
      } catch {
        setError("Сабак маалыматтарын жүктөөдө ката кетти.");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [slug]);

  if (loading) {
    return (
      <div className="container-app flex min-h-[50vh] items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-alpine-500" />
      </div>
    );
  }

  if (error || !subject) {
    return (
      <div className="container-app py-16 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
        <p className="mt-4 text-kyrgyz-700 dark:text-slate-300">
          {error ?? "Сабак табылган жок."}
        </p>
        <Link to="/" className="btn-secondary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Башкы бетке
        </Link>
      </div>
    );
  }

  const isMathSubject = ["matematika", "geometriya"].includes(subject.slug);

  return (
    <div className="container-app py-8 sm:py-12">
      <Link
        to="/#sabaktar"
        className="btn-ghost mb-6 inline-flex gap-1.5 px-0 hover:bg-transparent"
      >
        <ArrowLeft className="h-4 w-4" />
        Сабактарга кайтуу
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-kyrgyz-950 dark:text-white">
          {subject.name_kg}
        </h1>
        <p className="mt-1 text-kyrgyz-500 dark:text-slate-400">
          {subject.name_ru}
        </p>

        <div className="mt-6 card-base p-5">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-medium text-kyrgyz-700 dark:text-slate-300">
              Жалпы прогресс
            </span>
            <span className="font-bold text-alpine-600 dark:text-alpine-400">
              {subject.overall_progress}%
            </span>
          </div>
          <ProgressBar percent={subject.overall_progress} />
        </div>

        {isMathSubject && (
          <Link
            to="/math-tools"
            className="btn-secondary mt-4 inline-flex"
          >
            Математика куралдары
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </motion.div>

      <div className="space-y-6">
        {subject.sections.map((section) => (
          <SectionBlock key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

export default function SubjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "ekologiya") {
    return <EcologyStartScreen />;
  }

  if (slug === "astronomiya") {
    return <AstronomyStartScreen />;
  }

  if (slug === "informatika") {
    return <InformaticsStartScreen />;
  }

  if (slug === "anglis-tili") {
    return <EnglishStartScreen />;
  }

  if (slug === "kyrgyz-adabiyaty") {
    return <LiteratureStartScreen />;
  }

  if (slug === "kyrgyz-tili") {
    return <KyrgyzLanguageStartScreen />;
  }

  if (slug === "tarih") {
    return <HistoryStartScreen />;
  }

  if (slug === "geografiya") {
    return <GeographyStartScreen />;
  }

  if (slug === "matematika") {
    return <MathStartScreen />;
  }

  if (slug === "fizika") {
    return <PhysicsStartScreen />;
  }

  if (slug === "himiya") {
    return <ChemistryDetail />;
  }

  if (slug === "biologiya") {
    return <ForestStartScreen />;
  }

  if (!slug) {
    return (
      <div className="container-app py-16 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
        <p className="mt-4 text-kyrgyz-700 dark:text-slate-300">Сабак табылган жок.</p>
      </div>
    );
  }

  return <SubjectDetailContent slug={slug} />;
}
