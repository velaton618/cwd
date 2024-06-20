import { createSlice } from "@reduxjs/toolkit";
import IMenuState from "../../types/IMenuState";

const initialState: IMenuState = {
  isOpened: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpened = true;
    },
    closeMenu: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
