import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import s from "./Modal.module.scss";
import { closeModal } from "../../redux/slices/modalSlice";
import Logo from "../../assets/modal/logo.svg";
import CloseButton from "../CloseButton/CloseButton";
import LoginText from "../LoginText/LoginText";
import PhoneInput from "../PhoneInput/PhoneInput";
import Registration from "../Registration/Registration";
import SendButton from "../SendButton/SendButton";
import { ModalStage } from "../../types/ModalStage";
import RegisterText from "../RegisterText/RegisterText";
import Login from "../Login/Login";
import Rules from "../Rules/Rules";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpened);
  const stage = useAppSelector((state) => state.modal.stage);
  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).id === "modal") {
      dispatch(closeModal());
    }
  }

  return (
    <div
      className={`${s.modal} ${isOpen ? s.active : ""}`}
      id="modal"
      onClick={handleClick}
    >
      <div className={s.inner}>
        <CloseButton />
        <div className={s.content}>
          <img src={Logo} />

          {stage === ModalStage.Login && (
            <>
              <LoginText />
              <PhoneInput />
              <SendButton />
              <Registration />
            </>
          )}

          {stage === ModalStage.Register && (
            <>
              <RegisterText />
              <PhoneInput />
              <SendButton />
              <Rules />
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
