import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/IModalState";

const initialState: IModalState = {
  isOpened: false,
  phone: "+7",
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
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { openModal, closeModal, setPhone } = modalSlice.actions;
export default modalSlice.reducer;
