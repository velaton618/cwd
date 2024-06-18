import s from "./PhoneInput.module.scss";
import RuFlag from "../../../assets/ru_flag.svg";
import { FC } from "react";
import { PhoneInputProps } from "./PhoneInputProps.interface";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPhone } from "../../../redux/slices/modalSlice";

const PhoneInput = () => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector((state) => state.modal.phone);
  const numberReg = /^[+]?(\d+)?$/;

  return (
    <div className={s.phoneInput}>
      <label htmlFor="phoneInput">Номер телефона</label>
      <div className={s.input}>
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
    </div>
  );
};

export default PhoneInput;
