import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import s from "./Modal.module.css";
import { closeModal } from "../../redux/slices/modalSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../../assets/modal/logo.svg";
import { useState } from "react";
import RuFlag from "../../assets/ru_flag.svg";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpened);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("+7");
  const numberReg = /^[+]?(\d+)?$/;

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

          <div className={s.phoneInput}>
            <label htmlFor="phoneInput">Номер телефона</label>
            <div className={s.input}>
              <img src={RuFlag} className={s.flag} />
              <input
                id="phoneInput"
                value={phone}
                onChange={(e) => {
                  if (e.target.value.length <= 0) return;
                  if (!e.target.value.match(numberReg)) return;

                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <button className={s.sendBtn}>Получить код</button>
          <div className={s.registration}>
            <p className={s.noAccountText}>Нет аккаунта?</p>
            <button className={s.registerBtn}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
