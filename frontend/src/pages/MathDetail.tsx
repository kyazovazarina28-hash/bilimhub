import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ═══════════════════════════════════════════════════════════
   ТИПТЕР
   ═══════════════════════════════════════════════════════════ */

type ViewMode = "lobby" | "detail";

interface ContentBlock {
  id: string;
  title: string;
  body: string;
  example?: string;
  formula?: string;
  steps?: string[];
}

interface QuizItem {
  id: string;
  title: string;
  question: string;
  formula?: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  points: number;
  twistLayer: { axis: "x" | "y" | "z"; layer: 0 | 1 | 2 };
}

interface BadgeDef {
  id: string;
  title: string;
  description: string;
  unlockKey: string;
}

interface MathModule {
  id: string;
  faceLabel: string;
  sectionTitle: string;
  neonTitle: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  lobbyPosition: "top" | "bottom" | "left";
  icon: "lightbulb" | "book" | "zap";
  description: string;
  intro: string;
  blocks: ContentBlock[];
  quizzes?: QuizItem[];
  badgeId: string;
}

/* ═══════════════════════════════════════════════════════════
   ЖЕТИШКЕНДИКТЕР
   ═══════════════════════════════════════════════════════════ */

const BADGES: BadgeDef[] = [
  {
    id: "speed-calc",
    title: "Ыкчам эсептегич",
    description: "«Тез үйрөнүү» бөлүмүн аяктадыңыз",
    unlockKey: "module:hacks",
  },
  {
    id: "formula-king",
    title: "Формулалар падышасы",
    description: "«Формулалар дүйнөсү» бөлүмүн аяктадыңыз",
    unlockKey: "module:formulas",
  },
  {
    id: "test-crusher",
    title: "Тесттерди талкалоочу",
    description: "Бардык тест суроолорун туура чечтиңиз",
    unlockKey: "tests:all",
  },
];

/* ═══════════════════════════════════════════════════════════
   MOCK DATA — толук кыргызча
   ═══════════════════════════════════════════════════════════ */

