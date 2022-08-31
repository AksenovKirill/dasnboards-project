import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const setCategorySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.items = state.items.filter(
        (item) => item.categotyId !== action.payload
      );
    },
  },
});
export const { setCategory } = setCategorySlice.actions;
