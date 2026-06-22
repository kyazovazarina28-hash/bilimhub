import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle2, Map, Sparkles, Trophy, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */

type ViewMode = "lobby" | "detail";
type PlanetKind = "earth" | "mars" | "jupiter" | "neptune";

interface QuizItem {
  id: string;
  title: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  points: number;
}

interface LessonItem {
  id: string;
  title: string;
  body: string;
  facts?: string[];
}

interface PlanetData {
  id: string;
  planetKind: PlanetKind;
  badgeLabel: string;
  planetName: string;
  neonTitle: string;
  lobbySubtitle: string;
  lessons: LessonItem[];
  quizzes: QuizItem[];
  planetGlow: string;
}

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  twinkle: number;
  speed: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

/* ═══════════════════════════════════════════════════════════
   MOCK DATA — толук география контенти
   ═══════════════════════════════════════════════════════════ */

const PLANETS: PlanetData[] = [
  {
    id: "tasks",
    planetKind: "earth",
    badgeLabel: "Тапшырмалар",
    planetName: "EARTH",
    neonTitle: "THE BLUE PLANET: EARTH",
    lobbySubtitle: "Кыргызстандын рельефи, тоолору жана табигый ресурстары",
    planetGlow: "#4ade80",
    lessons: [
      {
        id: "earth-l1",
        title: "Кыргызстандын бийик тоолору",
        body:
          "Кыргызстан Тянь-Шань жана Памир тоо системаларынын кесмешине жайгашкан. Бул аймакта дүйнөнүн эң бийик чокуларынын бир топтому жайгашкан.",
        facts: [
          "Жеңиш чокусу — 7439 м, Кыргызстандагы эң бийик чоку.",
          "Тянь-Шань — «Аspaktuu тоолор» деген аталыштан келет, узундугу 2500 км.",
          "Памир тоолору «Дүйнөнүн чаты» деп аталып, 4 чоң тоо системасынын кесмеши.",
          "Кыргызстан аянтынын 90% ашууну тоолор ээлейт — бул дүйнөдөгү эң тоолуу өлкөлөрдүн бири.",
        ],
      },
      {
        id: "earth-l2",
        title: "Чек аралар жана географиялык абал",
        body:
          "Кыргызстан Борбордук Азияда, коңшу өлкөлөрдүн ортосунда жайгашкан. Стратегиялык абал аны «Борбордук Азиянын чогулушу» деп атайт.",
        facts: [
          "Коңшу өлкөлөр: Казахстан, Өзбекстан, Тажикстан, Кытай.",
          "Чек ара узундугу — 4503 км.",
          "Бишкек — борбор шаар, Чүй оyonunda жайгашкан.",
          "Өлкө эки тараптуу сырткы политиканы жүргүзөт — ачык чек аралар.",
        ],
      },
      {
        id: "earth-l3",
        title: "Ысык-Көл — берметибиз",
        body:
          "Ысык-Көл — дүйнөдөгү эң чоң тоо оroyунун көлү. Ал «Кыргызстандын көк көзү» деп аталып, UNESCO тizмесине кирген.",
        facts: [
          "Аянты — 6236 км², тереңдиги — 668 м.",
          "Тузsuz көл — суусун ичүүгө болот.",
          "Кышы жumshak — суусу тоңбойт (термикалык көл).",
          "1736 м деңиз деңгээлинен жогору жайгашкан.",
        ],
      },
    ],
    quizzes: [
      {
        id: "earth-q1",
        title: "Тоолор",
        question: "Кыргызстандын эң бийик чокусунун бийиктиги:",
        options: ["7134 м", "7439 м", "6995 м"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "earth-q2",
        title: "Чек ара",
        question: "Кыргызстан кайсы региондо жайгашкан?",
        options: ["Батыш Азия", "Борбордук Азия", "Түштүк Азия"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "earth-q3",
        title: "Ысык-Көл",
        question: "Ысык-Көлдүн өзгөчөлүгү:",
        options: ["Тuzдуu көл", "Тuzsuz, тоңбогон көл", "Жасалма көл"],
        correctIndex: 1,
        points: 25,
      },
    ],
  },
  {
    id: "questions",
    planetKind: "mars",
    badgeLabel: "Суроолор",
    planetName: "MARS",
    neonTitle: "THE RED PLANET: MARS",
    lobbySubtitle: "Дүйнөлүк географиялык сырлар жана кызыктуу фактылар",
    planetGlow: "#f97316",
    lessons: [
      {
        id: "mars-l1",
        title: "Дүйнөдөгү эң узун дarya",
        body:
          "Нил дaryasy — Африкадагы эң узун дarya, узундугу 6650 км. Ал эжепteki Мисir цивилизациясын өнүктүргөн.",
        facts: [
          "Нил — дүйнөдөгү эң узун дarya.",
          "Эки негизги бутагы: Ак Нил жана Көк Нил.",
          "Мисirде «Нил — жашоо» деп аталган.",
          "Жыл сайын ташкыны тегиздикти малинага байиткан.",
        ],
      },
      {
        id: "mars-l2",
        title: "Мариан коogу — эң терең жер",
        body:
          "Тындык океанындагы Мариан коogу — дүйнөнүн эң терең чекити, 11 022 м тереңдикте. Эвересттен 2000 м тереңир!",
        facts: [
          "Тереңдиги — 11 022 м (Challenger Deep).",
          "Бasckыны — Тындык океан, Марiana аралы.",
          "Бasckыныдагы басым — 1100 атмосфера.",
          "Адам ошол жерге бир нече жолу түшкөн (submersible).",
        ],
      },
      {
        id: "mars-l3",
        title: "Климат жана геосфералар",
        body:
          "Геосфералар — Жердин катмандары: литосфера, гидросфера, атмосфера, биосфера. Алар бир-бири менен байланышta.",
        facts: [
          "Атмосфера — аба катмары, отмоңдуу газ.",
          "Гидросфера — суунун бардык формалары.",
          "Литосфера — Жердин катуу кабыгы.",
          "Биосфера — бардык тиричilik.",
        ],
      },
    ],
    quizzes: [
      {
        id: "mars-q1",
        title: "Дarya",
        question: "Дүйнөдөгү эң узун дarya:",
        options: ["Амазонка", "Нил", "Янцзы"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "mars-q2",
        title: "Тереңдик",
        question: "Мариан коogunun тереңдиги:",
        options: ["8848 м", "11 022 м", "6000 м"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "mars-q3",
        title: "Геосфера",
        question: "Аба катмары кандай геосфера?",
        options: ["Атмосфера", "Гидросфера", "Литосфера"],
        correctIndex: 0,
        points: 25,
      },
    ],
  },
  {
    id: "puzzles",
    planetKind: "jupiter",
    badgeLabel: "Пазлдар",
    planetName: "JUPITER",
    neonTitle: "THE GAS GIANT: JUPITER",
    lobbySubtitle: "Карта квесттери — облустарды таануу",
    planetGlow: "#fbbf24",
    lessons: [
      {
        id: "jup-l1",
        title: "Карта квести: Нарын облусу",
        body:
          "Нарын облусу — Кыргызстандын борborду, тоолuu аймак. Нарын шаары — облустун борboru.",
        facts: [
          "Аянты — 45 200 км².",
          "Нарын дaryasy — Сырдарянын негизги бутагы.",
          "Сон-Көл — облустун белгisi.",
          "Контур: чоң тоолuu аймак, борborдо Сон-Көл.",
        ],
      },
      {
        id: "jup-l2",
        title: "Карта квести: Ош облусу",
        body:
          "Ош облусу — Кыргызстандын түштүгү, Фergana oyonunda. Ош шаары — «Түштүктүн борboru».",
        facts: [
          "Аянты — 29 200 км².",
          "Сulaiman-Too — UNESCO мuraсы.",
          "Климат — жumshak, муссондуу.",
          "Контур: түштүк бөлүк, Фergana oyonu.",
        ],
      },
      {
        id: "jup-l3",
        title: "Карта квести: Чүй облусу",
        body:
          "Чүй облусу — эл аралык транзиттик жолдор. Бишкек — республиканын борboru.",
        facts: [
          "Аянты — 20 200 км².",
          "Чүй oyonu — эң ири oyon.",
          "Тorugart өткülü — Кытайга.",
          "Контур: борborдук бөлүк, шаarдыk.",
        ],
      },
    ],
    quizzes: [
      {
        id: "jup-q1",
        title: "Нарын",
        question: "Сон-Көл кайсы облустa жайгашкан?",
        options: ["Ош", "Нарын", "Чүй"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "jup-q2",
        title: "Ош",
        question: "Sulaiman-Too кайсы шаarda?",
        options: ["Бишкек", "Ош", "Каракол"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "jup-q3",
        title: "Чүй",
        question: "Бишкек кайсы облустун кuraмында?",
        options: ["Чүй", "Талас", "Баткен"],
        correctIndex: 0,
        points: 25,
      },
    ],
  },
  {
    id: "tests",
    planetKind: "neptune",
    badgeLabel: "Тесттер",
    planetName: "NEPTUNE",
    neonTitle: "THE ICE GIANT: NEPTUNE",
    lobbySubtitle: "Экология, корулган табигат жана билим текшерүү",
    planetGlow: "#67e8f9",
    lessons: [
      {
        id: "nep-l1",
        title: "Корулган табигат",
        body:
          "Кыргызстанда 83 заповедник жана улusal park бар. Алар экosystemaны коргоого кызmat кылат.",
        facts: [
          "Sary-Chelek — UNESCO биосphere aymaгы.",
          "Ак барс — Кызыл Китепте.",
          "Ала-Арча — бишкектикlerдин эс алуусу.",
          "Корулган аймактар — 7% аянт.",
        ],
      },
      {
        id: "nep-l2",
        title: "Sary-Chelek көлү",
        body:
          "Sary-Chelek — Жалal-Абad obлусunda, Chatkal too kyrkasında. Ал тuzsuz, терең көл.",
        facts: [
          "Chatkal too kyrkasında жайгашкан.",
          "Аянты — 507 км².",
          "UNESCO биосphere aymaгы.",
          "Тuzsuz, тазa сuu.",
        ],
      },
      {
        id: "nep-l3",
        title: "Экологиялык принциптер",
        body:
          "3R принциbi — Reduce (азайтуу), Reuse (кайра колдонуу), Recycle (кайра иштетүү). Бул tabигatты коргоонун негизи.",
        facts: [
          "Reduce — таштama azайтуu.",
          "Reuse — кайра колдонуу.",
          "Recycle — кайra иштетүү.",
          "Жasyl энергия — келечек.",
        ],
      },
    ],
    quizzes: [
      {
        id: "nep-q1",
        title: "Sary-Chelek",
        question: "Sary-Chelek көлү кайсы тоо кыркasında?",
        options: ["Ала-Too", "Чаткал", "Тerskey"],
        correctIndex: 1,
        points: 25,
      },
      {
        id: "nep-q2",
        title: "Жаныбарlar",
        question: "Кызыл Китепке кирген жаныбар:",
        options: ["Ак барс", "Кош", "Тоо кой"],
        correctIndex: 0,
        points: 25,
      },
      {
        id: "nep-q3",
        title: "Экология",
        question: "3R принциbinin биринчи тамгасы:",
        options: ["Reduce", "Reuse", "Recycle"],
        correctIndex: 0,
        points: 25,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   CANVAS — Noise & Spherical Shading
   ═══════════════════════════════════════════════════════════ */

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function fmod(x: number, m: number): number {
  return ((x % m) + m) % m;
}

function hash2(lon: number, lat: number): number {
  const s = Math.sin(lon * 127.1 + lat * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function smoothNoise(lon: number, lat: number): number {
  const x0 = Math.floor(lon * 8);
  const y0 = Math.floor(lat * 8);
  const fx = lon * 8 - x0;
  const fy = lat * 8 - y0;
  const a = hash2(x0, y0);
  const b = hash2(x0 + 1, y0);
  const c = hash2(x0, y0 + 1);
  const d = hash2(x0 + 1, y0 + 1);
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function fractalNoise(lon: number, lat: number, octaves: number): number {
  let v = 0;
  let amp = 1;
  let freq = 1;
  let max = 0;
  for (let i = 0; i < octaves; i++) {
    v += smoothNoise(lon * freq, lat * freq) * amp;
    max += amp;
    amp *= 0.5;
    freq *= 2.1;
  }
  return v / max;
}

function applyShading(
  col: RGB,
  nx: number,
  ny: number,
  nz: number,
  rimColor: RGB,
  rimStrength: number,
): RGB {
  const lx = -0.65;
  const ly = -0.35;
  const lz = 0.75;
  const len = Math.hypot(lx, ly, lz);
  const ndotl = (nx * lx + ny * ly + nz * lz) / len;
  const diffuse = 0.22 + Math.max(0, ndotl) * 0.78;
  const rim = Math.pow(1 - nz, 2.6) * rimStrength;
  return {
    r: clamp(col.r * diffuse + rimColor.r * rim, 0, 255),
    g: clamp(col.g * diffuse + rimColor.g * rim, 0, 255),
    b: clamp(col.b * diffuse + rimColor.b * rim, 0, 255),
  };
}

function sampleEarth(lon: number, lat: number): RGB {
  const absLat = Math.abs(lat);
  if (absLat > 1.15) {
    const t = clamp((absLat - 1.15) / 0.45, 0, 1);
    return { r: 215 + t * 40, g: 230 + t * 25, b: 250 };
  }
  const n =
    fractalNoise(lon * 0.9, lat * 0.9, 4) +
    Math.sin(lon * 2.1 + 0.5) * Math.cos(lat * 1.4) * 0.35 +
    Math.sin(lon * 1.3 + 2.8) * 0.28;
  const clouds = fractalNoise(lon * 1.6 + 3, lat * 1.3 + 1, 3);
  const cloudMask = clouds > 0.52 ? (clouds - 0.52) * 2.1 : 0;
  let col: RGB;
  if (n > 0.38) {
    const desert = absLat > 0.48 || Math.sin(lon * 5 + 1) > 0.5;
    col = desert
      ? { r: 155, g: 128, b: 82 }
      : { r: 42 + absLat * 25, g: 115 - absLat * 15, b: 55 };
  } else {
    const depth = 0.5 + fractalNoise(lon, lat, 2) * 0.25;
    col = { r: 8 + depth * 22, g: 42 + depth * 48, b: 88 + depth * 82 };
  }
  if (cloudMask > 0) {
    const c = cloudMask * 0.75;
    col = {
      r: col.r * (1 - c) + 250 * c,
      g: col.g * (1 - c) + 252 * c,
      b: col.b * (1 - c) + 255 * c,
    };
  }
  return col;
}

function sampleMars(lon: number, lat: number): RGB {
  const absLat = Math.abs(lat);
  if (absLat > 1.2) {
    const t = clamp((absLat - 1.2) / 0.4, 0, 1);
    return { r: 238 - t * 30, g: 222 - t * 60, b: 200 - t * 90 };
  }
  const terrain = fractalNoise(lon * 1.1, lat * 1.1, 4) + Math.sin(lon * 3.2) * 0.25;
  const crater = fractalNoise(lon * 5, lat * 5, 2);
  let col: RGB = { r: 195, g: 92, b: 52 };
  if (terrain > 0.55) col = { r: 125, g: 48, b: 28 };
  else if (terrain < 0.35) col = { r: 220, g: 125, b: 75 };
  if (crater > 0.72) {
    col = { r: col.r * 0.68, g: col.g * 0.65, b: col.b * 0.6 };
  }
  const dust = Math.sin(lon * 8 + lat * 4) * 0.08;
  return { r: col.r + dust * 30, g: col.g + dust * 15, b: col.b + dust * 5 };
}

function sampleJupiter(lon: number, lat: number): RGB {
  const band = Math.sin(lat * 9 + fractalNoise(lon, lat, 2) * 1.5) * 0.5 + 0.5;
  const spotLon = fmod(lon - 1.1, Math.PI * 2);
  const spot = Math.exp(-(spotLon * spotLon + (lat - 0.25) ** 2) * 12) * 0.85;
  let r = 175 + band * 45;
  let g = 125 + band * 35;
  let b = 70 + band * 25;
  if (band > 0.68) {
    r = 225;
    g = 195;
    b = 115;
  }
  if (spot > 0.1) {
    r = r * (1 - spot) + 180 * spot;
    g = g * (1 - spot) + 55 * spot;
    b = b * (1 - spot) + 35 * spot;
  }
  return { r: clamp(r, 0, 255), g: clamp(g, 0, 255), b: clamp(b, 0, 255) };
}

function sampleNeptune(lon: number, lat: number): RGB {
  const base = fractalNoise(lon * 1.2, lat * 1.2, 3);
  const streak = Math.sin(lat * 14 + lon * 2 + base * 3) * 0.5 + 0.5;
  const storm = Math.exp(-((lon + 0.6) ** 2 + lat * lat) * 5) * 0.55;
  let r = 18 + base * 35 + streak * 25 + storm * 50;
  let g = 55 + base * 70 + streak * 40 + storm * 35;
  let b = 145 + base * 80 + streak * 30 + storm * 20;
  if (streak > 0.75) {
    r += 60;
    g += 70;
    b += 50;
  }
  return { r: clamp(r, 0, 255), g: clamp(g, 0, 255), b: clamp(b, 0, 255) };
}

const SAMPLERS: Record<PlanetKind, (lon: number, lat: number) => RGB> = {
  earth: sampleEarth,
  mars: sampleMars,
  jupiter: sampleJupiter,
  neptune: sampleNeptune,
};

const RIM_COLORS: Record<PlanetKind, RGB> = {
  earth: { r: 80, g: 180, b: 255 },
  mars: { r: 255, g: 140, b: 60 },
  jupiter: { r: 255, g: 200, b: 100 },
  neptune: { r: 80, g: 200, b: 255 },
};

const RIM_STRENGTH: Record<PlanetKind, number> = {
  earth: 0.55,
  mars: 0.42,
  jupiter: 0.38,
  neptune: 0.52,
};

function drawPlanet(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  planet: PlanetData,
  rotation: number,
  floatY: number,
  glow: number,
  scale = 1,
): void {
  const cx = w / 2;
  const cy = h / 2 + floatY;
  const r = Math.min(w, h) * 0.39 * scale;
  const rim = RIM_COLORS[planet.planetKind];
  const rimStr = RIM_STRENGTH[planet.planetKind] + glow * 0.2;
  const sample = SAMPLERS[planet.planetKind];
  const tilt = planet.planetKind === "earth" ? 0.32 : 0.18;

  const og = ctx.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 3 * (1 + glow * 0.3));
  og.addColorStop(0, `rgba(${rim.r},${rim.g},${rim.b},${0.12 + glow * 0.18})`);
  og.addColorStop(0.6, `rgba(${rim.r},${rim.g},${rim.b},${0.06})`);
  og.addColorStop(1, "transparent");
  ctx.fillStyle = og;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 3, 0, Math.PI * 2);
  ctx.fill();

  const size = Math.ceil(r * 2);
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;
  const step = scale >= 0.85 ? 1 : 2;

  for (let j = 0; j < size; j += step) {
    for (let i = 0; i < size; i += step) {
      const dx = (i - r) / r;
      const dy = (j - r) / r;
      if (dx * dx + dy * dy > 1) continue;
      const nz = Math.sqrt(1 - dx * dx - dy * dy);
      const lat0 = Math.asin(clamp(dy, -1, 1));
      const lon = fmod(Math.atan2(dx, nz) + rotation, Math.PI * 2);
      const lat = lat0 * Math.cos(tilt);
      const raw = sample(lon, lat);
      const col = applyShading(raw, dx, dy, nz, rim, rimStr);
      for (let sj = 0; sj < step && j + sj < size; sj++) {
        for (let si = 0; si < step && i + si < size; si++) {
          const idx = ((j + sj) * size + (i + si)) * 4;
          data[idx] = col.r;
          data[idx + 1] = col.g;
          data[idx + 2] = col.b;
          data[idx + 3] = 255;
        }
      }
    }
  }

  ctx.putImageData(imageData, cx - r, cy - r);

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  ctx.globalCompositeOperation = "screen";
  const spec = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.32, 0, cx - r * 0.3, cy - r * 0.32, r * 0.5);
  spec.addColorStop(0, `rgba(255,255,255,${0.22 + glow * 0.14})`);
  spec.addColorStop(1, "transparent");
  ctx.fillStyle = spec;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  ctx.restore();
}

/* ═══════════════════════════════════════════════════════════
   CANVAS COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function StarfieldCanvas({ dim = false }: { dim?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const init = (w: number, h: number) => {
      starsRef.current = Array.from({ length: 380 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        size: 0.2 + Math.random() * 2.4,
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.06,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = box.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!starsRef.current.length) init(width, height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      tRef.current += dt;
      const { width, height } = box.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(width / 2, height * 0.28, 0, width / 2, height / 2, Math.max(width, height));
      bg.addColorStop(0, "#0c1230");
      bg.addColorStop(0.55, "#050810");
      bg.addColorStop(1, "#000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      for (const s of starsRef.current) {
        s.y += s.speed * dt * 18 * (0.3 + s.z);
        if (s.y > height) {
          s.y = 0;
          s.x = Math.random() * width;
        }
        const tw = 0.3 + Math.sin(tRef.current * 1.8 + s.twinkle) * 0.45;
        ctx.fillStyle = `rgba(210,230,255,${tw * (0.2 + s.z * 0.8)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (0.25 + s.z * 0.75), 0, Math.PI * 2);
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
    <div ref={boxRef} className="absolute inset-0" style={{ opacity: dim ? 0.4 : 1 }}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}

function PlanetCanvas({
  planet,
  glowBoost = 0,
  large = false,
}: {
  planet: PlanetData;
  glowBoost?: number;
  large?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef(Math.random() * Math.PI * 2);
  const frameRef = useRef(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = box.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      tRef.current += dt;
      rotRef.current += dt * (0.4 + glowBoost * 0.85);
      const fy = Math.sin(tRef.current * 0.92 + planet.id.length) * (large ? 14 : 7);
      const { width, height } = box.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      drawPlanet(ctx, width, height, planet, rotRef.current, fy, glowBoost, large ? 1.15 : 1);
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, [planet, glowBoost, large]);

  return (
    <div ref={boxRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   LOBBY — 4 пlaneta катар
   ═══════════════════════════════════════════════════════════ */

function PlanetLobby({ onSelect }: { onSelect: (id: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#030508]">
      <StarfieldCanvas />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 55%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <header className="relative z-30 flex shrink-0 items-center justify-between px-6 py-5 sm:px-12">
        <span className="text-lg lowercase tracking-widest text-white/85 sm:text-xl">spaceedu</span>
        <span className="hidden text-xs uppercase tracking-[0.4em] text-white/30 sm:block">BilimHub · География</span>
        <Link
          to="/#sabaktar"
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
        >
          Сабактарга
        </Link>
      </header>

      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center sm:mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/35">Космостук география</p>
          <h1 className="mt-2 font-serif text-3xl text-white sm:text-4xl md:text-5xl">Планеталарды тандаңыз</h1>
          <p className="mt-2 text-sm text-white/45">Планетаны чыкылдатып, сабактарды жана тесттерди ачыңыз</p>
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
          {PLANETS.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              onClick={() => onSelect(p.id)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="group flex flex-col items-center transition-transform duration-500 hover:scale-105"
            >
              <span
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] transition-all duration-300 sm:text-xs"
                style={{
                  color: hovered === p.id ? p.planetGlow : `${p.planetGlow}99`,
                  textShadow: hovered === p.id ? `0 0 20px ${p.planetGlow}, 0 0 40px ${p.planetGlow}66` : `0 0 8px ${p.planetGlow}44`,
                }}
              >
                {p.badgeLabel}
              </span>

              <div
                className="geo-lobby-planet-float relative aspect-square w-full max-w-[160px] sm:max-w-[200px]"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div
                  className="absolute inset-0 rounded-full transition-all duration-500"
                  style={{
                    boxShadow:
                      hovered === p.id
                        ? `0 0 60px ${p.planetGlow}88, 0 0 120px ${p.planetGlow}33`
                        : `0 0 30px ${p.planetGlow}44`,
                  }}
                />
                <PlanetCanvas planet={p} glowBoost={hovered === p.id ? 0.35 : 0.08} />
              </div>

              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">{p.planetName}</p>
              <p className="mt-1 hidden max-w-[180px] text-center text-[11px] leading-snug text-white/35 sm:block">
                {p.lobbySubtitle}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DETAIL — 50/50 split
   ═══════════════════════════════════════════════════════════ */

function QuizPanel({
  quizzes,
  solvedIds,
  onCorrect,
  accent,
}: {
  quizzes: QuizItem[];
  solvedIds: Set<string>;
  onCorrect: (pts: number, id: string) => void;
  accent: string;
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
      window.setTimeout(() => {
        onCorrect(quiz.points, quiz.id);
        setBurst(false);
        setFeedback(null);
        setSelected(null);
      }, 1200);
    } else {
      setFeedback("wrong");
      window.setTimeout(() => {
        setFeedback(null);
        setSelected(null);
      }, 1200);
    }
  };

  return (
    <div className="relative mt-8">
      <AnimatePresence>
        {burst && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 1.3, y: -40 }}
            className="pointer-events-none absolute -top-2 right-2 z-30 flex items-center gap-2 rounded-2xl border border-alpine-400/70 bg-alpine-500/25 px-5 py-3 text-base font-bold text-alpine-200 shadow-[0_0_40px_rgba(74,222,128,0.5)]"
          >
            <Sparkles className="h-5 w-5 animate-pulse" />
            Упай +25
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5" style={{ color: accent }} />
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Интерактивдүү тесттер</h3>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {quizzes.map((q, i) => (
          <button
            key={q.id}
            type="button"
            onClick={() => {
              setActiveIdx(i);
              setSelected(null);
              setFeedback(null);
            }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
              i === activeIdx
                ? "border-cyan-400 bg-cyan-950/60 text-cyan-300"
                : "border-slate-700/80 bg-slate-900/50 text-slate-400 hover:border-cyan-500/40"
            }`}
          >
            {solvedIds.has(q.id) ? "✓ " : ""}
            {i + 1}. {q.title}
          </button>
        ))}
      </div>

      {quiz && (
        <div className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-5 backdrop-blur-sm">
          <p className="text-base font-medium leading-relaxed text-white">{quiz.question}</p>
          <div className="mt-4 space-y-2.5">
            {quiz.options.map((opt, idx) => {
              const isCorrect = idx === quiz.correctIndex;
              const done = solvedIds.has(quiz.id);
              let cls =
                "w-full rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 ";
              if ((done || feedback === "correct") && isCorrect)
                cls += "border-alpine-400 bg-alpine-500/25 text-alpine-200 shadow-[0_0_16px_rgba(74,222,128,0.2)]";
              else if (feedback === "wrong" && selected === idx) cls += "border-red-400 bg-red-500/20 text-red-300 animate-pulse";
              else cls += "border-slate-600/60 bg-slate-800/50 text-slate-200 hover:border-cyan-400/50 hover:bg-slate-800/80";
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
            <p className="mt-4 text-center text-sm text-red-400">Ката! Кайра аракет кылыңыз</p>
          )}
          {solvedIds.has(quiz.id) && feedback !== "correct" && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-alpine-400">
              <CheckCircle2 className="h-4 w-4" /> Бул сурoo бүткөн
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function PlanetDetailView({
  planet,
  points,
  spinBoost,
  solvedIds,
  onBack,
  onQuizCorrect,
}: {
  planet: PlanetData;
  points: number;
  spinBoost: number;
  solvedIds: Set<string>;
  onBack: () => void;
  onQuizCorrect: (pts: number, id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[100dvh] overflow-hidden"
    >
      <StarfieldCanvas dim />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex shrink-0 items-center justify-between px-4 py-4 sm:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Ааламга кайтуу
          </button>
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
            <Trophy className="h-4 w-4 text-alpine-400" />
            {points} упай
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <div className="geo-detail-scroll flex w-full flex-col overflow-y-auto border-b border-white/5 px-5 py-4 sm:px-8 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-10 lg:py-6">
            <h1
              className="text-xl font-bold uppercase leading-tight tracking-wider sm:text-2xl md:text-3xl"
              style={{
                color: planet.planetGlow,
                textShadow: `0 0 30px ${planet.planetGlow}99, 0 0 60px ${planet.planetGlow}44`,
              }}
            >
              {planet.neonTitle}
            </h1>
            <p
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{ borderColor: `${planet.planetGlow}55`, color: planet.planetGlow }}
            >
              {planet.badgeLabel}
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-2 text-cyan-400/90">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wider">Сабактар</h2>
              </div>

              {planet.lessons.map((lesson, i) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-base font-bold text-white">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{lesson.body}</p>
                  {lesson.facts && (
                    <ul className="mt-3 space-y-1.5">
                      {lesson.facts.map((fact) => (
                        <li key={fact.slice(0, 20)} className="flex gap-2 text-xs leading-relaxed text-slate-400">
                          <Map className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500/70" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <QuizPanel quizzes={planet.quizzes} solvedIds={solvedIds} onCorrect={onQuizCorrect} accent={planet.planetGlow} />
          </div>

          <div className="relative flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="geo-detail-planet-float h-full w-full max-w-xl"
            >
              <div className="geo-detail-planet-3d h-full min-h-[280px] w-full lg:min-h-[480px]">
                <PlanetCanvas planet={planet} glowBoost={0.2 + spinBoost * 0.6} large />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT
   ═══════════════════════════════════════════════════════════ */

export default function GeographyDetail() {
  const [viewMode, setViewMode] = useState<ViewMode>("lobby");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [points, setPoints] = useState(0);
  const [spinBoost, setSpinBoost] = useState(0);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

  const selectedPlanet = PLANETS.find((p) => p.id === selectedId) ?? null;

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setViewMode("detail");
  }, []);

  const handleBack = useCallback(() => {
    setViewMode("lobby");
    setSelectedId(null);
  }, []);

  const handleQuizCorrect = useCallback((pts: number, quizId: string) => {
    setPoints((p) => p + pts);
    setSolvedIds((prev) => new Set(prev).add(quizId));
    setSpinBoost(1);
    window.setTimeout(() => setSpinBoost(0), 1400);
  }, []);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        {viewMode === "lobby" && (
          <motion.div key="lobby" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
            <PlanetLobby onSelect={handleSelect} />
          </motion.div>
        )}

        {viewMode === "detail" && selectedPlanet && (
          <PlanetDetailView
            key={selectedPlanet.id}
            planet={selectedPlanet}
            points={points}
            spinBoost={spinBoost}
            solvedIds={solvedIds}
            onBack={handleBack}
            onQuizCorrect={handleQuizCorrect}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
