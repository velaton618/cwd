import s from "./Feed.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Feed = () => {
  return (
    <div className={s.feed}>
      <div className={s.post}>
        <div className={s.info}>
          <div className={s.subject}>Спортивная Борьба</div>
          <div className={s.separator}></div>
          <div className={s.uploadDate}>12 марта, 2024 в 16:03</div>
        </div>
        <div className={s.content}>
          <h1 className={s.title}>
            Илья Бессонов дал интервью для телеканала Россия-1
          </h1>
          <p className={s.description}>
            Илья Бессонов дал интервью после большого перерыва, где поделился
            секретом своего успеха и рассказал методики своих тренировок.
            Спортсмен сделал заявление, что возвращается в спорт и ...
            <button className={s.btnMore}>Читать больше...</button>
          </p>
          <div className={s.photos}>
            <img className={s.photo} src={"src/assets/post/1.png"} />
            <img className={s.photo} src={"src/assets/post/2.png"} />
            <img className={s.photo} src={"src/assets/post/3.png"} />
            <img className={s.photo} src={"src/assets/post/4.png"} />
            <img className={s.photo} src={"src/assets/post/5.png"} />
            <img className={s.photo} src={"src/assets/post/6.png"} />
          </div>
        </div>
        <div className={s.stats}>
          <div className={s.views}>
            <RemoveRedEyeOutlinedIcon />
            4.1 K
          </div>
          <div className={s.comments}>
            <ChatBubbleOutlineOutlinedIcon />4
          </div>
        </div>
      </div>
      <div className={s.side}>
        <div className={s.filters}>Filters</div>
        <div className={s.ads}>
          <img src={"src/assets/ads.png"} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
