import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { useState } from "react";
import s from "./Tabs.module.scss";
import Certificate from "./Icons/Certificate";
import Awards from "./Icons/Awards";

const Tabs = () => {
  const [filters, setFilters] = useState({
    all: true,
    results: false,
    video: false,
    awards: false,
  });
  const GRAY_SCALE_70 = "#353754";
  const GRAY_SCALE_50 = "#7B7EA5";

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
        <Certificate
          color={`${filters.results ? GRAY_SCALE_70 : GRAY_SCALE_50}`}
        />
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
        <Awards color={`${filters.awards ? GRAY_SCALE_70 : GRAY_SCALE_50}`} />
        Достижения
      </button>
    </div>
  );
};

export default Tabs;
