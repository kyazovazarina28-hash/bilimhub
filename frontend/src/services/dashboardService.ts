import axiosInstance from "../api/axiosInstance";
import type { DashboardData } from "../types/dashboard";

export async function fetchDashboard(): Promise<DashboardData> {
  const { data } = await axiosInstance.get<DashboardData>("educational/dashboard/");
  return data;
}