const MATH_MODULES: MathModule[] = [
  {
    id: "hacks",
    faceLabel: "Тез үйрөнүү",
    sectionTitle: "Тез үйрөнүү & Лайфхактар",
    neonTitle: "АК ЖАК: ЫКЧАМ ЭСЕП",
    accentColor: "#f8fafc",
    glowColor: "#e2e8f0",
    borderColor: "rgba(255,255,255,0.4)",
    lobbyPosition: "top",
    icon: "lightbulb",
    badgeId: "speed-calc",
    description: "Математиканы заматта жана оңой эсептөөнүн сырлары.",
    intro:
      "Бул бөлүмдө сиз секундада эсептөөгө жардам берген практикалык ыкмаларды үйрөнөсүз. Лайфхактар экзамендерде, дүкөндө эсептөөдө жана күнүмдүк математикада чоң пайда берет.",
    blocks: [
      {
        id: "hack-1",
        title: "Лайфхак 1: 5ке аяктаган сандарды квадратка секундада көтөрүү",
        body:
          "5ке аяктаган сандын квадраты — эң оңой эсептөөлөрдүн бири. Бул ыкманы билсеңиз, 25×25, 35×35, 45×45, 65×65 сыяктуу эсептерди ойлонбой, баштан чыгарбай чече аласыз. Бул ыкма математика олимпиадаларында да кеңири колдонулат.",
        example: "45 × 45 = ?",
        formula: "n5² = (n × (n + 1)) × 10 + 25",
        steps: [
          "1-каадам: Сан 45 — 5ке аяктайт. Биринчи сан 4.",
          "2-каадам: 4тү кийинки санга (5) көбөйтөбүз: 4 × 5 = 20.",
          "3-каадам: Аягына 25ти коёбуз (5² = 25 ар дайым).",
          "Жыйынтык: 45 × 45 = 2025",
          "Текшерүү: 45² = 2025 — туура!",
          "Башка мисал: 35 × 35 → 3 × 4 = 12, аягы 25 → 1225",
          "Башка мисал: 65 × 65 → 6 × 7 = 42, аягы 25 → 4225",
        ],
      },
      {
        id: "hack-2",
        title: "Лайфхак 2: Кез келген санды 11ге акылда тез көбөйтүү",
        body:
          "Эки орундук санды 11ге көбөйтүү үчүн четиндеги сандарды жазып, ортосуна алардын суммасын коюш керек. Эгер сумма 10дон чоң болсо, ошол орундук санга 1 кошулат. Бул ыкма эсеп машинасысыз иштейт!",
        example: "53 × 11 = ?",
        formula: "AB × 11 = A(A+B)B  (эгер A+B < 10 болсо)",
        steps: [
          "53 × 11: четиндеги сандар — 5 жана 3.",
          "Ортосуна сумма: 5 + 3 = 8.",
          "Жыйынтык: 583",
          "47 × 11 → 4 + 7 = 11 → 1 кошулат → 517",
          "82 × 11 → 8 + 2 = 10 → 902",
          "91 × 11 → 9 + 1 = 10 → 1001",
        ],
      },
      {
        id: "hack-3",
        title: "Кошумча: Проценттерди заматта табуу",
        body:
          "Проценттердин ордун алмаштыруу — эң кубулук ыкмалардын бири. 50% × 8% = 8% × 50% = 4%. Бул ыкма чоң сандарды эсептей элек жыйынтыкка келет.",
        example: "50% × 8% = ?",
        steps: [
          "50% × 8% = 8% × 50% (ордун алмаштыруу)",
          "8% × 50% = 8% × 0,5 = 4%",
          "200 сомдун 15% = 15% × 200 = 30 сом",
          "25% × 40% = 40% × 25% = 10%",
        ],
      },
    ],
  },
  {
    id: "formulas",
    faceLabel: "Формулалар",
    sectionTitle: "Формулалар дүйнөсү",
    neonTitle: "САРЫ ЖАК: ФОРМУЛАЛАР",
    accentColor: "#ffd500",
    glowColor: "#fbbf24",
    borderColor: "rgba(255,213,0,0.5)",
    lobbyPosition: "left",
    icon: "book",
    badgeId: "formula-king",
    description: "Эң маанилүү математикалык формулалар жана алардын мааниси.",
    intro:
      "Формулалар — математиканын тили. Бул бөлүмдө алгебра, геометрия жана теңдемелерди чечүүгө негиз болгон формулаларды толук түшүндүрөбүз. Ар бир формулага практикалык мисалдар кошулган.",
    blocks: [
      {
        id: "form-1",
        title: "Кыскача көбөйтүүнүн формуласы",
        body:
          "Квадраттардын суммасы жана айырмасы формулалары — алгебранын негизги куралдары. Бул формулалар теңдемелерди жайlaштыруuda, идентификаторлорду ачууда жана геометрияда кеңири колдонулат. Формуланы жаттап алуу экзамендерде убакытты үнөмдөйт.",
        formula: "(a + b)² = a² + 2ab + b²",
        steps: [
          "(a + b)² = (a + b)(a + b) = a² + ab + ab + b² = a² + 2ab + b²",
          "(a − b)² = a² − 2ab + b²",
          "Мисал: (3 + 2)² = 9 + 12 + 4 = 25 = 5² ✓",
          "Мисал: (5 − 2)² = 25 − 20 + 4 = 9 = 3² ✓",
          "Колдонуу: (x + 1)² = x² + 2x + 1",
        ],
      },
      {
        id: "form-2",
        title: "Пифагордун теоремасы",
        body:
          "Түз бурчтуу үч бурчтууктa гипотенузанын квадраты эки катеттин квадраттарынын суммасына тең. Бул теорема 2500 жыл мурда табылган, бирок бүгүн да курулуш, GPS, картa ölchöөдө негизги кuraл болуп саналат.",
        formula: "a² + b² = c²",
        steps: [
          "a, b — катеттер (тик бурчтуу тараптар)",
          "c — гипотенуза (эң узун тарап)",
          "Классикалык мисал: 3² + 4² = 9 + 16 = 25 = 5²",
          "Турмушта: 6 м × 8 м бөлmenin диagonaly = √(36+64) = 10 м",
          "Жер ölchöө, архитектура, инженерия — бардыгы Пифагорго негизделген",
        ],
      },
      {
        id: "form-3",
        title: "Дискриминант — квадраттык теңдемелерди чечүүчү курал",
        body:
          "ax² + bx + c = 0 теңдемесинин чечими D = b² − 4ac формуласы аркылуу табылат. D > 0 болсо — 2 чечим, D = 0 — 1 чечим, D < 0 — чечим жок.",
        formula: "D = b² − 4ac",
        steps: [
          "x = (−b ± √D) / 2a",
          "Мисал: x² − 5x + 6 = 0 → D = 25 − 24 = 1",
          "x₁ = 3, x₂ = 2",
        ],
      },
    ],
  },
  {
    id: "tests",
    faceLabel: "Тесттер",
    sectionTitle: "Интерактивдүү Тесттер",
    neonTitle: "ЖАШЫЛ ЖАК: КЕСТ-РЕЖИМ",
    accentColor: "#4ade80",
    glowColor: "#22c55e",
    borderColor: "rgba(74,222,128,0.5)",
    lobbyPosition: "bottom",
    icon: "zap",
    badgeId: "test-crusher",
    description: "Билимиңизди текшериңиз — ар бир туура жооп +25 бал берет.",
    intro:
      "Бул бөлүмдө 3 деңгээлдүү тест бар. Ар бир туура жооп +25 бал берет, прогресс шкалаңыз өсөт, Рубик кубунун бир катмары айланат. Бардык суроолорду туура чечсеңиз — «Тесттерди талкалоочу» төш белгиси ачылат!",
    blocks: [
      {
        id: "test-rules",
        title: "Тест эрежелери",
        body: "Ар бир суроодо 3 вариант бар. Туура жооп — +25 бал. Ката жооп — кайра аракет кылыңыз, эч нерсе жоготпойсуз.",
        steps: [
          "1-деңгээл: Линейдүү теңдеме (2x + 10 = 20)",
          "2-деңгээл: Квадраттын аянты (тарабы 5 см)",
          "3-деңгээл: Квадраттык теңдеме (x² − 16 = 0)",
        ],
      },
    ],
    quizzes: [
      {
        id: "test-q1",
        title: "1-деңгээл",
        question: "Эгерде 2x + 10 = 20 болсо, x эмнеге тең?",
        formula: "2x + 10 = 20",
        options: ["5", "10", "2"],
        correctIndex: 0,
        points: 25,
        twistLayer: { axis: "y", layer: 2 },
      },
      {
        id: "test-q2",
        title: "2-деңгээл",
        question: "Тарабы 5 см болгон квадраттын аянты канча?",
        formula: "S = a × a = a²",
        options: ["25 см²", "20 см²", "15 см²"],
        correctIndex: 0,
        points: 25,
        twistLayer: { axis: "y", layer: 1 },
      },
      {
        id: "test-q3",
        title: "3-деңгээл",
        question: "x² − 16 = 0 теңдемесинин тамырлары кайсылар?",
        formula: "x² − 16 = 0  →  x² = 16",
        options: ["4 жана −4", "Тек гана 4", "16"],
        correctIndex: 0,
        points: 25,
        twistLayer: { axis: "x", layer: 2 },
      },
    ],
  },
];

