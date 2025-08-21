import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a668e1f6ef3454faeb9862357fb60ab",
  },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async (
    requestContext?: AxiosRequestConfig
  ): Promise<FetchResponse<T>> => {
    const res = await apiClient.get<FetchResponse<T>>(this.endpoint, {
      ...requestContext,
    });
    return res.data;
  };

  get = async (pathParam: string): Promise<T> => {
    const res = await apiClient.get<T>(`${this.endpoint}/${pathParam}`);
    return res.data;
  };
}
