import s from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={s.registration}>
      <p className={s.noAccountText}>Нет аккаунта?</p>
      <button className={s.registerBtn}>Зарегистрироваться</button>
    </div>
  );
};

export default Registration;
