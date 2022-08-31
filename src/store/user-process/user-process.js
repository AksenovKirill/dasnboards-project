import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../assets/const";

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  data: undefined,
};

export const userProcess = createSlice({
  name: "user",
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.data = action.payload;
      state.authorizationStatus = action.payload.authorizationStatus;
    },
  },
});

export const getAuthStatus = (state) => state.user.authorizationStatus;
export const getUserData = (state) => state.user.data;
export const { requireAuthorization, requireRegistration, switchForm } =
  userProcess.actions;
