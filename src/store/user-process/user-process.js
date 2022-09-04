import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, UserStatus } from "../../assets/const";

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  data: undefined,
  userStatus: UserStatus.Guest,
};

export const userProcess = createSlice({
  name: "user",
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.data = action.payload;
      state.authorizationStatus = action.payload.authorizationStatus;
      state.userStatus = action.payload.userStatus;
    },
  },
});

export const getAuthStatus = (state) => state.user.authorizationStatus;
export const getUserData = (state) => state.user.data;
export const { requireAuthorization, requireRegistration, switchForm } = userProcess.actions;