const TOTAL_QUIZZES = MATH_MODULES.find((m) => m.id === "tests")!.quizzes!.length;

/* ═══════════════════════════════════════════════════════════
   СТАТИСТИКА ЛОГИКАСЫ
   ═══════════════════════════════════════════════════════════ */

function getAcademicLevel(score: number): { label: string; color: string } {
  if (score <= 50) return { label: "Жаңы баштаган окуучу 🌟", color: "#94a3b8" };
  if (score <= 100) return { label: "Математика изилдөөчүсү 🧠", color: "#a78bfa" };
  return { label: "Математика ГЕНИЙИ ⚡", color: "#fbbf24" };
}

function calcModuleProgress(
  module: MathModule,
  solvedIds: Set<string>,
  visitedModules: Set<string>,
): number {
  if (module.quizzes && module.quizzes.length > 0) {
    const solved = module.quizzes.filter((q) => solvedIds.has(q.id)).length;
    return Math.round((solved / module.quizzes.length) * 100);
  }
  return visitedModules.has(module.id) ? 100 : 0;
}

function calcOverallProgress(solvedIds: Set<string>, visitedModules: Set<string>): number {
  const sum = MATH_MODULES.reduce((acc, m) => acc + calcModuleProgress(m, solvedIds, visitedModules), 0);
  return Math.round(sum / MATH_MODULES.length);
}

/* ═══════════════════════════════════════════════════════════
   RUBIK'S CUBE — Canvas
   ═══════════════════════════════════════════════════════════ */

const FACE_COLORS = { U: "#f5f5f5", D: "#ffd500", F: "#009b48", B: "#0046ad", R: "#b71234", L: "#ff5800" };

interface CubieFaces { px?: string; nx?: string; py?: string; ny?: string; pz?: string; nz?: string }
interface Cubie { xi: number; yi: number; zi: number; faces: CubieFaces }
interface TwistAnim { axis: "x" | "y" | "z"; layer: number; cw: boolean; angle: number }
interface Vec3 { x: number; y: number; z: number }

function rotateFacesY(f: CubieFaces, cw: boolean): CubieFaces {
  const { px, nx, pz, nz } = f;
  return cw ? { ...f, px: pz, pz: nx, nx: nz, nz: px } : { ...f, px: nz, nz: nx, nx: pz, pz: px };
}
function rotateFacesX(f: CubieFaces, cw: boolean): CubieFaces {
  const { py, ny, pz, nz } = f;
  return cw ? { ...f, py: nz, nz: ny, ny: pz, pz: py } : { ...f, py: pz, pz: ny, ny: nz, nz: py };
}
function rotateFacesZ(f: CubieFaces, cw: boolean): CubieFaces {
  const { px, nx, py, ny } = f;
  return cw ? { ...f, px: py, py: nx, nx: ny, ny: px } : { ...f, px: ny, ny: nx, nx: py, py: px };
}

