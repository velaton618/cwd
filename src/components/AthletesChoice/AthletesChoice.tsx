import s from "./AthletesChoice.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";

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
      <div className={s.list}>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
        <div className={s.person}>
          <img className={s.avatar} src="/athletes/1.png" />
          <div className={s.info}>
            <div className={s.name}>Александр Антонов</div>
            <div className={s.subject}>Греко-римская борьба</div>
          </div>
          <Checkbox inputProps={{ "aria-label": "check" }} />
        </div>
      </div>
    </div>
  );
};

export default AthletesChoice;
