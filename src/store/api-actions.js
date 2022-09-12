import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./index";
import { dropToken, saveToken } from "../api/token";
import { errorHandle } from "api/error-handle";
import { requireAuthorization } from "./user-process/user-process";
import { setStatus, loadWareHouse, loadOrganizations } from "./app-data/app-data";
import { adapterOrganizations, adapterWareHouses } from "assets/helpers";
import { AuthorizationStatus, API_LINKS, API_ACTIONS, TOKEN_KEY_NAMES } from "../assets/const";

export const loginAction = createAsyncThunk(API_ACTIONS.Login, async (userData, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await api.post(API_LINKS.LOGIN, userData);
    saveToken(TOKEN_KEY_NAMES.access, data.accessToken);
    saveToken(TOKEN_KEY_NAMES.refresh, data.refreshToken);
    dispatch(
      requireAuthorization({
        data,
        authorizationStatus: AuthorizationStatus.Auth,
      })
    );
    dispatch(setStatus({ status: true, title: "Welcome", isLogin: true }));
  } catch (error) {
    dispatch(
      requireAuthorization({
        authorizationStatus: AuthorizationStatus.NoAuth,
      })
    );
    errorHandle(error);
  }
});

export const registrationAction = createAsyncThunk(
  API_ACTIONS.Registration,
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.REGISTRATION, userData);
      dispatch(setStatus(data));
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const refreshTokenAction = createAsyncThunk(
  API_ACTIONS.Refresh,
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post(API_LINKS.REFRESH_TOKEN, {
        refreshToken: token,
      });
      dispatch(setStatus("tokens refresh"));
      dropToken(TOKEN_KEY_NAMES.refresh);
      dropToken(TOKEN_KEY_NAMES.access);
      saveToken(TOKEN_KEY_NAMES.access, data.accessToken);
      saveToken(TOKEN_KEY_NAMES.refresh, data.refreshToken);
      window.location.reload();
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const logoutAction = createAsyncThunk(API_ACTIONS.Logout, async (status, { rejectWithValue, dispatch }) => {
  await api.delete(API_LINKS.logOut);
  dropToken();
  dispatch(requireAuthorization({ status }));
});

export const loadWareHousesAction = createAsyncThunk(
  API_ACTIONS.LoadWareHouses,
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
  API_ACTIONS.LoadOrganizations,
  async (_, { rejectWithValue, dispatch }) => {
    const { data } = await api.get(API_LINKS.GET_ORGANIZATIONS);

    dispatch(
      loadOrganizations({
        items: adapterOrganizations(data),
        isLoading: true,
      })
    );
  }
);

export const clearStatusAction = createAsyncThunk(API_ACTIONS.ClearStatus, (_, { rejectWithValue, dispatch }) => {
  dispatch(setStatus(undefined));
});
