import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./index";
import { dropToken, saveToken } from "../api/token";
import { errorHandle } from "api/error-handle";
import { requireAuthorization } from "./user-process/user-process";
import { setError, setSuccess, loadWareHouse, loadOrganizations } from "./app-data/app-data";
import { adapterOrganizations, adapterWareHouses } from "assets/helpers";
import { AuthorizationStatus, API_LINKS, HTTP_CODES, AUTH_TOKEN_KEY_NAMES } from "../assets/const";

export const checkAuthAction = createAsyncThunk(
  "/requireAuthorization",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.LOG_IN);
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
      const { data } = await api.post(API_LINKS.LOG_IN, userData);
      saveToken(AUTH_TOKEN_KEY_NAMES.access, data.accessToken);
      saveToken(AUTH_TOKEN_KEY_NAMES.refresh, data.refreshToken);
      dispatch(
        requireAuthorization({
          data,
          authorizationStatus: AuthorizationStatus.Auth,
        })
      );
      dispatch(setSuccess({ status: true, title: "Welcome", isLogin: true }));
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
      const { data } = await api.post(API_LINKS.REGISTRATION, userData);
      dispatch(setSuccess(data));
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const refreshTokenAction = createAsyncThunk(
  "/refresh",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.REFRESH_TOKEN, {
        refreshToken: token,
      });
      dispatch(setSuccess("token done"));
      dropToken(AUTH_TOKEN_KEY_NAMES.refresh);
      dropToken(AUTH_TOKEN_KEY_NAMES.access);
      saveToken(AUTH_TOKEN_KEY_NAMES.access, data.accessToken);
      saveToken(AUTH_TOKEN_KEY_NAMES.refresh, data.refreshToken);
      window.location.reload();
    } catch (error) {
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

export const loadWareHouseAction = createAsyncThunk(
  "/loadWarehouse",
  async (_, { rejectWithValue, dispatch }) => {
    const { data } = await api.get(API_LINKS.GET_WAREHOUSES);
    dispatch(
      loadWareHouse({
        items: adapterWareHouses(data),
        isLoading: true,
      })
    );
  }
);

export const loadOrganizationsAction = createAsyncThunk(
  "/loadOrganizations",
  async (_, { rejectWithValue, dispatch }) => {
    const { data } = await api.get(API_LINKS.GET_ORGANIZATIONS);
    dispatch(
      loadOrganizations({
        data: adapterOrganizations(data),
        isLoading: true,
      })
    );
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
