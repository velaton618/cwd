import React, { useState } from "react";
import s from "./Select.module.scss";
import ISelectProps from "../../types/ISelectProps";

const Select: React.FC<ISelectProps> = ({ placeholder, options }) => {
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  console.log(options);

  return (
    <select
      className={`${s.select} ${isPlaceholder ? s.placeholder : ""}`}
      onChange={() => setIsPlaceholder(false)}
    >
      <option className={s.placeholder} value="" disabled selected>
        {placeholder}
      </option>
      {options?.map((option, index: number) => <option>{option}</option>)}
    </select>
  );
};

export default Select;