function createSolvedCube(): Cubie[] {
  const cubies: Cubie[] = [];
  for (let xi = 0; xi < 3; xi++)
    for (let yi = 0; yi < 3; yi++)
      for (let zi = 0; zi < 3; zi++) {
        const faces: CubieFaces = {};
        if (yi === 2) faces.py = FACE_COLORS.U;
        if (yi === 0) faces.ny = FACE_COLORS.D;
        if (zi === 2) faces.pz = FACE_COLORS.F;
        if (zi === 0) faces.nz = FACE_COLORS.B;
        if (xi === 2) faces.px = FACE_COLORS.R;
        if (xi === 0) faces.nx = FACE_COLORS.L;
        cubies.push({ xi, yi, zi, faces });
      }
  return cubies;
}

function permuteLayer(cubies: Cubie[], axis: "x" | "y" | "z", layer: number, cw: boolean): void {
  for (const c of cubies.filter((x) => x[`${axis}i`] === layer)) {
    if (axis === "y") {
      const dx = c.xi - 1, dz = c.zi - 1;
      c.xi = (cw ? dz : -dz) + 1; c.zi = (cw ? -dx : dx) + 1;
      c.faces = rotateFacesY(c.faces, cw);
    } else if (axis === "x") {
      const dy = c.yi - 1, dz = c.zi - 1;
      c.yi = (cw ? -dz : dz) + 1; c.zi = (cw ? dy : -dy) + 1;
      c.faces = rotateFacesX(c.faces, cw);
    } else {
      const dx = c.xi - 1, dy = c.yi - 1;
      c.xi = (cw ? -dy : dy) + 1; c.yi = (cw ? dx : -dx) + 1;
      c.faces = rotateFacesZ(c.faces, cw);
    }
  }
}

function rotX(v: Vec3, a: number): Vec3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: v.x, y: v.y * c - v.z * s, z: v.y * s + v.z * c };
}
function rotY(v: Vec3, a: number): Vec3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: v.x * c + v.z * s, y: v.y, z: -v.x * s + v.z * c };
}
function rotateAxis(v: Vec3, axis: "x" | "y" | "z", a: number): Vec3 {
  if (axis === "x") return rotX(v, a);
  if (axis === "y") return rotY(v, a);
  const c = Math.cos(a), s = Math.sin(a);
  return { x: v.x * c - v.y * s, y: v.x * s + v.y * c, z: v.z };
}

