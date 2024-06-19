import React from "react";
import s from "./ChoiceTitle.module.scss";
import IChoiceTitleProps from "../../types/IChoiceTitleProps";

const ChoiceTitle: React.FC<IChoiceTitleProps> = ({
  step,
  stepsCount,
  title,
}) => {
  return (
    <div className={s.choiceTitle}>
      <div className={s.steps}>
        {step}/{stepsCount}
      </div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default ChoiceTitle;
