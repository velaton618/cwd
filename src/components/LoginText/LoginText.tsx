import s from "./LoginText.module.scss";

const LoginText = () => {
  return (
    <div className={s.text}>
      <h1 className={s.title}>Вход на платформу</h1>
      <p className={s.description}>
        Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
      </p>
    </div>
  );
};

export default LoginText;
