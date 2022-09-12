import request from "axios";
import { store } from "../store/index";
import { setStatus } from "store/app-data/app-data";
import { HTTP_CODES } from "../assets/const";

export const errorHandle = (error) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const { data, status } = error?.response;

  switch (status) {
    case HTTP_CODES.BAD_REQUEST:
      store.dispatch(setStatus("Проверьте правильность заполненных полей"));
      break;
    case HTTP_CODES.UNAUTHORIZED:
      store.dispatch(setStatus(data.title));
      break;
    case HTTP_CODES.NOT_FOUND:
      store.dispatch(setStatus(data.title));
      break;
    case HTTP_CODES.SERVER_ERROR:
      store.dispatch(setStatus(data.title));
      break;
    default:
  }
};
