export interface QuizOption {
  key: string;
  text: string;
}

export interface Quiz {
  id: number;
  question_text: string;
  options: QuizOption[];
  points: number;
  sort_order: number;
  correct_answer?: string;
}

export interface TopicSummary {
  id: number;
  title: string;
  section_title: string;
  sort_order: number;
  progress_percent: number;
  is_completed: boolean;
  quiz_count: number;
}

export interface SubjectSection {
  title: string;
  topics: TopicSummary[];
  progress_percent: number;
}

export interface SubjectDetail {
  id: number;
  name_kg: string;
  name_ru: string;
  slug: string;
  icon_name: string;
  topics: TopicSummary[];
  sections: SubjectSection[];
  overall_progress: number;
}

export interface TopicDetail {
  id: number;
  title: string;
  content_text: string;
  video_url: string;
  pdf_url: string | null;
  section_title: string;
  subject_slug: string;
  subject_name: string;
  progress_percent: number;
  is_completed: boolean;
  quizzes: Quiz[];
}

export interface SubmitProgressPayload {
  topic_id: number;
  score: number;
  is_completed: boolean;
  correct_count?: number;
  total_questions?: number;
}

export interface SubmitProgressResponse {
  detail: string;
  progress: {
    topic_id: number;
    score: number;
    is_completed: boolean;
    updated_at: string;
  };
}

export interface QuizAnswerRecord {
  quizId: number;
  selectedKey: string;
  isCorrect: boolean;
  points: number;
}

export interface QuizResult {
  correctCount: number;
  totalQuestions: number;
  totalScore: number;
  answers: QuizAnswerRecord[];
}

export interface MathFormula {
  id: string;
  name: string;
  category: string;
  latex: string;
  description: string;
  expression: string;
}
