import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouses: {
    data: undefined,
    isLoading: false,
  },

  organizations: {
    data: undefined,
    isLoading: false,
  },
  marketplaces: {
    data: [],
    isLoading: false,
  },
  error: undefined,
  success: undefined,
};

export const appData = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadWareHouse: (state, action) => {
      state.warehouses.data = action.payload;
      state.warehouses.isLoading = action.payload.isLoading;
    },
    loadMarketPlaces: (state, action) => {
      state.marketplaces = action.payload.data;
      state.marketplaces.isLoaded = action.payload.isLoading;
    },
    loadOrganizations: (state, action) => {
      state.organizations.data = action.payload.data;
      state.organizations.isLoading = action.payload.isLoading;
    },
    loadStocks: (state, action) => {
      state.stocks = action.payload;
      state.stocks.isLoaded = true;
    },

    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loadWareHouse,
  loadProducts,
  loadStocks,
  loadMarketPlaces,
  loadOrganizations,
  setError,
  setSuccess,
} = appData.actions;
