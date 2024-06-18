import { useAppDispatch } from "../../redux/hooks";
import { setStage } from "../../redux/slices/modalSlice";
import { ModalStage } from "../../types/ModalStage";
import s from "./Login.module.scss";

const Login = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.login}>
      <p className={s.haveAccountText}>Уже зарегистированы?</p>
      <button
        className={s.loginBtn}
        onClick={() => dispatch(setStage(ModalStage.Login))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
