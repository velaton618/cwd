import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import s from "./Modal.module.css";
import { closeModal } from "../../redux/slices/modalSlice";
import Logo from "../../assets/modal/logo.svg";
import CloseButton from "./CloseButton/CloseButton";
import Text from "./CloseButton/Text/Text";
import PhoneInput from "./PhoneInput/PhoneInput";
import Registration from "./Registration/Registration";
import SendButton from "./SendButton/SendButton";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpened);
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
          <Text />
          <PhoneInput />
          <SendButton />
          <Registration />
        </div>
      </div>
    </div>
  );
};

export default Modal;
