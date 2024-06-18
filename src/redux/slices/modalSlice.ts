import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/IModalState";

const initialState: IModalState = {
  isOpened: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
