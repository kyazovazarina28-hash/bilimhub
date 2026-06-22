export type QuestType = "test" | "map" | "puzzle";

export interface QuestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface GeoQuest {
  id: string;
  order: number;
  title: string;
  type: QuestType;
  typeLabel: string;
  points: number;
  question: QuestQuestion;
}

export interface PlanetVisual {
  planetColor: string;
  planetGlow: string;
  planetSecondary: string;
  ringColor: string;
  bandColors: string[];
}

export interface CatalogPlanet extends PlanetVisual {
  id: string;
  badgeLabel: string;
  planetName: string;
  subtitle: string;
}

export interface GameTheme extends PlanetVisual {
  id: string;
  badgeLabel: string;
  planetName: string;
  heroTitle: string;
  description: string;
  quests: GeoQuest[];
}

export const CATALOG_PLANETS: CatalogPlanet[] = [
  {
    id: "tasks",
    badgeLabel: "Тапшырмалар",
    planetName: "Earth",
    subtitle: "Географиялык тапшырмалар",
    planetColor: "#3b82f6",
    planetGlow: "#4ade80",
    planetSecondary: "#166534",
    ringColor: "#22d3ee",
    bandColors: ["#2563eb", "#4ade80", "#1d4ed8", "#22c55e"],
  },
  {
    id: "questions",
    badgeLabel: "Суроолор",
    planetName: "Mars",
    subtitle: "Интерактивдүү суроолор",
    planetColor: "#ef4444",
    planetGlow: "#f97316",
    planetSecondary: "#991b1b",
    ringColor: "#fb923c",
    bandColors: ["#dc2626", "#f97316", "#b91c1c", "#fdba74"],
  },
  {
    id: "puzzles",
    badgeLabel: "Пазлдар",
    planetName: "Jupiter",
    subtitle: "Географиялык пазлдар",
    planetColor: "#d97706",
    planetGlow: "#22d3ee",
    planetSecondary: "#92400e",
    ringColor: "#67e8f9",
    bandColors: ["#b45309", "#fcd34d", "#0891b2", "#fbbf24", "#0284c7"],
  },
  {
    id: "tests",
    badgeLabel: "Тесттер",
    planetName: "Neptune",
    subtitle: "Билим текшерүү тесттери",
    planetColor: "#2563eb",
    planetGlow: "#86efac",
    planetSecondary: "#1e3a8a",
    ringColor: "#4ade80",
    bandColors: ["#1d4ed8", "#22c55e", "#312e81", "#4ade80"],
  },
];

