import s from "./Side.module.css";
import Tabs from "./Tabs/Tabs";

const Side = () => {
  return (
    <div className={s.side}>
      <div className={s.filters}>
        <b className={s.title}>Фильтр Ленты</b>
        {/* <Tabs /> */}
        <Tabs />
      </div>
      <div className={s.ads}>
        <img src={"src/assets/ads.png"} />
      </div>
    </div>
  );
};

export default Side;
