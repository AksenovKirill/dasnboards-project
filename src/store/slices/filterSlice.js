import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const filterItemsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { filterItems } = filterItemsSlice.actions;
