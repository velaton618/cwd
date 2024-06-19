import s from "./AthletesChoice.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const AthletesChoice = () => {
  return (
    <div className={s.container}>
      <div className={s.search}>
        <div className={s.inputContainer}>
          <SearchIcon />
          <input className={s.input} placeholder="Поиск" />
        </div>
        <button className={s.button}>Найти</button>
      </div>
      <div className={s.list}></div>
    </div>
  );
};

export default AthletesChoice;
