import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Certificate from "../../../../assets/icons/certificate.svg";
import Award from "../../../../assets/icons/award.svg";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { useState } from "react";
import s from "./Tabs.module.css";

const Tabs = () => {
  const [filters, setFilters] = useState({
    all: true,
    results: false,
    video: false,
    awards: false,
  });

  return (
    <div className={s.tabs}>
      <button
        onClick={() =>
          setFilters({
            all: true,
            results: false,
            video: false,
            awards: false,
          })
        }
        className={`${s.filter} ${filters.all && s.active}`}
      >
        <GridViewOutlinedIcon />
        Все
      </button>
      <button
        onClick={() =>
          setFilters({
            all: false,
            results: true,
            video: false,
            awards: false,
          })
        }
        className={`${s.filter} ${filters.results && s.active}`}
      >
        <img src={Certificate} />
        Результаты соревнований
      </button>
      <button
        onClick={() =>
          setFilters({
            all: false,
            results: false,
            video: true,
            awards: false,
          })
        }
        className={`${s.filter} ${filters.video && s.active}`}
      >
        <VideocamOutlinedIcon />
        Видео
      </button>
      <button
        onClick={() =>
          setFilters({
            all: false,
            results: false,
            video: false,
            awards: true,
          })
        }
        className={`${s.filter} ${filters.awards && s.active}`}
      >
        <img src={Award} />
        Достижения
      </button>
    </div>
  );
};

export default Tabs;
