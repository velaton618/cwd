import { useAppSelector } from "../../redux/hooks";
import s from "./CodeText.module.scss";

const CodeText = () => {
  const phone = useAppSelector((state) => state.modal.phone);

  return (
    <div className={s.text}>
      <h1 className={s.title}>Подтвердите номер телефона</h1>
      <p className={s.description}>
        Отправим сообщение с 6-ти значным кодом на номер {phone}
        <button className={s.changeBtn}>Изменить</button>
      </p>
    </div>
  );
};

export default CodeText;
