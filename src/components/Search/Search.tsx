import s from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className={s.search}>
      <div className={s.inputContainer}>
        <SearchIcon />
        <input className={s.input} placeholder="Поиск" />
      </div>
      <button className={s.button}>Найти</button>
    </div>
  );
};

export default Search;
