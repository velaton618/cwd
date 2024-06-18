import s from "./PhoneInput.module.scss";
import RuFlag from "../../assets/ru_flag.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPhone } from "../../redux/slices/modalSlice";
import { useState } from "react";

const PhoneInput = () => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector((state) => state.modal.phone);
  const error = useAppSelector((state) => state.modal.error);
  const numberReg = /^[+]?(\d+)?$/;

  return (
    <div className={s.phoneInput}>
      <label htmlFor="phoneInput">Номер телефона</label>
      <div className={`${s.input} ${error.length > 0 ? s.error : ""}`}>
        <img src={RuFlag} className={s.flag} />
        <input
          id="phoneInput"
          value={phone}
          onChange={(e) => {
            if (e.target.value.length <= 0) return;
            if (!e.target.value.match(numberReg)) return;

            dispatch(setPhone(e.target.value));
          }}
        />
      </div>

      <p className={s.error}>{error}</p>
    </div>
  );
};

export default PhoneInput;
