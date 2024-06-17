import { MenuItem } from "@mui/material";
import s from "./Options.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const Options = () => {
  const [language, setLanguage] = useState("ru");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={s.options}>
      <Select
        value={language}
        onChange={handleChange}
        className={`${s.languageSelect} demo-select-small-label`}
      >
        <MenuItem value={"ru"}>
          <ReactCountryFlag svg countryCode="RU" />
        </MenuItem>
      </Select>
    </div>
  );
};

export default Options;
