import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setError } from "../../redux/slices/modalSlice";
import s from "./SendButton.module.scss";

const SendButton = () => {
  const phone = useAppSelector((state) => state.modal.phone);
  const dispatch = useAppDispatch();

  const ERRORS = {
    required: "Это поле обязательное",
    invalid: "Номер телефона введен неверно",
  };
  const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  function handleClick() {
    if (phone.length <= 2) {
      dispatch(setError(ERRORS.required));
    } else if (!phone.match(phoneReg)) {
      dispatch(setError(ERRORS.invalid));
    } else {
      dispatch(setError(""));
    }
  }

  return (
    <button className={s.sendBtn} onClick={handleClick}>
      Получить код
    </button>
  );
};

export default SendButton;
