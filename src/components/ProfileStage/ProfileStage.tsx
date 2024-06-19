import { useRef } from "react";
import s from "./ProfileStage.module.scss";
import Select from "../Select/Select";

const ProfileStage = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleAvatarClick = () => {
    fileInput?.current?.click();
  };

  return (
    <div className={s.container}>
      <input type="file" ref={fileInput} style={{ display: "none" }} />
      <img
        src="/default_user.png"
        className={s.avatar}
        onClick={handleAvatarClick}
      />

      <div className={s.fields}>
        <div className={s.field}>
          <label htmlFor="firstName">Имя</label>
          <div className={s.inputContainer}>
            <input id="firstName" placeholder="Введите имя" />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor="lastName">Фамилия</label>
          <div className={s.inputContainer}>
            <input id="lastName" placeholder="Введите фамилию" />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor="patronymic">Отчество (необязательно)</label>
          <div className={s.inputContainer}>
            <input id="patronymic" placeholder="Введите отчество" />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor="birthday">Дата рождения</label>
          <div className={s.inputContainer}>
            <input id="birthday" placeholder="Выберите дату" type="date" />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor="gender">Пол</label>
          <div className={s.inputContainer}>
            <Select
              placeholder={"Выберите пол"}
              options={["Мужской", "Женский"]}
            />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor="citizenship">Гражданство</label>
          <div className={s.inputContainer}>
            <Select placeholder={"Выберите страну"} options={["Другая"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStage;
