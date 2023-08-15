import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import importMeta from "../utils/importMeta.ts";

export default class Default {
  private client: AxiosInstance;
  private readonly config: AxiosRequestConfig;
  private headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  get(path: string) {
    this.changeConfig();
    return this.client.get(path);
  }
  post(path: string, data?: any) {
    this.changeConfig();
    return this.client.post(path, data);
  }
  delete(path: string, data?: any) {
    this.changeConfig();
    return this.client.delete(path, data);
  }
  constructor() {
    this.config = {
      baseURL: importMeta.VITE_APP_BASE_URL,
      headers: this.headers,
      withCredentials: true,
    };
    this.client = this.createAxiosInstance();
  }
  private changeConfig() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `${token}`;
    }
  }

  private createAxiosInstance() {
    return axios.create(this.config);
  }
}
