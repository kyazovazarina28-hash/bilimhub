import type { LucideIcon } from "lucide-react";
import { BookOpen, Star, Zap } from "lucide-react";
import { useCallback, useState, type CSSProperties } from "react";

interface FeatureCardDef {
  id: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  target: string;
  accent: "cyan" | "green";
}

interface Particle {
  id: number;
  tx: number;
  ty: number;
  color: string;
}

const FEATURE_CARDS: FeatureCardDef[] = [
  {
    id: "fast-learn",
    icon: Zap,
    label: "Тез үйрөнүү",
    desc: "Кыска видеолор",
    target: "#sabaktar",
    accent: "cyan",
  },
  {
    id: "points",
    icon: Star,
    label: "Упай системасы",
    desc: "Мотивация үчүн",
    target: "#statistika",
    accent: "green",
  },
  {
    id: "subjects",
    icon: BookOpen,
    label: "12 предмет",
    desc: "Толук программа",
    target: "#sabaktar",
    accent: "cyan",
  },
];

const ACCENT_STYLES = {
  cyan: {
    border: "border-cyan-400/40 hover:border-cyan-400/80",
    icon: "text-cyan-400",
    glow: "hero-feature-card--cyan",
    particle: "#22d3ee",
  },
  green: {
    border: "border-alpine-400/40 hover:border-alpine-400/80",
    icon: "text-alpine-400",
    glow: "hero-feature-card--green",
    particle: "#4ade80",
  },
} as const;

function createBurstParticles(color: string): Particle[] {
  return Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const distance = 40 + (i % 3) * 18;
    return {
      id: i,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      color,
    };
  });
}

interface FeatureCardProps {
  card: FeatureCardDef;
  isShaking: boolean;
  isBursting: boolean;
  particles: Particle[];
  onActivate: (card: FeatureCardDef) => void;
}

function FeatureCard({
  card,
  isShaking,
  isBursting,
  particles,
  onActivate,
}: FeatureCardProps) {
  const Icon = card.icon;
  const accent = ACCENT_STYLES[card.accent];

  return (
    <button
      type="button"
      onClick={() => onActivate(card)}
      className={[
        "hero-feature-card group relative flex flex-col items-center overflow-hidden rounded-xl",
        "border bg-slate-900/60 p-5 text-center backdrop-blur-md",
        "transition-all duration-300",
        accent.border,
        accent.glow,
        isShaking ? "hero-feature-card--shake" : "",
      ].join(" ")}
    >
      {isBursting &&
        particles.map((p) => (
          <span
            key={p.id}
            className="hero-feature-particle pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={
              {
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                backgroundColor: p.color,
                boxShadow: `0 0 6px ${p.color}`,
              } as CSSProperties
            }
          />
        ))}

      <div
        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 ${accent.icon}`}
      >
        <Icon className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
      </div>

      <p className="text-sm font-semibold text-white">{card.label}</p>
      <p className="mt-1 text-xs text-slate-400">{card.desc}</p>

      <span className="mt-3 text-[10px] font-medium uppercase tracking-wider text-cyan-400/0 transition-all duration-300 group-hover:text-cyan-400/80">
        Басыңыз →
      </span>
    </button>
  );
}

export default function HeroFeatureCards() {
  const [shakingId, setShakingId] = useState<string | null>(null);
  const [burstingId, setBurstingId] = useState<string | null>(null);
  const [particlesMap, setParticlesMap] = useState<Record<string, Particle[]>>({});

  const handleActivate = useCallback((card: FeatureCardDef) => {
    const accent = ACCENT_STYLES[card.accent];

    setShakingId(card.id);
    setBurstingId(card.id);
    setParticlesMap((prev) => ({
      ...prev,
      [card.id]: createBurstParticles(accent.particle),
    }));

    window.setTimeout(() => setShakingId(null), 200);
    window.setTimeout(() => {
      setBurstingId(null);
      setParticlesMap((prev) => {
        const next = { ...prev };
        delete next[card.id];
        return next;
      });
    }, 500);

    const target = document.querySelector(card.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-2 backdrop-blur-sm sm:p-3">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)]" />
        <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-4">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard
              key={card.id}
              card={card}
              isShaking={shakingId === card.id}
              isBursting={burstingId === card.id}
              particles={particlesMap[card.id] ?? []}
              onActivate={handleActivate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
