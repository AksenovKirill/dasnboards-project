import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouses: [],
  products: [],
  isOpenForm: false,
  isAddItem: false,
  isOpenModal: false,
};

export const appProcess = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNewItemWareHouses: (state, action) => {
      state.warehouses.push(action.payload);
      state.isOpenModal = action.payload.isOpenModal;
    },
    addNewItemProducts: (state, action) => {
      state.products.push(action.payload);
      state.isOpenModal = action.payload.isOpenModal;
    },
    openModal: (state, action) => {
      state.isOpenModal = action.payload.isOpenModal;
    },
    switchForm: (state, action) => {
      state.isOpenForm = action.payload;
    },
  },
});
export const getIsOpenForm = (state) => state.app.isOpenForm;
export const getIsOpenModal = (state) => state.app.isOpenModal;
export const { addNewItemStorage, addNewItemProducts, switchForm, openModal } = appProcess.actions;
