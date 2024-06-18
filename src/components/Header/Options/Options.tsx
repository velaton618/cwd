import { MenuItem } from "@mui/material";
import s from "./Options.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import RuFlag from "../../../assets/ru_flag.svg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAppDispatch } from "../../../redux/hooks";
import { openModal } from "../../../redux/slices/modalSlice";

const Options = () => {
  const [language, setLanguage] = useState("ru");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={s.options}>
      <Select
        sx={{
          "& fieldset": { border: "none" },
          "& .languageItem": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        value={language}
        onChange={handleChange}
        className={`${s.languageSelect} demo-select-small-label`}
      >
        <MenuItem className="languageItem" value={"ru"}>
          <img width={30} height={12} src={RuFlag} />
          <span className={s.lang}>RU</span>
        </MenuItem>
      </Select>

      <button className={s.profile} onClick={() => dispatch(openModal())}>
        <PersonOutlineOutlinedIcon />
      </button>
    </div>
  );
};

export default Options;
