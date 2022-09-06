import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    storages: [],
    products: [],
  },
  openForm: false,
  isAddItem: false,
};

export const appProcess = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNewItemStorage: (state, action) => {
      state.items.storages.push(action.payload);
    },
    addNewItemProducts: (state, action) => {
      state.items.products.push(action.payload);
    },
    switchForm: (state, action) => {
      state.openForm = action.payload;
    },
  },
});

export const { addNewItemStorage, addNewItemProducts, switchForm } =
  appProcess.actions;
