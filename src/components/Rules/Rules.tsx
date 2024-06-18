import s from "./Rules.module.scss";

const Rules = () => {
  return (
    <div className={s.rules}>
      Регистрируясь, вы соглашаетесь{" "}
      <span className={s.highlight}>правилами использования</span> и{" "}
      <span className={s.highlight}>политикой конфиденциальности</span>
    </div>
  );
};

export default Rules;
