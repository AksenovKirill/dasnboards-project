import request from "axios";
import { store } from "../store/index";
import { setError } from "store/app-data/app-data";
import { HTTP_CODES } from "../assets/const";

export const errorHandle = (error) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const { data, status } = error?.response;

  switch (status) {
    case HTTP_CODES.BAD_REQUEST:
      store.dispatch(setError("Проверьте правильность заполненных полей"));
      break;
    case HTTP_CODES.UNAUTHORIZED:
      store.dispatch(setError(data.title));
      break;
    case HTTP_CODES.NOT_FOUND:
      store.dispatch(setError(data.title));
      break;
    case HTTP_CODES.SERVER_ERROR:
      store.dispatch(setError(data.title));
      break;
    default:
  }
};
