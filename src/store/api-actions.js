import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./index";
import { dropToken, saveToken } from "../api/token";
import { requireAuthorization } from "./user-process/user-process";
import { setError, setSuccess } from "./app-data/app-data";
import { AuthorizationStatus, API_LINKS, HTTP_CODES } from "../assets/const";
import { errorHandle } from "api/error-handle";

export const checkAuthAction = createAsyncThunk(
  "/requireAuthorization",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.logIn);
      dispatch(
        requireAuthorization({
          authorizationStatus: AuthorizationStatus.Auth,
          data,
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HTTP_CODES.UNAUTHORIZED) {
          dispatch(
            requireAuthorization({
              authorizationStatus: AuthorizationStatus.NoAuth,
            })
          );
        }
      }
    }
  }
);

export const loginAction = createAsyncThunk(
  "/login",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.logIn, userData);
      saveToken(data.token);
      dispatch(
        requireAuthorization({
          data,
          authorizationStatus: AuthorizationStatus.Auth,
        })
      );
    } catch (error) {
      dispatch(
        requireAuthorization({
          authorizationStatus: AuthorizationStatus.NoAuth,
        })
      );
      errorHandle(error);
    }
  }
);

export const registrationAction = createAsyncThunk(
  "/registration",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.registration, userData);
      dispatch(setSuccess(data));
    } catch (error) {
      console.log(error);
      errorHandle(error);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "/logout",
  async (status, { rejectWithValue, dispatch }) => {
    await api.delete(API_LINKS.logOut);
    dropToken();
    dispatch(requireAuthorization({ status }));
  }
);

export const clearErrorAction = createAsyncThunk(
  "/clearError",
  (_, { rejectWithValue, dispatch }) => {
    dispatch(setError(undefined));
  }
);
export const clearSuccessAction = createAsyncThunk(
  "/clearError",
  (_, { rejectWithValue, dispatch }) => {
    dispatch(setSuccess(undefined));
  }
);
