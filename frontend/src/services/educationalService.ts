import axiosInstance from "../api/axiosInstance";
import type {
  SubjectDetail,
  SubmitProgressPayload,
  SubmitProgressResponse,
  TopicDetail,
} from "../types/educational";

export async function fetchSubjectDetail(
  slug: string,
): Promise<SubjectDetail> {
  const { data } = await axiosInstance.get<SubjectDetail>(
    `educational/subjects/${slug}/`,
  );
  return data;
}

export async function fetchTopicDetail(topicId: number): Promise<TopicDetail> {
  const { data } = await axiosInstance.get<TopicDetail>(
    `educational/topics/${topicId}/`,
  );
  return data;
}

export async function submitProgress(
  payload: SubmitProgressPayload,
): Promise<SubmitProgressResponse> {
  const { data } = await axiosInstance.post<SubmitProgressResponse>(
    "educational/submit-progress/",
    payload,
  );
  return data;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  return url.includes("embed") ? url : null;
}
