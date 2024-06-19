import { useState } from "react";
import AuthCode from "react-auth-code-input";
import s from "./CodeInput.module.scss";

const CodeInput = () => {
  const [result, setResult] = useState("");
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return (
    <div className={s.codeInput}>
      <AuthCode
        containerClassName={s.container}
        inputClassName={s.input}
        allowedCharacters="numeric"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default CodeInput;
