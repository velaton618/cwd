import React from "react";
import s from "./Comment.module.scss";
import ICommentProps from "../../../types/ICommentProps";

const Comment: React.FC<ICommentProps> = ({ comment }) => {
  return (
    <div className={s.comment}>
      <img className={s.avatar} src={comment.avatar} />
      <div className={s.commentContent}>
        <div className={s.name}>{comment.name}</div>
        <div className={s.text}>{comment.content}</div>
        <div className={s.info}>
          <div className={s.date}>{comment.createdDate}</div>
          <button className={s.replyButton}>Ответить</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
