import axiosInstance from "../api/axiosInstance";
import type {
  ChatHistoryResponse,
  ChatRequest,
  ChatResponse,
} from "../types/aiTutor";

export async function sendChatMessage(
  payload: ChatRequest,
): Promise<ChatResponse> {
  const { data } = await axiosInstance.post<ChatResponse>("ai-tutor/chat/", payload);
  return data;
}

export async function fetchChatHistory(): Promise<ChatHistoryResponse> {
  const { data } = await axiosInstance.get<ChatHistoryResponse>("ai-tutor/history/");
  return data;
}

export async function clearChatHistory(): Promise<void> {
  await axiosInstance.delete("ai-tutor/history/");
}
