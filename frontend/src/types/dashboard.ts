export interface DashboardUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  points: number;
  role: string;
}

export interface DashboardStats {
  total_points: number;
  completed_topics: number;
  started_topics: number;
  total_score: number;
  chat_messages: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface SubjectProgressItem {
  slug: string;
  name_kg: string;
  icon_name: string;
  completed_topics: number;
  total_topics: number;
  progress_percent: number;
}

export interface WeeklyActivityItem {
  date: string;
  day_label: string;
  topics_studied: number;
  chat_messages: number;
}

export interface DashboardData {
  user: DashboardUser;
  stats: DashboardStats;
  achievements: Achievement[];
  subject_progress: SubjectProgressItem[];
  weekly_activity: WeeklyActivityItem[];
}
