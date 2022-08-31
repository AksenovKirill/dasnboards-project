import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storages: {
    isLoaded: false,
  },
  products: {
    isLoaded: false,
  },
  stocks: {
    isLoaded: false,
  },
  marketplaces: {
    isLoaded: false,
  },
  error: undefined,
  success: undefined,
};

export const appData = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadStorages: (state, action) => {
      state.storages = action.payload;
      state.storages.isLoaded = true;
    },
    loadProducts: (state, action) => {
      state.products = action.payload;
      state.products.isLoaded = true;
    },
    loadStocks: (state, action) => {
      state.stocks = action.payload;
      state.stocks.isLoaded = true;
    },
    loadMarketPlaces: (state, action) => {
      state.marketplaces = action.payload;
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
  loadStorages,
  loadProducts,
  loadStocks,
  loadMarketPlaces,
  setError,
  setSuccess,
} = appData.actions;
