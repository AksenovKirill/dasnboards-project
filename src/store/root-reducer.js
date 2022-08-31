import { combineReducers } from "@reduxjs/toolkit";
import { userProcess } from "./user-process/user-process";
import { appData } from "./app-data/app-data";
import { appProcess } from "./app-process/app-process";

export const rootReducer = combineReducers({
  user: userProcess.reducer,
  data: appData.reducer,
  app: appProcess.reducer,
});
