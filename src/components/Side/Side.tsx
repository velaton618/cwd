import s from "./Side.module.scss";
import Tabs from "./Tabs/Tabs";

const Side = () => {
  return (
    <div className={s.side}>
      <div className={s.filters}>
        <b className={s.title}>Фильтр Ленты</b>
        <Tabs />
      </div>
      <div className={s.ads}>
        <img src={"/ads.png"} />
      </div>
    </div>
  );
};

export default Side;
