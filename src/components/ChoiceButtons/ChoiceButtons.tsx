import React from "react";
import s from "./ChoiceButtons.module.scss";
import IChoiceButtonsProps from "../../types/IChoiceButtonsProps";

const ChoiceButtons: React.FC<IChoiceButtonsProps> = ({ step, stepsCount }) => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <button className={s.backBtn}>Назад</button>
      </div>
      <div className={s.right}>
        <button className={s.skipBtn}>Пропустить</button>
        <button className={s.nextBtn}>Продолжить</button>
      </div>
    </div>
  );
};

export default ChoiceButtons;
