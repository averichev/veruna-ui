import importMeta from "../utils/importMeta.ts";
import axios, { AxiosInstance } from "axios";

export default class Default {
  private client: AxiosInstance;
  private headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  get(path: string) {
    return this.client.get(path);
  }
  post(path: string, data: any) {
    return this.client.post(path, data);
  }
  constructor() {
    this.client = this.createAxiosInstance(importMeta.VITE_APP_BASE_URL);
  }

  private createAxiosInstance(baseUrl: string) {
    const token = localStorage.getItem("app.token");
    if (token) {
      this.headers.Authorization = `Bearer ${token}`;
    }
    return axios.create({
      baseURL: baseUrl,
      headers: this.headers,
      withCredentials: true,
    });
  }
}
