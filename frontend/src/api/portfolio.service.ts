import { api } from "./api";
import type { Portfolio } from "../types/portfolio";

export const portfolioService = {
  async findAll(): Promise<Portfolio[]> {
    const { data } = await api.get("/portfolio");
    return data;
  },

  async findByName(name: string): Promise<Portfolio> {
    const { data } = await api.get(`/portfolio/${name}`);
    return data;
  },

  async create(formData: FormData): Promise<Portfolio> {
    const { data } = await api.post("/portfolio", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
};