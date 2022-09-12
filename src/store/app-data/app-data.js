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
  status: undefined,
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
      state.organizations.data = action.payload.items;
      state.organizations.isLoading = action.payload.isLoading;
    },
    loadStocks: (state, action) => {
      state.stocks = action.payload;
      state.stocks.isLoaded = true;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const getStatus = (state) => state.data?.status;
export const getWareHouses = (state) => state.data?.warehouses;
export const getOrganizaions = (state) => state.data?.organizations;

export const { loadWareHouse, loadProducts, loadStocks, loadMarketPlaces, loadOrganizations, setStatus } = appData.actions;