export const GAME_THEMES: Record<string, GameTheme> = {
  tasks: {
    id: "tasks",
    badgeLabel: "Тапшырмалар",
    planetName: "Earth",
    heroTitle: "THE BLUE PLANET: TASKS",
    description:
      "Кыргызстандын рельефи, климаты жана табигый ресурстары боюнча практикалык тапшырмалар. Ар бир тапшырма сизге +25 упай берет.",
    planetColor: "#3b82f6",
    planetGlow: "#4ade80",
    planetSecondary: "#166534",
    ringColor: "#22d3ee",
    bandColors: ["#2563eb", "#4ade80", "#1d4ed8", "#22c55e"],
    quests: [
      {
        id: "tasks-q1",
        order: 1,
        title: "Рельеф тапшырмасы",
        type: "test",
        typeLabel: "Тест",
        points: 25,
        question: {
          question: "Кыргызстандын эң бийик чокусу кайсы?",
          options: ["Ленин чокусу", "Жеңиш чокусу", "Хан-Теңири", "Победа чокусу"],
          correctIndex: 1,
        },
      },
      {
        id: "tasks-q2",
        order: 2,
        title: "Карта тапшырмасы",
        type: "map",
        typeLabel: "Карта",
        points: 25,
        question: {
          question: "Ысык-Көл кайсы рельеф зонасында жайгашкан?",
          options: ["Тоо ороосунда", "Шаардык тегиздикте", "Чөл аймагында", "Кanyon"],
          correctIndex: 0,
        },
      },
      {
        id: "tasks-q3",
        order: 3,
        title: "Практикалык тапшырма",
        type: "puzzle",
        typeLabel: "Пазл",
        points: 25,
        question: {
          question: "Тоолордун эрозиясы натыйжasında кандай форма пайда болот?",
          options: ["Долина", "Шаар", "Плато", "Кanyon"],
          correctIndex: 0,
        },
      },
    ],
  },
  questions: {
    id: "questions",
    badgeLabel: "Суроолор",
    planetName: "Mars",
    heroTitle: "THE RED PLANET: QUESTIONS",
    description:
      "Климат, рельеф жана экология боюнча интерактивдүү суроолор. Туура жооп берсеңиз, планета жаркырап упай берет.",
    planetColor: "#ef4444",
    planetGlow: "#f97316",
    planetSecondary: "#991b1b",
    ringColor: "#fb923c",
    bandColors: ["#dc2626", "#f97316", "#b91c1c", "#fdba74"],
    quests: [
      {
        id: "questions-q1",
        order: 1,
        title: "Климат суроосу",
        type: "test",
        typeLabel: "Тест",
        points: 25,
        question: {
          question: "Бишкектин климат типи:",
          options: ["Тропикалдуу", "Континенталдуу", "Муссондуу", "Эквatorиalдуу"],
          correctIndex: 1,
        },
      },
      {
        id: "questions-q2",
        order: 2,
        title: "География суроосу",
        type: "map",
        typeLabel: "Карта",
        points: 25,
        question: {
          question: "Нарын облусунда кышы кандай?",
          options: ["Жумшак", "Суук жана узак", "Жылуу", "Кургak"],
          correctIndex: 1,
        },
      },
      {
        id: "questions-q3",
        order: 3,
        title: "Экология суроосу",
        type: "puzzle",
        typeLabel: "Пазл",
        points: 25,
        question: {
          question: "Кыргызстанда жamdaktin негизги мамилесi:",
          options: ["Жamdak жok", "Жamdak бар", "Жamdak az", "Жamdak көп"],
          correctIndex: 3,
        },
      },
    ],
  },
  puzzles: {
    id: "puzzles",
    badgeLabel: "Пазлдар",
    planetName: "Jupiter",
    heroTitle: "THE GAS GIANT: PUZZLES",
    description:
      "Суу ресурстары, дaryaлар жана көлдөр боюнча пазл тапшырмалары. Логикалык ойлоо менен чечиңиз!",
    planetColor: "#d97706",
    planetGlow: "#22d3ee",
    planetSecondary: "#92400e",
    ringColor: "#67e8f9",
    bandColors: ["#b45309", "#fcd34d", "#0891b2", "#fbbf24", "#0284c7"],
    quests: [
      {
        id: "puzzles-q1",
        order: 1,
        title: "Суу пazлы",
        type: "test",
        typeLabel: "Тест",
        points: 25,
        question: {
          question: "Кыргызстандын эң чoн көлү:",
          options: ["Сон-Көл", "Ысык-Көл", "Чатыр-Көл", "Merzbacher"],
          correctIndex: 1,
        },
      },
      {
        id: "puzzles-q2",
        order: 2,
        title: "Дarya пazлы",
        type: "map",
        typeLabel: "Карта",
        points: 25,
        question: {
          question: "Сырдаря дaryasının негизgi кoshumcha suu kaynagy:",
          options: ["Нарын", "Волга", "Дунай", "Ganges"],
          correctIndex: 0,
        },
      },
      {
        id: "puzzles-q3",
        order: 3,
        title: "Гидро пazл",
        type: "puzzle",
        typeLabel: "Пазл",
        points: 25,
        question: {
          question: "Ысык-Көл — suu tipi:",
          options: ["Tuzдуu", "Tuzsuz", "Кислоталuu", "Негиз"],
          correctIndex: 1,
        },
      },
    ],
  },
  tests: {
    id: "tests",
    badgeLabel: "Тесттер",
    planetName: "Neptune",
    heroTitle: "THE ICE GIANT: TESTS",
    description:
      "Экология, корулgan tabigat жана жаныбарlar боюнча тесттер. Билимиңизди текшериңиз!",
    planetColor: "#2563eb",
    planetGlow: "#86efac",
    planetSecondary: "#1e3a8a",
    ringColor: "#4ade80",
    bandColors: ["#1d4ed8", "#22c55e", "#312e81", "#4ade80"],
    quests: [
      {
        id: "tests-q1",
        order: 1,
        title: "Эко тест",
        type: "test",
        typeLabel: "Тест",
        points: 25,
        question: {
          question: "Кызыл Китепке кирген жаныбар:",
          options: ["Ak барs", "Кош", "Мышык", "Ит"],
          correctIndex: 0,
        },
      },
      {
        id: "tests-q2",
        order: 2,
        title: "Кorulgan айmak тести",
        type: "map",
        typeLabel: "Карта",
        points: 25,
        question: {
          question: "Sary-Chelek заповедниги кайсы облуста:",
          options: ["Batken", "Jalal-Abad", "Osh", "Talas"],
          correctIndex: 1,
        },
      },
      {
        id: "tests-q3",
        order: 3,
        title: "Экология тести",
        type: "puzzle",
        typeLabel: "Пазл",
        points: 25,
        question: {
          question: "Kайra kulluu принциbi:",
          options: ["Reduce-Reuse-Recycle", "Buy-Buy-Buy", "Burn-Burn", "Hide-Hide"],
          correctIndex: 0,
        },
      },
    ],
  },
};

export function getGameTheme(planetId: string | undefined): GameTheme | null {
  if (!planetId) return null;
  return GAME_THEMES[planetId] ?? null;
}
