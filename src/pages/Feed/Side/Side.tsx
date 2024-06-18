import s from "./Side.module.css";

const Side = () => {
  return (
    <div className={s.side}>
      <div className={s.filters}>
        <b className={s.title}>Фильтр Ленты</b>
      </div>
      <div className={s.ads}>
        <img src={"src/assets/ads.png"} />
      </div>
    </div>
  );
};

export default Side;
