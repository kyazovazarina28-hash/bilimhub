import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Landmark,
  Languages,
  Leaf,
  Library,
  Monitor,
  MessageSquare,
  Triangle,
} from "lucide-react";

export interface SubjectCard {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgLight: string;
  bgDark: string;
  topicsCount: number;
}

export const SUBJECTS: SubjectCard[] = [
  {
    id: 1,
    slug: "matematika",
    name: "Математика",
    description: "Теңдемелер, функциялар жана логикалык ойлоо",
    icon: Calculator,
    color: "text-kyrgyz-600 dark:text-kyrgyz-300",
    bgLight: "bg-kyrgyz-50",
    bgDark: "dark:bg-kyrgyz-800/60",
    topicsCount: 48,
  },
  {
    id: 2,
    slug: "geometriya",
    name: "Геометрия",
    description: "Фигуралар, бурчтар жана пространстволук ойлоо",
    icon: Triangle,
    color: "text-alpine-600 dark:text-alpine-400",
    bgLight: "bg-alpine-50",
    bgDark: "dark:bg-alpine-950/40",
    topicsCount: 36,
  },
  {
    id: 3,
    slug: "kyrgyz-tili",
    name: "Кыргыз тили",
    description: "Грамматика, орфография жана сөз байлыгы",
    icon: BookOpen,
    color: "text-sunset-500 dark:text-sunset-400",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    topicsCount: 42,
  },
  {
    id: 4,
    slug: "kyrgyz-adabiyaty",
    name: "Кыргыз адабияты",
    description: "Эпос, поэзия жана классикалык чыгармалар",
    icon: Library,
    color: "text-rose-600 dark:text-rose-400",
    bgLight: "bg-rose-50",
    bgDark: "dark:bg-rose-950/30",
    topicsCount: 30,
  },
  {
    id: 5,
    slug: "fizika",
    name: "Физика",
    description: "Механика, электр жана оптика",
    icon: Atom,
    color: "text-violet-600 dark:text-violet-400",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/30",
    topicsCount: 40,
  },
  {
    id: 6,
    slug: "himiya",
    name: "Химия",
    description: "Элементтер, реакциялар жана формулалар",
    icon: FlaskConical,
    color: "text-cyan-600 dark:text-cyan-400",
    bgLight: "bg-cyan-50",
    bgDark: "dark:bg-cyan-950/30",
    topicsCount: 35,
  },
  {
    id: 7,
    slug: "biologiya",
    name: "Биология",
    description: "Жандуу организмдер жана экология",
    icon: Leaf,
    color: "text-emerald-600 dark:text-emerald-400",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-950/30",
    topicsCount: 38,
  },
  {
    id: 8,
    slug: "geografiya",
    name: "География",
    description: "Кыргызстан жана дүйнө картасы",
    icon: Globe,
    color: "text-sky-600 dark:text-sky-400",
    bgLight: "bg-sky-50",
    bgDark: "dark:bg-sky-950/30",
    topicsCount: 32,
  },
  {
    id: 9,
    slug: "tarih",
    name: "Тарых",
    description: "Кыргызстан тарыхы жана дүйнөлүк окуялар",
    icon: Landmark,
    color: "text-amber-700 dark:text-amber-400",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    topicsCount: 28,
  },
  {
    id: 10,
    slug: "anglis-tili",
    name: "Англис тили",
    description: "Сөз байлыгы, грамматика жана сүйлөө",
    icon: Languages,
    color: "text-indigo-600 dark:text-indigo-400",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-950/30",
    topicsCount: 45,
  },
  {
    id: 11,
    slug: "informatika",
    name: "Информатика",
    description: "Программалоо, алгоритмдер жана санариптик сабаттуулук",
    icon: Monitor,
    color: "text-blue-600 dark:text-blue-400",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    topicsCount: 34,
  },
  {
    id: 12,
    slug: "orus-tili",
    name: "Орус тили",
    description: "Грамматика, окуу жана жазуу көндүмдөрү",
    icon: MessageSquare,
    color: "text-red-600 dark:text-red-400",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    topicsCount: 40,
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 12, suffix: "", label: "Окуу предметтери" },
  { value: 400, suffix: "+", label: "Интерактивдүү темалар" },
  { value: 5000, suffix: "+", label: "Тест суроолору" },
  { value: 98, suffix: "%", label: "Окуучулардын канааттануусу" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "BilimHub платформасы кимдер үчүн?",
    answer:
      "BilimHub — Кыргызстандагы 5–11-класс окуучулары үчүн арналган интерактивдүү билим берүү платформасы. Мугалимдер контент түзө алат, окуучулар темаларды үйрөнүп, тест тапшырат.",
  },
  {
    question: "Катталуу акысызбы?",
    answer:
      "Ооба, окуучулар үчүн катталуу толугу менен акысыз. Бардык негизги сабактар жана тесттер акысыз жеткиликтүү.",
  },
  {
    question: "Мобилдик телефондон колдонсо болобу?",
    answer:
      "Ооба, платформа mobile-first принциби боюнча иштелип чыккан. Смартфон, планшет же компьютерден ыңгайлуу колдоно аласыз.",
  },
  {
    question: "Прогресс кантип сакталат?",
    answer:
      "Ар бир теманы аяктаганда упайлар топтолот. Прогрессиңиз профилиңизде сакталат жана кайра киргенде улантыла турган жерден улантасыз.",
  },
  {
    question: "Мугалим катары кантип кошулсам болот?",
    answer:
      "Азыркы учурда мугалимдер администратор аркылуу катталат. Кошумча маалымат үчүн биз менен байланышыңыз.",
  },
];
