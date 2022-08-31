import axios from "axios";
import { API_URL, REQUEST_TIMEOUT } from "assets/const";
import { getToken } from "./token";

export const createAPI = () => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers["x-token"] = token;
    }

    return config;
  });

  return api;
};