function RubiksCubeCanvas({
  twistTrigger,
  scale = 1,
}: {
  twistTrigger: { axis: "x" | "y" | "z"; layer: 0 | 1 | 2; key: number } | null;
  scale?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const cubiesRef = useRef(createSolvedCube());
  const rotXRef = useRef(-0.35);
  const rotYRef = useRef(0.55);
  const autoRef = useRef(0);
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const twistRef = useRef<TwistAnim | null>(null);
  const glowRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!twistTrigger || twistRef.current) return;
    twistRef.current = { axis: twistTrigger.axis, layer: twistTrigger.layer, cw: true, angle: 0 };
    glowRef.current = 1.3;
  }, [twistTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current, box = boxRef.current;
    if (!canvas || !box) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    const spacing = 1.02, half = 0.46;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = box.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    const onDown = (e: MouseEvent | TouchEvent) => {
      dragRef.current.active = true;
      const p = "touches" in e ? e.touches[0] : e;
      dragRef.current.lastX = p.clientX; dragRef.current.lastY = p.clientY;
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragRef.current.active || twistRef.current) return;
      const p = "touches" in e ? e.touches[0] : e;
      rotYRef.current += (p.clientX - dragRef.current.lastX) * 0.008;
      rotXRef.current = Math.max(-1.2, Math.min(1.2, rotXRef.current + (p.clientY - dragRef.current.lastY) * 0.008));
      dragRef.current.lastX = p.clientX; dragRef.current.lastY = p.clientY;
    };
    const onUp = () => { dragRef.current.active = false; };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const { width, height } = box.getBoundingClientRect();
      if (!dragRef.current.active && !twistRef.current) { autoRef.current += dt * 0.22; rotYRef.current += dt * 0.18; }
      const twist = twistRef.current;
      if (twist) {
        twist.angle += dt * 2.8;
        if (twist.angle >= Math.PI / 2) { permuteLayer(cubiesRef.current, twist.axis, twist.layer, twist.cw); twistRef.current = null; }
      }
      if (glowRef.current > 0) glowRef.current = Math.max(0, glowRef.current - dt * 0.55);

      ctx.clearRect(0, 0, width, height);
      const bg = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * 0.75);
      bg.addColorStop(0, "#0f0a1e"); bg.addColorStop(1, "#020108");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, width, height);

      interface FD { verts: Vec3[]; color: string; depth: number; glow: boolean }
      const faces: FD[] = [];
      const fov = 4.5, ps = 72 * scale;

      for (const c of cubiesRef.current) {
        const cx = (c.xi - 1) * spacing, cy = (c.yi - 1) * spacing, cz = (c.zi - 1) * spacing;
        const defs: { key: keyof CubieFaces; corners: Vec3[] }[] = [
          { key: "px", corners: [{ x: half, y: -half, z: -half }, { x: half, y: -half, z: half }, { x: half, y: half, z: half }, { x: half, y: half, z: -half }] },
          { key: "nx", corners: [{ x: -half, y: -half, z: half }, { x: -half, y: -half, z: -half }, { x: -half, y: half, z: -half }, { x: -half, y: half, z: half }] },
          { key: "py", corners: [{ x: -half, y: half, z: -half }, { x: half, y: half, z: -half }, { x: half, y: half, z: half }, { x: -half, y: half, z: half }] },
          { key: "ny", corners: [{ x: -half, y: -half, z: half }, { x: half, y: -half, z: half }, { x: half, y: -half, z: -half }, { x: -half, y: -half, z: -half }] },
          { key: "pz", corners: [{ x: -half, y: -half, z: half }, { x: -half, y: half, z: half }, { x: half, y: half, z: half }, { x: half, y: -half, z: half }] },
          { key: "nz", corners: [{ x: half, y: -half, z: -half }, { x: half, y: half, z: -half }, { x: -half, y: half, z: -half }, { x: -half, y: -half, z: -half }] },
        ];
        for (const fd of defs) {
          const color = c.faces[fd.key];
          if (!color) continue;
          const lt = twist && c[`${twist.axis}i`] === twist.layer;
          const tr = fd.corners.map((co) => {
            let v: Vec3 = { x: co.x + cx, y: co.y + cy, z: co.z + cz };
            if (lt && twist) v = rotateAxis(v, twist.axis, twist.angle);
            return rotY(rotX(v, rotXRef.current), rotYRef.current + autoRef.current * 0.05);
          });
          const cen = tr.reduce((a, v) => ({ x: a.x + v.x, y: a.y + v.y, z: a.z + v.z }), { x: 0, y: 0, z: 0 });
          faces.push({ verts: tr, color, depth: cen.z / 4, glow: !!(lt && glowRef.current > 0) });
        }
      }
      faces.sort((a, b) => a.depth - b.depth);
      for (const f of faces) {
        const pts = f.verts.map((v) => { const z = v.z + fov, s = fov / z; return [width / 2 + v.x * s * ps, height / 2 - v.y * s * ps] as [number, number]; });
        ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < 4; i++) ctx.lineTo(pts[i][0], pts[i][1]);
        ctx.closePath(); ctx.fillStyle = f.color; ctx.globalAlpha = Math.min(1, 0.75 + (f.depth + 2) * 0.08); ctx.fill();
        if (f.glow) { ctx.shadowColor = "#a78bfa"; ctx.shadowBlur = 24 * glowRef.current; ctx.strokeStyle = `rgba(167,139,250,${0.55 + glowRef.current * 0.35})`; ctx.lineWidth = 2.5; ctx.stroke(); ctx.shadowBlur = 0; }
        ctx.strokeStyle = "rgba(0,0,0,0.55)"; ctx.lineWidth = 1.2; ctx.globalAlpha = 1; ctx.stroke();
      }
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameRef.current); ro.disconnect();
      canvas.removeEventListener("mousedown", onDown); canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp); canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onUp);
    };
  }, [scale]);

  return (
    <div ref={boxRef} className="h-full w-full cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="h-full w-full touch-none" aria-label="3D Рубик кубу" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   UI КОМПОНЕНТТЕРИ
   ═══════════════════════════════════════════════════════════ */

const LOBBY_POS: Record<MathModule["lobbyPosition"], string> = {
  top: "left-1/2 top-[10%] -translate-x-1/2",
  bottom: "bottom-[10%] left-1/2 -translate-x-1/2",
  left: "left-[5%] top-1/2 -translate-y-1/2",
};

function ProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-white/50">Прогресс</span>
        <span className="font-semibold" style={{ color }}>{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 12px ${color}66` }}
        />
      </div>
    </div>
  );
}

function FormulaBlock({ formula, color }: { formula: string; color: string }) {
  return (
    <div className="my-3 rounded-xl border px-4 py-3 text-center font-mono text-base sm:text-lg" style={{ borderColor: `${color}44`, background: `${color}11`, color, textShadow: `0 0 12px ${color}55` }}>
      {formula}
    </div>
  );
}

function StatsPanel({
  score,
  level,
  overallProgress,
  unlockedBadges,
  studentName,
}: {
  score: number;
  level: { label: string; color: string };
  overallProgress: number;
  unlockedBadges: Set<string>;
  studentName: string;
}) {
  return (
    <div className="rounded-2xl border border-violet-500/25 bg-slate-900/60 p-4 backdrop-blur-md sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40">Окуучу</p>
          <p className="mt-0.5 text-lg font-bold text-white">{studentName}</p>
          <p className="mt-1 text-sm font-medium" style={{ color: level.color }}>{level.label}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-white/40">Жалпы упай</p>
          <p className="mt-0.5 flex items-center justify-end gap-1.5 text-2xl font-bold text-alpine-400">
            <Trophy className="h-5 w-5" />
            {score}
          </p>
          <p className="text-xs text-white/35">бал</p>
        </div>
      </div>
      <div className="mt-4">
        <ProgressBar percent={overallProgress} color="#a78bfa" />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/45">Жетишкендиктер</p>
        <div className="flex flex-wrap gap-2">
          {BADGES.map((b) => {
            const unlocked = unlockedBadges.has(b.id);
            return (
              <div
                key={b.id}
                title={b.description}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all ${unlocked ? "border-violet-400/60 bg-violet-500/20 text-violet-200" : "border-white/10 bg-white/5 text-white/25"}`}
                style={unlocked ? { boxShadow: "0 0 16px rgba(167,139,250,0.35)" } : undefined}
              >
                {unlocked ? "✓ " : "🔒 "}{b.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QuizPanel({
  quizzes,
  solvedIds,
  accent,
  onCorrect,
  onWrong,
}: {
  quizzes: QuizItem[];
  solvedIds: Set<string>;
  accent: string;
  onCorrect: (q: QuizItem) => void;
  onWrong: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [burst, setBurst] = useState(false);
  const quiz = quizzes[activeIdx];

  const answer = (idx: number) => {
    if (!quiz || feedback === "correct" || solvedIds.has(quiz.id)) return;
    setSelected(idx);
    if (idx === quiz.correctIndex) {
      setFeedback("correct");
      setBurst(true);
      window.setTimeout(() => { onCorrect(quiz); setBurst(false); setFeedback(null); setSelected(null); }, 1000);
    } else {
      setFeedback("wrong");
      onWrong();
      window.setTimeout(() => { setFeedback(null); setSelected(null); }, 1200);
    }
  };

  return (
    <div className="relative mt-8">
      <AnimatePresence>
        {burst && (
          <motion.div initial={{ opacity: 0, scale: 0.4, y: 16 }} animate={{ opacity: 1, scale: 1, y: -10 }} exit={{ opacity: 0, scale: 1.2, y: -36 }}
            className="pointer-events-none absolute -top-4 right-0 z-30 flex items-center gap-2 rounded-2xl border border-alpine-400/80 bg-alpine-500/30 px-6 py-3 text-lg font-bold text-alpine-100 shadow-[0_0_50px_rgba(74,222,128,0.55)]">
            <Sparkles className="h-6 w-6 animate-pulse" />+25 бал
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-4 flex items-center gap-2" style={{ color: accent }}><Zap className="h-5 w-5" /><h3 className="text-sm font-bold uppercase tracking-wider">Интерактивдүү тесттер</h3></div>
      <div className="mb-4 flex flex-wrap gap-2">
        {quizzes.map((q, i) => (
          <button key={q.id} type="button" onClick={() => { setActiveIdx(i); setSelected(null); setFeedback(null); }}
            className="rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all"
            style={i === activeIdx ? { borderColor: `${accent}88`, background: `${accent}22`, color: accent } : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
            {solvedIds.has(q.id) ? "✓ " : ""}{q.title}
          </button>
        ))}
      </div>
      {quiz && (
        <div className="rounded-2xl border bg-slate-900/60 p-5" style={{ borderColor: `${accent}33` }}>
          {quiz.formula && <FormulaBlock formula={quiz.formula} color={accent} />}
          <p className="text-base font-medium leading-relaxed text-white">{quiz.question}</p>
          <div className="mt-4 space-y-2.5">
            {quiz.options.map((opt, idx) => {
              const ok = idx === quiz.correctIndex;
              const done = solvedIds.has(quiz.id);
              let cls = "w-full rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all ";
              if ((done || feedback === "correct") && ok) cls += "border-alpine-400 bg-alpine-500/25 text-alpine-200";
              else if (feedback === "wrong" && selected === idx) cls += "border-red-400 bg-red-500/20 text-red-300 animate-pulse";
              else cls += "border-slate-600/60 bg-slate-800/50 text-slate-200 hover:border-white/30";
              return <button key={opt} type="button" disabled={done || feedback === "correct"} onClick={() => answer(idx)} className={cls}>{opt}</button>;
            })}
          </div>
          {feedback === "wrong" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
              Ката жооп! Кайра ойлонуп, кайра аракет кылыңыз.
            </motion.p>
          )}
          {solvedIds.has(quiz.id) && feedback !== "correct" && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-alpine-400"><CheckCircle2 className="h-4 w-4" />Бул суроо бүткөн</p>
          )}
        </div>
      )}
    </div>
  );
}

function MathLobby({
  onSelect,
  score,
  level,
  overallProgress,
  unlockedBadges,
  studentName,
}: {
  onSelect: (id: string) => void;
  score: number;
  level: { label: string; color: string };
  overallProgress: number;
  unlockedBadges: Set<string>;
  studentName: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#030108]">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 50% 55%, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
      <header className="relative z-30 flex shrink-0 items-center justify-between px-5 py-4 sm:px-10">
        <span className="text-lg lowercase tracking-widest text-white/85">mathcube</span>
        <Link to="/#sabaktar" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">Сабактарга</Link>
      </header>
      <div className="relative z-20 mx-auto w-full max-w-lg px-4 pb-2">
        <StatsPanel score={score} level={level} overallProgress={overallProgress} unlockedBadges={unlockedBadges} studentName={studentName} />
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-2 text-center">
          <h1 className="font-serif text-2xl text-white sm:text-3xl">МАТЕМАТИКА КУБУ</h1>
          <p className="mt-1 text-xs uppercase tracking-[0.4em] text-white/40">Бөлүмдү тандаңыз</p>
        </motion.div>
        <div className="relative h-[min(380px,50vh)] w-full max-w-md">
          {MATH_MODULES.map((mod) => (
            <button key={mod.id} type="button" onClick={() => onSelect(mod.id)} onMouseEnter={() => setHovered(mod.id)} onMouseLeave={() => setHovered(null)}
              className={`absolute z-20 transition-all duration-500 ${LOBBY_POS[mod.lobbyPosition]} ${hovered === mod.id ? "scale-110" : ""}`}>
              <span className="block whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs"
                style={{ color: mod.accentColor, borderColor: mod.borderColor, background: "rgba(0,0,0,0.55)", textShadow: hovered === mod.id ? `0 0 20px ${mod.glowColor}` : `0 0 8px ${mod.glowColor}44`, boxShadow: hovered === mod.id ? `0 0 28px ${mod.glowColor}55` : "none" }}>
                {mod.faceLabel}
              </span>
            </button>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full max-h-[320px] max-w-[320px]"><RubiksCubeCanvas twistTrigger={null} scale={1.05} /></div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-white/35">Кубду чычкан менен айландырыңыз · Бөлүмдү чыкылдатыңыз</p>
      </div>
    </div>
  );
}

function ModuleDetailView({
  module,
  score,
  level,
  moduleProgress,
  unlockedBadges,
  solvedIds,
  twistTrigger,
  studentName,
  onBack,
  onQuizCorrect,
}: {
  module: MathModule;
  score: number;
  level: { label: string; color: string };
  moduleProgress: number;
  unlockedBadges: Set<string>;
  solvedIds: Set<string>;
  twistTrigger: { axis: "x" | "y" | "z"; layer: 0 | 1 | 2; key: number } | null;
  studentName: string;
  onBack: () => void;
  onQuizCorrect: (q: QuizItem) => void;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative h-[100dvh] overflow-hidden">
      <div className="relative z-10 flex h-full flex-col">
        <header className="flex shrink-0 items-center justify-between px-4 py-3 sm:px-8">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 hover:border-violet-400/40">
            <ArrowLeft className="h-4 w-4" />Ааламга кайтуу
          </button>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-sm text-white/60">{studentName}</span>
            <div className="flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-slate-900/60 px-3 py-1.5 text-sm font-semibold text-violet-300">
              <Star className="h-4 w-4 text-alpine-400" />{score} бал
            </div>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <div className="math-detail-scroll flex w-full flex-col overflow-y-auto border-b border-white/5 px-5 py-4 sm:px-8 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-10 lg:py-5">
            <div className="mb-4 rounded-xl border border-white/10 bg-slate-900/50 p-3 sm:hidden">
              <p className="text-xs text-white/50">{studentName} · <span style={{ color: level.color }}>{level.label}</span></p>
            </div>
            <div className="flex items-center gap-2" style={{ color: module.accentColor }}>
              {module.icon === "lightbulb" ? <Lightbulb className="h-5 w-5" /> : module.icon === "book" ? <BookOpen className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
              <span className="text-xs font-bold uppercase tracking-widest">{module.sectionTitle}</span>
            </div>
            <h1 className="mt-2 text-xl font-bold uppercase tracking-wider sm:text-2xl" style={{ color: module.accentColor, textShadow: `0 0 24px ${module.glowColor}88` }}>{module.neonTitle}</h1>
            <p className="mt-1 text-sm text-slate-400">{module.description}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{module.intro}</p>
            <div className="mt-5"><ProgressBar percent={moduleProgress} color={module.accentColor} /></div>
            <div className="mt-6 space-y-4">
              {module.blocks.map((block, i) => (
                <motion.div key={block.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/55 p-5" style={{ borderColor: `${module.accentColor}22` }}>
                  <h3 className="text-base font-bold text-white">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.body}</p>
                  {block.formula && <FormulaBlock formula={block.formula} color={module.accentColor} />}
                  {block.example && <p className="mt-2 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-slate-200">Мисал: {block.example}</p>}
                  {block.steps && (
                    <ol className="mt-3 space-y-2">{block.steps.map((s) => (
                      <li key={s.slice(0, 28)} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: module.accentColor }} />{s}
                      </li>
                    ))}</ol>
                  )}
                </motion.div>
              ))}
            </div>
            {module.quizzes && <QuizPanel quizzes={module.quizzes} solvedIds={solvedIds} accent={module.accentColor} onCorrect={onQuizCorrect} onWrong={() => undefined} />}
            {unlockedBadges.has(module.badgeId) && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 flex items-center gap-2 rounded-xl border border-violet-400/40 bg-violet-500/15 px-4 py-3">
                <Award className="h-5 w-5 text-violet-300" />
                <span className="text-sm font-semibold text-violet-200">Жетишкендик ачылды: {BADGES.find((b) => b.id === module.badgeId)?.title}</span>
              </motion.div>
            )}
          </div>
          <div className="relative flex w-full items-center justify-center p-4 lg:w-1/2 lg:p-8">
            <motion.div initial={{ opacity: 0, scale: 0.75, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative h-full w-full max-w-xl">
              <div className="absolute inset-0 rounded-3xl border bg-violet-950/10 backdrop-blur-sm" style={{ borderColor: module.borderColor }} />
              <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 text-center">
                <p className="text-[10px] uppercase tracking-[0.45em]" style={{ color: `${module.accentColor}99` }}>3D Рубик кубу</p>
                <p className="mt-1 text-xs text-white/35">Сүйрөп айландырыңыз</p>
              </div>
              <div className="relative h-full min-h-[260px] w-full pt-12 lg:min-h-[480px]">
                <RubiksCubeCanvas twistTrigger={twistTrigger} scale={1.15} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   НЕГИЗГИ КОМПОНЕНТ
   ═══════════════════════════════════════════════════════════ */

export default function MathDetail() {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<ViewMode>("lobby");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
  const [unlockedBadges, setUnlockedBadges] = useState<Set<string>>(new Set());
  const [twistTrigger, setTwistTrigger] = useState<{ axis: "x" | "y" | "z"; layer: 0 | 1 | 2; key: number } | null>(null);
  const twistKeyRef = useRef(0);

  const studentName = user?.full_name || user?.username || "Окуучу";
  const level = useMemo(() => getAcademicLevel(score), [score]);
  const overallProgress = useMemo(() => calcOverallProgress(solvedIds, visitedModules), [solvedIds, visitedModules]);
  const selectedModule = MATH_MODULES.find((m) => m.id === selectedId) ?? null;
  const moduleProgress = selectedModule ? calcModuleProgress(selectedModule, solvedIds, visitedModules) : 0;

  const unlockBadge = useCallback((badgeId: string) => {
    setUnlockedBadges((prev) => new Set(prev).add(badgeId));
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setViewMode("detail");
    setVisitedModules((prev) => {
      const next = new Set(prev).add(id);
      const mod = MATH_MODULES.find((m) => m.id === id);
      if (mod) unlockBadge(mod.badgeId);
      return next;
    });
  }, [unlockBadge]);

  const handleBack = useCallback(() => {
    setViewMode("lobby");
    setSelectedId(null);
  }, []);

  const handleQuizCorrect = useCallback((quiz: QuizItem) => {
    setScore((s) => s + quiz.points);
    setSolvedIds((prev) => {
      const next = new Set(prev).add(quiz.id);
      if (next.size >= TOTAL_QUIZZES) unlockBadge("test-crusher");
      return next;
    });
    twistKeyRef.current += 1;
    setTwistTrigger({ axis: quiz.twistLayer.axis, layer: quiz.twistLayer.layer, key: twistKeyRef.current });
  }, [unlockBadge]);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#030108] text-white">
      <AnimatePresence mode="wait">
        {viewMode === "lobby" && (
          <motion.div key="lobby" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
            <MathLobby onSelect={handleSelect} score={score} level={level} overallProgress={overallProgress} unlockedBadges={unlockedBadges} studentName={studentName} />
          </motion.div>
        )}
        {viewMode === "detail" && selectedModule && (
          <ModuleDetailView key={selectedModule.id} module={selectedModule} score={score} level={level} moduleProgress={moduleProgress} unlockedBadges={unlockedBadges} solvedIds={solvedIds} twistTrigger={twistTrigger} studentName={studentName} onBack={handleBack} onQuizCorrect={handleQuizCorrect} />
        )}
      </AnimatePresence>
    </div>
  );
}
