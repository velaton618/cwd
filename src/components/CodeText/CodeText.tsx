import s from "./CodeText.module.scss";

const CodeText = () => {
  return (
    <div className={s.text}>
      <h1 className={s.title}>Подтвердите номер телефона</h1>
      <p className={s.description}>
        Отправим сообщение с 6-ти значным кодом на номер +7 983 540-49-43
        <button className={s.changeBtn}>Изменить</button>
      </p>
    </div>
  );
};

export default CodeText;
