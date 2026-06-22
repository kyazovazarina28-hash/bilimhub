import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Puzzle,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { getGameTheme, type GameTheme, type GeoQuest, type QuestType } from "../data/geographyPlanets";
import { drawPlanet, type Star } from "../utils/geographyCanvas";

function questIcon(type: QuestType) {
  switch (type) {
    case "test":
      return Zap;
    case "map":
      return MapPin;
    case "puzzle":
      return Puzzle;
    default:
      return Zap;
  }
}

function StarfieldCanvas({ opacity = 0.45 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const initStars = (w: number, h: number): void => {
      starsRef.current = Array.from({ length: 180 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        size: 0.5 + Math.random() * 2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (starsRef.current.length === 0) initStars(width, height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let last = performance.now();

    const loop = (now: number): void => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      timeRef.current += delta;

      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (const star of starsRef.current) {
        const tw = 0.45 + Math.sin(timeRef.current * 2 + star.twinkle) * 0.35;
        ctx.fillStyle = `rgba(200,230,255,${tw * (0.35 + star.z * 0.65)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ opacity }}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}

function PlanetCanvas({ theme, spinBoost = 0 }: { theme: GameTheme; spinBoost?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const frameRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let last = performance.now();

    const loop = (now: number): void => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      timeRef.current += delta;
      rotationRef.current += delta * (0.45 + spinBoost * 2.2);

      const floatY = Math.sin(timeRef.current * 1.15) * 10;
      const { width, height } = container.getBoundingClientRect();

      ctx.clearRect(0, 0, width, height);
      drawPlanet(ctx, width, height, theme, rotationRef.current, floatY, spinBoost, true, 1.05);

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, [theme, spinBoost]);

  return (
    <div ref={containerRef} className="geo-planet-stage h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}

function QuestPath({
  quests,
  completedIds,
  onQuestClick,
}: {
  quests: GeoQuest[];
  completedIds: Set<string>;
  onQuestClick: (quest: GeoQuest) => void;
}) {
  return (
    <div className="relative mt-8">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 180"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="geoQuestLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M 40 140 Q 120 40, 200 90 T 360 50"
          fill="none"
          stroke="url(#geoQuestLine)"
          strokeWidth="3"
          strokeDasharray="8 6"
          className="geo-quest-path-line"
        />
      </svg>

      <div className="relative grid grid-cols-3 gap-3 pt-4">
        {quests.map((quest) => {
          const Icon = questIcon(quest.type);
          const done = completedIds.has(quest.id);
          return (
            <button
              key={quest.id}
              type="button"
              onClick={() => onQuestClick(quest)}
              className={`geo-quest-node flex flex-col items-center rounded-xl border p-4 text-center transition-all duration-300 ${
                done
                  ? "border-alpine-400/60 bg-alpine-950/40"
                  : "border-cyan-500/35 bg-slate-900/60 hover:border-cyan-400/70 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
              }`}
            >
              <span className="geo-quest-node-glow mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-950/50 text-cyan-300">
                {done ? (
                  <CheckCircle2 className="h-5 w-5 text-alpine-400" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/80">
                {quest.order}-Квест
              </span>
              <span className="mt-1 text-xs font-semibold text-white">{quest.typeLabel}</span>
              <span className="mt-0.5 text-[10px] text-slate-400">{quest.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuestModal({
  quest,
  planetTitle,
  onClose,
  onCorrect,
}: {
  quest: GeoQuest;
  planetTitle: string;
  onClose: () => void;
  onCorrect: (points: number) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const handleAnswer = (index: number): void => {
    if (feedback === "correct") return;
    setSelected(index);
    if (index === quest.question.correctIndex) {
      setFeedback("correct");
      window.setTimeout(() => onCorrect(quest.points), 800);
    } else {
      setFeedback("wrong");
      window.setTimeout(() => {
        setFeedback(null);
        setSelected(null);
      }, 1200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 12 }}
        className="relative w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
          aria-label="Жабуу"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-medium uppercase tracking-widest text-cyan-400/80">
          {planetTitle} · {quest.typeLabel}
        </p>
        <h3 className="mt-1 text-lg font-bold text-white">{quest.title}</h3>
        <p className="mt-4 text-base text-slate-200">{quest.question.question}</p>

        <div className="mt-5 space-y-2">
          {quest.question.options.map((opt, idx) => {
            const isCorrect = idx === quest.question.correctIndex;
            let cls =
              "w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ";
            if (feedback === "correct" && isCorrect) {
              cls += "border-alpine-400 bg-alpine-500/20 text-alpine-300";
            } else if (feedback === "wrong" && selected === idx) {
              cls += "border-red-400 bg-red-500/20 text-red-300 animate-pulse";
            } else {
              cls +=
                "border-cyan-500/30 bg-slate-800/60 text-slate-200 hover:border-cyan-400/60 hover:bg-slate-800";
            }
            return (
              <button
                key={opt}
                type="button"
                disabled={feedback === "correct"}
                onClick={() => handleAnswer(idx)}
                className={cls}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {feedback === "correct" && (
          <p className="mt-4 text-center text-sm font-semibold text-alpine-400">
            +{quest.points} упай! Планета жаркырады!
          </p>
        )}
        {feedback === "wrong" && (
          <p className="mt-4 text-center text-sm text-red-400">Кайра аракет кылыңыз</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function GeographyPlanetGame() {
  const { planetId } = useParams<{ planetId: string }>();
  const theme = getGameTheme(planetId);

  const [points, setPoints] = useState(0);
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());
  const [activeQuest, setActiveQuest] = useState<GeoQuest | null>(null);
  const [spinBoost, setSpinBoost] = useState(0);

  if (!theme) {
    return <Navigate to="/geography" replace />;
  }

  const completedCount = theme.quests.filter((q) => completedQuests.has(q.id)).length;

  const handleQuestCorrect = (earned: number): void => {
    if (!activeQuest) return;
    setPoints((p) => p + earned);
    setCompletedQuests((prev) => new Set(prev).add(activeQuest.id));
    setSpinBoost(1);
    window.setTimeout(() => setSpinBoost(0), 1000);
    setActiveQuest(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <StarfieldCanvas />

      <div className="container-app relative z-10 py-6 sm:py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/geography"
            className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Башка планеталарга кайтуу
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
            <Trophy className="h-4 w-4 text-alpine-400" />
            {points} упай
          </div>
        </div>

        <div className="flex flex-col lg:min-h-[calc(100vh-10rem)] lg:flex-row">
          <div className="flex w-full flex-col justify-center border-b border-cyan-500/10 p-4 sm:p-6 lg:w-1/2 lg:border-b-0 lg:border-r lg:p-8">
            <div
              className="geo-neon-badge inline-flex w-fit px-4 py-1.5"
              style={{
                boxShadow: `0 0 16px ${theme.planetGlow}44`,
                borderColor: `${theme.planetGlow}66`,
              }}
            >
              <span className="text-sm font-bold" style={{ color: theme.planetGlow }}>
                {theme.badgeLabel}
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-wide sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-cyan-300 via-alpine-400 to-cyan-200 bg-clip-text text-transparent">
                {theme.heroTitle}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {theme.description}
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span>
                Квесттер: {completedCount}/{theme.quests.length}
              </span>
              <span className="h-1 w-1 rounded-full bg-cyan-500" />
              <span className="text-cyan-400/80">Ар бир квест +25 упай</span>
            </div>

            <QuestPath
              quests={theme.quests}
              completedIds={completedQuests}
              onQuestClick={setActiveQuest}
            />
          </div>

          <div className="relative flex w-full items-center justify-center p-4 sm:p-6 lg:w-1/2 lg:p-8">
            <div className="geo-planet-stage h-full min-h-[320px] w-full lg:min-h-[480px]">
              <PlanetCanvas theme={theme} spinBoost={spinBoost} />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeQuest && (
          <QuestModal
            key={activeQuest.id}
            quest={activeQuest}
            planetTitle={theme.heroTitle}
            onClose={() => setActiveQuest(null)}
            onCorrect={handleQuestCorrect}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
