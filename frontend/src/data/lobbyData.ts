export interface BadgeItem {
  id: string;
  title: string;
  emoji: string;
  unlocked: boolean;
}

export interface DailyQuestion {
  q: string;
  a: string;
}

export interface DailyQuest {
  id: string;
  title: string;
  reward: number;
  done: boolean;
}

export const BADGES: BadgeItem[] = [
  { id: "cosmos", title: "Космос Саякатчысы", emoji: "🚀", unlocked: true },
  { id: "math", title: "Математика Устасы", emoji: "🧮", unlocked: true },
  { id: "physics", title: "Физика Изилдөөчүсү", emoji: "⚛️", unlocked: true },
  { id: "geo", title: "Гео-Сапарчы", emoji: "🌍", unlocked: false },
  { id: "genius", title: "Аалам Генийи", emoji: "⚡", unlocked: false },
];

export const dailyQuestions: DailyQuestion[] = [
  {
    q: "Математикадагы эң сырдуу сан кайсы?",
    a: "Пи (π ≈ 3.14) саны — ал чексиз жана кайталанбайт.",
  },
  {
    q: "Кара тешиктин борбору эмне деп аталат?",
    a: "Сингулярдуулук — бул жерде убакыт жана мейкиндик токтойт.",
  },
  {
    q: "Кыргызстандагы эң терең көл кайсы?",
    a: "Ысык-Көл — тереңдиги 668 метрге жетет, дүйнөдө 7-орунда.",
  },
  {
    q: "Лайфхак: 5ке аяктаган сандарды квадратка заматта көтөрүү",
    a: "Мисалы, 25 × 25: 2ни кийинки санга (3) көбөйтөбүз = 6, аягына 25ти коёбуз = 625!",
  },
];

export const dailyQuests: DailyQuest[] = [
  { id: "q1", title: "Математика тестинен 2 суроо чеч", reward: 30, done: true },
  { id: "q2", title: "География сабагын 5 мүнөт оку", reward: 25, done: false },
  { id: "q3", title: "Физика квестин аякта", reward: 40, done: false },
  { id: "q4", title: "3 предметтин суроосун жооп бер", reward: 50, done: false },
];

export function calcProgress(score: number): number {
  return Math.min(100, Math.round((score / 600) * 100));
}

export function getTitle(score: number): string {
  if (score < 200) return "КОСМОС САЯКАТЧЫСЫ 🚀";
  if (score < 400) return "ИЗИЛДӨӨЧҮ ИЛИМПОЗ 🧠";
  if (score < 550) return "ААЛАМ ИЗИЛДӨӨЧҮСҮ 🔭";
  return "ААЛАМ ГЕНИЙИ ⚡";
}
