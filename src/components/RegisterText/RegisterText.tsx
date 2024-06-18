import s from "./RegisterText.module.scss";

const RegisterText = () => {
  return (
    <div className={s.text}>
      <h1 className={s.title}>Регистрация</h1>
      <p className={s.description}>
        Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
      </p>
    </div>
  );
};

export default RegisterText;
