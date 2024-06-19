import { FC } from "react";
import s from "./CodeButton.module.scss";
import ICodeButtonProps from "../../types/ICodeButtonProps";

const CodeButton: FC<ICodeButtonProps> = ({ onClick }) => {
  return (
    <div className={s.codeButton}>
      <button onClick={onClick} className={s.button}>
        Подтвердить
      </button>
      <p className={s.resendText}>Отправить снова через 01:00</p>
    </div>
  );
};

export default CodeButton;
