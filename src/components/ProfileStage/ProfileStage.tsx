import { useRef } from "react";
import s from "./ProfileStage.module.scss";

const ProfileStage = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleAvatarClick = () => {
    fileInput?.current?.click();
  };

  return (
    <div className={s.container}>
      <input type="file" ref={fileInput} style={{ display: "none" }} />
      <img
        src="/default_user.png"
        className={s.avatar}
        onClick={handleAvatarClick}
      />

      <div className={s.fields}></div>
    </div>
  );
};

export default ProfileStage;
