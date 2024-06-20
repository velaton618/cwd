import { MenuItem } from "@mui/material";
import s from "./Options.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import RuFlag from "../../../assets/ru_flag.svg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { openModal } from "../../../redux/slices/modalSlice";
import { ModalStage } from "../../../types/ModalStage";

const Options = () => {
  const [language, setLanguage] = useState("ru");
  const dispatch = useAppDispatch();
  const stage = useAppSelector((state) => state.modal.stage);

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

      <button
        className={`${s.profile} ${stage === ModalStage.Done && s.image}`}
        onClick={() => dispatch(openModal())}
      >
        {stage === ModalStage.Done ? (
          <img src="/default_user.png" />
        ) : (
          <PersonOutlineOutlinedIcon />
        )}
      </button>
    </div>
  );
};

export default Options;
