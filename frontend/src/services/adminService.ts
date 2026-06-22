import { getApiErrorMessage } from "../api/axiosInstance";
import axiosInstance from "../api/axiosInstance";
import type {
  AdminAnalytics,
  AdminQuiz,
  AdminSubject,
  AdminTopic,
  QuizFormData,
  SubjectFormData,
  SubjectSummary,
  TopicFormData,
} from "../types/admin";

export async function fetchSubjects(): Promise<SubjectSummary[]> {
  const { data } = await axiosInstance.get<SubjectSummary[]>(
    "educational/subjects/",
  );
  return data;
}

export async function fetchAdminAnalytics(): Promise<AdminAnalytics> {
  const { data } = await axiosInstance.get<AdminAnalytics>(
    "educational/admin/analytics/",
  );
  return data;
}

export async function fetchAdminSubjects(): Promise<AdminSubject[]> {
  const { data } = await axiosInstance.get<AdminSubject[]>(
    "educational/admin/subjects/",
  );
  return data;
}

export async function createSubject(
  payload: SubjectFormData,
): Promise<AdminSubject> {
  const { data } = await axiosInstance.post<{ subject: AdminSubject }>(
    "educational/admin/subjects/",
    payload,
  );
  return data.subject ?? (data as unknown as AdminSubject);
}

export async function deleteSubject(id: number): Promise<void> {
  await axiosInstance.delete(`educational/admin/subjects/${id}/`);
}

export async function fetchAdminTopics(): Promise<AdminTopic[]> {
  const { data } = await axiosInstance.get<AdminTopic[]>(
    "educational/admin/topics/",
  );
  return data;
}

export async function createTopic(payload: TopicFormData): Promise<AdminTopic> {
  const { data } = await axiosInstance.post<{ topic: AdminTopic }>(
    "educational/admin/topics/",
    payload,
  );
  return data.topic ?? (data as unknown as AdminTopic);
}

export async function deleteTopic(id: number): Promise<void> {
  await axiosInstance.delete(`educational/admin/topics/${id}/`);
}

export async function createQuiz(payload: QuizFormData): Promise<AdminQuiz> {
  const body = {
    topic: payload.topic,
    question_text: payload.question_text,
    options: [
      { key: "a", text: payload.option_a },
      { key: "b", text: payload.option_b },
      { key: "c", text: payload.option_c },
      { key: "d", text: payload.option_d },
    ],
    correct_answer: payload.correct_answer,
    points: payload.points,
    sort_order: payload.sort_order,
    is_active: payload.is_active,
  };
  const { data } = await axiosInstance.post<{ quiz: AdminQuiz }>(
    "educational/admin/quizzes/",
    body,
  );
  return data.quiz ?? (data as unknown as AdminQuiz);
}

export async function deleteQuiz(id: number): Promise<void> {
  await axiosInstance.delete(`educational/admin/quizzes/${id}/`);
}

export function getAdminErrorMessage(error: unknown, fallback: string): string {
  return getApiErrorMessage(error, fallback);
}
