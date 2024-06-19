import s from "./Post.module.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { FC } from "react";
import { IPostProps } from "../../types/IPostProps";
import IComment from "../../types/IComment";
import Comment from "./Comment/Comment";

const Post: FC<IPostProps> = ({
  subject,
  uploadDate,
  title,
  description,
  images,
  viewsCount,
  commentsCount,
  comments,
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
          {images.map((url: string, index: number) => (
            <div key={index}>
              <img className={s.photo} src={url} />
            </div>
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
      <div className={s.comments}>
        {comments?.map((comment: IComment, index: number) => (
          <div key={index} className={s.container}>
            <Comment comment={comment} />
            <div className={s.subComments}>
              {comment?.comments?.map((comment: IComment, index: number) => (
                <div key={index}>
                  <Comment comment={comment} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
