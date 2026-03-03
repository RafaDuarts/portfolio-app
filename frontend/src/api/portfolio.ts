import { api } from "./api";
import type { Portfolio } from "../types/portfolio";

export const getPortfolios = async (): Promise<Portfolio[]> => {
  const { data } = await api.get("/portfolio");
  return data;
};

export const getPortfolioById = async (id: string): Promise<Portfolio> => {
  const { data } = await api.get(`/portfolio/${id}`);
  return data;
};