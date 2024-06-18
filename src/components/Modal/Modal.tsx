import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import s from "./Modal.module.css";
import { closeModal } from "../../redux/slices/modalSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../../assets/modal/logo.svg";

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
        <button className={s.closeBtn} onClick={() => dispatch(closeModal())}>
          <CloseOutlinedIcon />
        </button>

        <div className={s.content}>
          <img src={Logo} />
          <div className={s.text}>
            <h1 className={s.title}>Вход на платформу</h1>
            <p className={s.description}>
              Код будет автоматически отправлен на Ваш номер телефона с помощью
              SMS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
