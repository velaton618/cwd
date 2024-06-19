import React from "react";
import s from "./ChoiceButtons.module.scss";
import IChoiceButtonsProps from "../../types/IChoiceButtonsProps";
import { useAppDispatch } from "../../redux/hooks";
import { setStage } from "../../redux/slices/modalSlice";
import { ModalStage } from "../../types/ModalStage";

const ChoiceButtons: React.FC<IChoiceButtonsProps> = ({ step }) => {
  const dispatch = useAppDispatch();

  function nextStage() {
    let stage = ModalStage.Done;

    if (step === 1) {
      stage = ModalStage.AthletesChoice;
    } else if (step === 2) {
      stage = ModalStage.OrganizationsChoice;
    } else if (step === 3) {
      stage = ModalStage.Profile;
    }

    dispatch(setStage(stage));
  }

  function previousStage() {
    let stage = ModalStage.Done;

    if (step === 2) {
      stage = ModalStage.SportsChoice;
    } else if (step === 3) {
      stage = ModalStage.AthletesChoice;
    } else if (step === 4) {
      stage = ModalStage.OrganizationsChoice;
    }

    dispatch(setStage(stage));
  }

  return (
    <div className={s.container}>
      <div className={s.left}>
        {step > 1 && (
          <button className={s.backBtn} onClick={previousStage}>
            Назад
          </button>
        )}
      </div>
      <div className={s.right}>
        <button className={s.skipBtn} onClick={nextStage}>
          Пропустить
        </button>
        <button className={s.nextBtn} onClick={nextStage}>
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default ChoiceButtons;
