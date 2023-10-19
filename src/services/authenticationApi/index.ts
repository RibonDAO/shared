import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { REFRESH_TOKEN_KEY, RIBON_API, TOKEN_KEY } from "utils/constants";
import { getCookiesItem, setCookiesItem } from "lib/cookies";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import userAuthenticationApi from "./userAuthenticationApi";

export const baseURL = RIBON_API;
export const API_SCOPE = "/users/v1";

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
    const authHeaders = {
      Authorization: `Bearer ${getCookiesItem(TOKEN_KEY)}`,
    };
    // eslint-disable-next-line
    config.headers = { ...headers, ...authHeaders, ...config.headers };

    return config;
  });
}

async function requestNewToken() {
  try {
    const refreshToken = getCookiesItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) return null;

    const res = await userAuthenticationApi.postRefreshToken(refreshToken);
    const newToken = res.headers["access-token"];
    const newRefreshToken = res.headers["refresh-token"];

    setCookiesItem(TOKEN_KEY, newToken);
    setCookiesItem(REFRESH_TOKEN_KEY, newRefreshToken);

    return newToken;
  } catch (err) {
    return null;
  }
}

api.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  }),
  async (error) => {
    const originalRequest = error.config;
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 403 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      const newToken = await requestNewToken();
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
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
