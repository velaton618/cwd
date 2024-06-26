import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/IModalState";
import { ModalStage } from "../../types/ModalStage";

const initialState: IModalState = {
  isOpened: false,
  phone: "+7",
  error: "",
  stage: ModalStage.Login,
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
    setStage: (state, action: PayloadAction<ModalStage>) => {
      state.stage = action.payload;
    },
  },
});

export const { openModal, closeModal, setPhone, setError, setStage } =
  modalSlice.actions;
export default modalSlice.reducer;
