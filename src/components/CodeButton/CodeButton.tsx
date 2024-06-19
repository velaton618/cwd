import s from "./CodeButton.module.scss";

const CodeButton = () => {
  return (
    <div className={s.codeButton}>
      <button className={s.button}>Подтвердить</button>
      <p className={s.resendText}>Отправить снова через 01:00</p>
    </div>
  );
};

export default CodeButton;
