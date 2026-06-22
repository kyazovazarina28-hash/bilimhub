import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Atom,
  CheckCircle2,
  Magnet,
  Sparkles,
  Trophy,
  Waves,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ═══════════════════════════════════════════════════════════
   ТИПТЕР
   ═══════════════════════════════════════════════════════════ */

interface ContentBlock {
  id: string;
  title: string;
  body: string;
  formula?: string;
  facts?: string[];
}

interface QuizItem {
  id: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  points: number;
}

interface PhysicsModule {
  id: string;
  title: string;
  subtitle: string;
  icon: "magnet" | "zap" | "waves";
  accent: string;
  glow: string;
  border: string;
  intro: string;
  blocks: ContentBlock[];
  quizzes: QuizItem[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

interface SnakePoint {
  x: number;
  y: number;
}

/* ═══════════════════════════════════════════════════════════
   MOCK DATA — кыргызча физика контенти
   ═══════════════════════════════════════════════════════════ */

const PHYSICS_MODULES: PhysicsModule[] = [
  {
    id: "magnetism",
    title: "Магнитизм",
    subtitle: "Магнит талаалары, электромагнит индукция",
    icon: "magnet",
    accent: "#f472b6",
    glow: "#ec4899",
    border: "rgba(244,114,182,0.45)",
    intro:
      "Магнитизм — табигаттын негизги күчү. Бул бөлүмдө магнит талаасы, электр токунун магнит талаасын түзүүсү жана практикалык колдонулушун үйрөнөсүз.",
    blocks: [
      {
        id: "mag-1",
        title: "Магнит талаасы",
        body:
          "Магниттин айланасындагы аймак магнит талаасы деп аталат. Ток өткөргүчтөрдүн айланасында да магнит талаасы пайда болот. Токтун катуу өткөргүчтөрдө жүргөнү — электромагнит индукциянын негизи.",
        formula: "F = B × I × l × sin α",
        facts: [
          "B — магнит индукциясы (Тесла, T)",
          "I — электр токунун күчү (Ампер, A)",
          "l — өткөргүчтүн узундугу (метр, m)",
          "Оң кол эрежеси: ток багыты, B вектору жана F күчү ортogonал",
        ],
      },
      {
        id: "mag-2",
        title: "Фарадейдин мыйзамы",
        body:
          "Замкнутый контурдагы ЭДС, магнит токунун өзгөрүү ылдамдыгына пропорционалдуу. Бул мыйзам генераторлор, трансформаторлор жана электромоторлордун негизин түзөт.",
        formula: "ε = −dΦ / dt",
        facts: [
          "Φ — магнит ток (Вб)",
          "Минус белги — Ленц мыйзамы (индукция току өзгөрүүгө каршы)",
          "Трансформатор: U₁/U₂ = N₁/N₂",
        ],
      },
    ],
    quizzes: [
      {
        id: "mag-q1",
        question: "Магнит индукциясынын өлчөм бирдиги кайсы?",
        options: ["Ньютон", "Тесла", "Джоуль"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "mag-q2",
        question: "Электромагнит индукцияны ачкан учёный:",
        options: ["Ньютон", "Фарадей", "Эйнштейн"],
        correctIndex: 1,
        points: 25,
      },
    ],
  },
  {
    id: "kinematics",
    title: "Кинематика",
    subtitle: "Кыймыл, ылдамдыk, тезденүү",
    icon: "zap",
    accent: "#fbbf24",
    glow: "#f59e0b",
    border: "rgba(251,191,36,0.5)",
    intro:
      "Кинематика — дененин кыймылын сан аркылуу сүрөттөө. Бул бөлүмдө түз сызыктуу кыймыл, ылдамдыk, тезденүү жана теңдеmeлерди чечүүгө үйрөнөсүз.",
    blocks: [
      {
        id: "kin-1",
        title: "Түз сызыктуу кыймыл",
        body:
          "Дене бир сызык боюнча туруктуу тезденүү менен кыймылдаганда, анын орду, ылдамдыгы жана тезденүүсү формулalar аркылуу байlanат. Бул физиканын эң негизги модели.",
        formula: "s = v₀t + at² / 2",
        facts: [
          "s — жол (метр)",
          "v₀ — баштапкы ылдамдыk (м/с)",
          "a — тезденүү (м/с²)",
          "v = v₀ + at — ылдамдыk формуласы",
        ],
      },
      {
        id: "kin-2",
        title: "Эркин тушуу",
        body:
          "Жер тартымы тезденүүсү g ≈ 9,8 м/с². Эркин тушууda башtaпkы ылдамдыk ноль болсо, h бииктиktен t uбakытта tushөт.",
        formula: "h = gt² / 2",
        facts: [
          "g = 9,8 м/с² (жер бетинде)",
          "v = gt — тушууda ылдамдыk",
          "Энергия: mgh = mv²/2 (консервация)",
        ],
      },
    ],
    quizzes: [
      {
        id: "kin-q1",
        question: "Ылдамдыктын SI бирдиги:",
        options: ["км/с", "м/с", "м/с²"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "kin-q2",
        question: "Тезденүүнүн SI бирдиги:",
        options: ["м/с", "м/с²", "Ньютон"],
        correctIndex: 1,
        points: 25,
      },
    ],
  },
  {
    id: "optics",
    title: "Оптика",
    subtitle: "Жарык, призма, линза",
    icon: "waves",
    accent: "#22d3ee",
    glow: "#06b6d4",
    border: "rgba(34,211,238,0.45)",
    intro:
      "Оптика — жарыkтын жайылышы, чагылышы жана показатель көрсөткүчүн изилдейт. Бул бөлүмдө линзалар, призмалар жана көз айнектердин принциби түшүндүрүлөт.",
    blocks: [
      {
        id: "opt-1",
        title: "Жарык чагылышы",
        body:
          "Жарык бир орtodan экинчи орго өткөндө, анын ылдамдыгы өзгөрөт жана чагылышат. Snell мыйзамы чекиттин чагылышуу бурчун табууга жардам берет.",
        formula: "n₁ sin α = n₂ sin β",
        facts: [
          "n — показатель көрсөткүч",
          "α — түшүү бурчу",
          "β — чагылышуу бурчу",
          "Абалаха n ≈ 1, суу n ≈ 1,33",
        ],
      },
      {
        id: "opt-2",
        title: "Жыйноочу линза",
        body:
          "Жыйноочу линза жарыкты бир чекитке жыйнап, сүрөт түзөт. Фокустук аралык f ар канча кичине болсо, линза oшoнчо күчтүү.",
        formula: "1/f = 1/d + 1/f'",
        facts: [
          "d — предметтин аралыгы",
          "f' — сүрөттүн аралыгы",
          "Микroскop, телескоп — линзалар негизинде",
        ],
      },
    ],
    quizzes: [
      {
        id: "opt-q1",
        question: "Жарыктын вакуумдагы ылдамдыгы:",
        options: ["3×10⁶ м/с", "3×10⁸ м/с", "3×10¹⁰ м/с"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "opt-q2",
        question: "Сууда жарыk чагылганда бурч:",
        options: ["Чоңойот", "Кичирейет", "Өзгөрбөйт"],
        correctIndex: 0,
        points: 25,
      },
    ],
  },
];

const SEGMENT_COUNT = 18;
const SEGMENT_SPACING = 16;

/* ═══════════════════════════════════════════════════════════
   НЕОН ЖЫЛАН — Canvas (Inverse Kinematics / Chain Follow)
   ═══════════════════════════════════════════════════════════ */

function NeonSnakeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const pointsRef = useRef<SnakePoint[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const initPoints = (w: number, h: number) => {
      const cx = w * 0.5;
      const cy = h * 0.5;
      pointsRef.current = Array.from({ length: SEGMENT_COUNT }, (_, i) => ({
        x: cx - i * SEGMENT_SPACING,
        y: cy,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (pointsRef.current.length === 0) initPoints(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const spawnParticle = (x: number, y: number) => {
      if (particlesRef.current.length > 80) return;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 1.2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        size: 1 + Math.random() * 2.5,
        hue: 300 + Math.random() * 60,
      });
    };

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.032);
      last = now;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const pts = pointsRef.current;
      const mouse = mouseRef.current;

      if (pts.length === 0) initPoints(w, h);

      const targetX = mouse.active ? mouse.x : w * 0.5 + Math.sin(now * 0.0008) * 120;
      const targetY = mouse.active ? mouse.y : h * 0.45 + Math.cos(now * 0.0006) * 80;

      pts[0].x += (targetX - pts[0].x) * (0.18 + dt * 4);
      pts[0].y += (targetY - pts[0].y) * (0.18 + dt * 4);

      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const curr = pts[i];
        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const desired = SEGMENT_SPACING;
        const diff = dist - desired;
        const follow = 0.35 + (i / pts.length) * 0.15;
        curr.x += (dx / dist) * diff * follow;
        curr.y += (dy / dist) * diff * follow;
        curr.x += (prev.x - curr.x) * 0.08;
        curr.y += (prev.y - curr.y) * 0.08;
      }

      if (Math.random() < 0.35) {
        const tail = pts[pts.length - 1];
        spawnParticle(tail.x, tail.y);
      }
      if (Math.random() < 0.2) {
        const mid = pts[Math.floor(pts.length * 0.4)];
        spawnParticle(mid.x, mid.y);
      }

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt * 0.9;
        p.vx *= 0.98;
        p.vy *= 0.98;
      }
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      ctx.clearRect(0, 0, w, h);

      for (let i = pts.length - 1; i > 0; i--) {
        const a = pts[i];
        const b = pts[i - 1];
        const t = 1 - i / pts.length;
        const width = 4 + t * 14;
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, `hsla(${320 + t * 40}, 100%, ${55 + t * 15}%, ${0.5 + t * 0.5})`);
        grad.addColorStop(1, `hsla(${45 + t * 20}, 100%, 60%, ${0.7 + t * 0.3})`);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.shadowColor = "#ff00aa";
        ctx.shadowBlur = 15;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      const head = pts[0];
      const headGrad = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 22);
      headGrad.addColorStop(0, "#fff");
      headGrad.addColorStop(0.35, "#ffee00");
      headGrad.addColorStop(1, "#ff0088");
      ctx.beginPath();
      ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = headGrad;
      ctx.shadowColor = "#ff44cc";
      ctx.shadowBlur = 22;
      ctx.fill();
      ctx.shadowBlur = 0;

      for (const p of particlesRef.current) {
        const alpha = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha * 0.85})`;
        ctx.shadowColor = `hsl(${p.hue}, 100%, 60%)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-10 h-full w-full"
      aria-hidden
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   3D КАРТОЧКА
   ═══════════════════════════════════════════════════════════ */

function PhysicsCard3D({
  module,
  index,
  onSelect,
  delay,
}: {
  module: PhysicsModule;
  index: number;
  onSelect: (id: string) => void;
  delay: number;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glow: false });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 18, ry: px * 18, glow: true });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0, glow: false });

  const Icon =
    module.icon === "magnet" ? Magnet : module.icon === "zap" ? Zap : Waves;

  return (
    <div
      className="physics-card-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <button
        ref={cardRef}
        type="button"
        onClick={() => onSelect(module.id)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="physics-card-3d group relative w-full text-left"
        style={{
          transform: tilt.glow
            ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.05)`
            : undefined,
          borderColor: tilt.glow ? module.border : "rgba(255,255,255,0.12)",
          boxShadow: tilt.glow
            ? `0 0 40px ${module.glow}66, 0 20px 50px rgba(0,0,0,0.45), inset 0 0 30px ${module.glow}22`
            : undefined,
        }}
      >
      <div
        className="relative overflow-hidden rounded-2xl border bg-slate-900/60 p-6 backdrop-blur-md transition-colors duration-300"
        style={{ borderColor: "inherit" }}
      >
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
          style={{ background: module.accent }}
        />
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ background: `${module.accent}22`, color: module.accent }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: module.accent }}>
              {String(index + 1).padStart(2, "0")} — Тема
            </p>
            <h3 className="mt-1 text-xl font-bold text-white">{module.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{module.subtitle}</p>
          </div>
        </div>
        <p className="mt-4 line-clamp-2 text-xs text-slate-500">{module.intro}</p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold" style={{ color: module.accent }}>
          <Sparkles className="h-3.5 w-3.5" />
          {module.quizzes.length} тест · {module.blocks.length} сабак
        </div>
      </div>
    </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ТЕСТ ПАНЕЛИ
   ═══════════════════════════════════════════════════════════ */

function QuizPanel({
  quizzes,
  accent,
  solvedIds,
  onCorrect,
}: {
  quizzes: QuizItem[];
  accent: string;
  solvedIds: Set<string>;
  onCorrect: (q: QuizItem) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const quiz = quizzes[activeIdx];

  const answer = (idx: number) => {
    if (!quiz || feedback === "correct" || solvedIds.has(quiz.id)) return;
    setSelected(idx);
    if (idx === quiz.correctIndex) {
      setFeedback("correct");
      window.setTimeout(() => {
        onCorrect(quiz);
        setFeedback(null);
        setSelected(null);
      }, 900);
    } else {
      setFeedback("wrong");
      window.setTimeout(() => {
        setFeedback(null);
        setSelected(null);
      }, 1100);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2" style={{ color: accent }}>
        <Zap className="h-4 w-4" />
        <h4 className="text-sm font-bold uppercase tracking-wider">Интерактивдүү тест</h4>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {quizzes.map((q, i) => (
          <button
            key={q.id}
            type="button"
            onClick={() => {
              setActiveIdx(i);
              setSelected(null);
              setFeedback(null);
            }}
            className="rounded-lg border px-3 py-1 text-xs font-semibold transition-all"
            style={
              i === activeIdx
                ? { borderColor: `${accent}88`, background: `${accent}22`, color: accent }
                : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }
            }
          >
            {solvedIds.has(q.id) ? "✓ " : ""}Суроо {i + 1}
          </button>
        ))}
      </div>
      {quiz && (
        <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
          <p className="text-sm font-medium text-white">{quiz.question}</p>
          <div className="mt-3 space-y-2">
            {quiz.options.map((opt, idx) => {
              const ok = idx === quiz.correctIndex;
              const done = solvedIds.has(quiz.id);
              let cls =
                "w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-all ";
              if ((done || feedback === "correct") && ok)
                cls += "border-emerald-400/60 bg-emerald-500/20 text-emerald-200";
              else if (feedback === "wrong" && selected === idx)
                cls += "border-red-400/60 bg-red-500/15 text-red-300";
              else cls += "border-slate-600/50 bg-slate-800/40 text-slate-200 hover:border-white/25";
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={done || feedback === "correct"}
                  onClick={() => answer(idx)}
                  className={cls}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {feedback === "wrong" && (
            <p className="mt-3 text-center text-xs text-red-300">Ката! Кайра аракет кылыңыз.</p>
          )}
          {solvedIds.has(quiz.id) && feedback !== "correct" && (
            <p className="mt-2 flex items-center justify-center gap-1 text-xs text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Аткарылды
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   МОДУЛЬ ДЕТАЛИ
   ═══════════════════════════════════════════════════════════ */

function ModulePanel({
  module,
  score,
  solvedIds,
  onClose,
  onCorrect,
}: {
  module: PhysicsModule;
  score: number;
  solvedIds: Set<string>;
  onClose: () => void;
  onCorrect: (q: QuizItem) => void;
}) {
  const solvedInModule = module.quizzes.filter((q) => solvedIds.has(q.id)).length;
  const progress = Math.round((solvedInModule / module.quizzes.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="physics-detail-scroll relative z-30 mx-auto mt-6 max-h-[55vh] w-full max-w-4xl overflow-y-auto rounded-2xl border bg-slate-950/85 p-6 backdrop-blur-xl sm:p-8"
      style={{ borderColor: module.border }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: module.accent }}>
            {module.title}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white">{module.subtitle}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-white/30"
        >
          Жабуу
        </button>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{module.intro}</p>
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-white/50">
          <span>Прогресс</span>
          <span style={{ color: module.accent }}>{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: module.accent, boxShadow: `0 0 12px ${module.glow}` }}
          />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {module.blocks.map((block) => (
          <article
            key={block.id}
            className="rounded-xl border border-white/8 bg-slate-900/50 p-4"
            style={{ borderColor: `${module.accent}18` }}
          >
            <h3 className="font-bold text-white">{block.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.body}</p>
            {block.formula && (
              <div
                className="physics-formula-block mt-3 rounded-lg border px-4 py-2 text-center font-mono text-sm"
                style={{ borderColor: `${module.accent}44`, color: module.accent }}
              >
                {block.formula}
              </div>
            )}
            {block.facts && (
              <ul className="mt-3 space-y-1.5">
                {block.facts.map((f) => (
                  <li key={f.slice(0, 24)} className="flex gap-2 text-xs text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: module.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      <QuizPanel quizzes={module.quizzes} accent={module.accent} solvedIds={solvedIds} onCorrect={onCorrect} />
      <p className="mt-4 text-center text-xs text-white/30">Жалпы упай: {score} бал</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   НЕГИЗГИ БАРАК
   ═══════════════════════════════════════════════════════════ */

export default function PhysicsDetail() {
  const { user } = useAuth();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [burst, setBurst] = useState(false);

  const studentName = user?.full_name || user?.username || "Окуучу";
  const selectedModule = PHYSICS_MODULES.find((m) => m.id === selectedId) ?? null;
  const totalQuizzes = PHYSICS_MODULES.reduce((a, m) => a + m.quizzes.length, 0);
  const overallProgress = Math.round((solvedIds.size / totalQuizzes) * 100);

  const handleCorrect = useCallback((q: QuizItem) => {
    setScore((s) => s + q.points);
    setSolvedIds((prev) => new Set(prev).add(q.id));
    setBurst(true);
    window.setTimeout(() => setBurst(false), 1200);
  }, []);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-[#050510] text-white">
      <NeonSnakeCanvas />

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(139,92,246,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(236,72,153,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-20 flex min-h-[100dvh] flex-col">
        <header className="flex shrink-0 items-center justify-between px-5 py-4 sm:px-10">
          <Link
            to="/#sabaktar"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:border-violet-400/40"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Сабактарга
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-white/50 sm:inline">{studentName}</span>
            <div className="flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-slate-900/60 px-3 py-1.5 text-sm font-bold text-pink-300">
              <Trophy className="h-4 w-4 text-yellow-400" />
              {score} бал
            </div>
          </div>
        </header>

        <section className="flex flex-1 flex-col px-5 pb-8 pt-4 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
              <Atom className="h-3.5 w-3.5" />
              BilimHub · Физика
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">
                Физика Лабораториясы
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              Курсорду жылан ээрчит. Төмөндөгү 3D карточкаларды тандап, Магнитизм, Кинематика жана
              Оптика боюнча сабактарды окуп, тесттерден упай жыйнаңыз.
            </p>
            <div className="mx-auto mt-5 max-w-xs">
              <div className="mb-1 flex justify-between text-xs text-white/40">
                <span>Жалпы прогресс</span>
                <span className="text-violet-300">{overallProgress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: `${overallProgress}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400"
                  style={{ boxShadow: "0 0 16px rgba(236,72,153,0.5)" }}
                />
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {burst && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.2, y: -30 }}
                className="pointer-events-none fixed left-1/2 top-1/3 z-50 -translate-x-1/2 rounded-2xl border border-yellow-400/60 bg-yellow-500/20 px-8 py-4 text-xl font-bold text-yellow-200 shadow-[0_0_60px_rgba(250,204,21,0.5)]"
              >
                +25 бал!
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {selectedModule && (
              <ModulePanel
                key={selectedModule.id}
                module={selectedModule}
                score={score}
                solvedIds={solvedIds}
                onClose={() => setSelectedId(null)}
                onCorrect={handleCorrect}
              />
            )}
          </AnimatePresence>

          <div className="mt-auto pt-8">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-white/30">
              Темалар
            </p>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PHYSICS_MODULES.map((mod, i) => (
                <PhysicsCard3D
                  key={mod.id}
                  module={mod}
                  index={i}
                  delay={i * 0.45}
                  onSelect={setSelectedId}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
