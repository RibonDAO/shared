import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";

const RIBON_API =
  process.env.REACT_APP_RIBON_API ||
  "http://ribon-core-api-dev.us-east-1.elasticbeanstalk.com/";

export const baseURL = RIBON_API;
export const API_SCOPE = "/api/v1";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

api.interceptors.request.use((request) =>
  request?.data
    ? { ...request, data: snakeCaseKeys(request?.data, { deep: true }) }
    : request,
);

export type InitializeApiProps = {
  url: string;
  headers: Record<any, any>;
};
export function initializeApi({ url, headers }: InitializeApiProps) {
  api.interceptors.request.use((config) => {
    // eslint-disable-next-line
    config.baseURL = url;
    // eslint-disable-next-line
    config.headers = { ...headers, ...config.headers };
    return config;
  });
}

api.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  }),
  (error) => Promise.reject(error),
);

export function apiGet(url: string, config?: AxiosRequestConfig) {
  if (config) return api.get(`${API_SCOPE}/${url}`, config);

  return api.get(`${API_SCOPE}/${url}`);
}

export function apiGetWithParams(
  url: string,
  params: any,
  config?: AxiosRequestConfig,
) {
  if (config)
    return api.get(`${API_SCOPE}/${url}`, {
      ...config,
      params,
    });

  return api.get(`${API_SCOPE}/${url}`, {
    params,
  });
}

export function apiPost(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.post(`${API_SCOPE}/${url}`, data, config);

  return api.post(`${API_SCOPE}/${url}`, data);
}

export function apiPut(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.put(`${API_SCOPE}/${url}`, data, config);

  return api.put(`${API_SCOPE}/${url}`, data);
}

export function apiDelete(url: string, config?: AxiosRequestConfig) {
  if (config) return api.delete(`${API_SCOPE}/${url}`, config);

  return api.delete(`${API_SCOPE}/${url}`);
}

export function emptyRequest(): Promise<AxiosResponse<any, any>> {
  return {} as Promise<AxiosResponse>;
}

export default api;
