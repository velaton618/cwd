import React from "react";
import s from "./ChoiceTitle.module.scss";
import IChoiceTitleProps from "../../types/IChoiceTitleProps";

const ChoiceTitle: React.FC<IChoiceTitleProps> = ({
  step,
  stepsCount,
  title,
  description,
}) => {
  return (
    <div className={s.choiceTitle}>
      <div className={s.top}>
        <div className={s.steps}>
          {step}/{stepsCount}
        </div>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.bottom}>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};

export default ChoiceTitle;
