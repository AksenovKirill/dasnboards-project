import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const searchSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    searchItems: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});
export const { searchItems } = searchSlice.actions;
