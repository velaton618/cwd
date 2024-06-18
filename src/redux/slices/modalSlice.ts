import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/IModalState";

const initialState: IModalState = {
  isOpened: false,
  phone: "+7",
  error: "",
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { openModal, closeModal, setPhone, setError } = modalSlice.actions;
export default modalSlice.reducer;
