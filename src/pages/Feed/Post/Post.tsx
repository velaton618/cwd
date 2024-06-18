import s from "./Post.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Post: FC<PostProps> = ({
  subject,
  uploadDate,
  title,
  description,
  images,
  viewsCount,
  commentsCount,
}) => {
  return (
    <div className={s.post}>
      <div className={s.info}>
        <div className={s.subject}>{subject}</div>
        <div className={s.separator}></div>
        <div className={s.uploadDate}>{uploadDate}</div>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>
          {description}
          <button className={s.btnMore}>Читать больше...</button>
        </p>
        <div className={s.photos}>
          {images.map((url: string) => (
            <img className={s.photo} src={url} />
          ))}
        </div>
      </div>
      <div className={s.stats}>
        <div className={s.views}>
          <RemoveRedEyeOutlinedIcon />
          {viewsCount}
        </div>
        <div className={s.comments}>
          <ChatBubbleOutlineOutlinedIcon />
          {commentsCount}
        </div>
      </div>
      <div className={s.separator} />
      <div className={s.comments}>Comments...</div>
    </div>
  );
};

export default Post;
