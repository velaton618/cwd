import { useAppDispatch } from "../../redux/hooks";
import { setStage } from "../../redux/slices/modalSlice";
import { ModalStage } from "../../types/ModalStage";
import s from "./Registration.module.scss";

const Registration = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.registration}>
      <p className={s.noAccountText}>Нет аккаунта?</p>
      <button
        className={s.registerBtn}
        onClick={() => dispatch(setStage(ModalStage.Register))}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Registration;
