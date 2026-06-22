export interface AdminAnalytics {
  users: {
    total: number;
    students: number;
    teachers: number;
    admins: number;
    by_role: { role: string; count: number }[];
  };
  content: {
    subjects: number;
    topics: number;
    quizzes: number;
  };
  engagement: {
    progress_records: number;
    completed_topics: number;
    total_points_awarded: number;
    chat_messages: number;
  };
  charts: {
    weekly_activity: WeeklyActivityPoint[];
    users_by_role: RoleChartPoint[];
  };
  recent_topics: AdminTopic[];
}

export interface WeeklyActivityPoint {
  date: string;
  day_label: string;
  new_users: number;
  new_topics: number;
  progress_updates: number;
}

export interface RoleChartPoint {
  role: string;
  count: number;
}

export interface SubjectSummary {
  id: number;
  name_kg: string;
  name_ru: string;
  slug: string;
  icon_name: string;
  sort_order: number;
}

export interface AdminSubject {
  id: number;
  name_kg: string;
  name_ru: string;
  slug: string;
  icon_name: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface AdminTopic {
  id: number;
  subject: number;
  subject_name: string;
  title: string;
  content_text: string;
  video_url: string;
  section_title: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
}

export interface AdminQuiz {
  id: number;
  topic: number;
  topic_title: string;
  question_text: string;
  options: { key: string; text: string }[];
  correct_answer: string;
  points: number;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface SubjectFormData {
  name_kg: string;
  name_ru: string;
  slug: string;
  icon_name: string;
  sort_order: number;
  is_active: boolean;
}

export interface TopicFormData {
  subject: number;
  title: string;
  content_text: string;
  video_url: string;
  section_title: string;
  sort_order: number;
  is_published: boolean;
}

export interface QuizFormData {
  topic: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  points: number;
  sort_order: number;
  is_active: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface TopicFormState {
  subject: number;
  title: string;
  content_text: string;
  video_url: string;
  section_title: string;
  sort_order: number;
  is_published: boolean;
}

export interface QuizFormState {
  topic: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  points: number;
  sort_order: number;
  is_active: boolean;
}
