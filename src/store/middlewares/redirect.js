import { createAction } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();
export const redirectToRoute = createAction("/redirect");

export const redirect = (_store) => (next) => (action) => {
  if (action.type === "/redirect") {
    browserHistory.push(action.payload);
  }

  return next(action);
};
