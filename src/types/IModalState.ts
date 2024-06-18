import { ModalStage } from "./ModalStage";

export interface IModalState {
  isOpened: boolean;
  phone: string;
  error: string;
  stage: ModalStage;
}
