import axios from "axios";
import { API_URL, TOKEN_KEY_NAMES, REQUEST_TIMEOUT } from "assets/const";
import { getToken } from "./token";

export const createAPI = () => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      authorization: getToken(TOKEN_KEY_NAMES.access),
    },
  });

  // api.interceptors.request.use((config) => {
  //   const token = getToken(AUTH_TOKEN_KEY_NAMES.refresh);

  //   if (token) {
  //     config.headers["x-token"] = token;
  //   }

  //   return config;
  // });

  return api;
};
