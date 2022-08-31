import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const loadItemsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadItems: (state, action) => {
      state.items = [];
      //переписать логику загрузки в reducers
    },
  },
});
export const { loadItems } = loadItemsSlice.actions;
