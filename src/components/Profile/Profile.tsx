import React from "react";
import RuFlag from "../../assets/ru_flag.svg";
import s from "./Profile.module.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import IProfileProps from "../../types/IProfileProps";

const Profile: React.FC<IProfileProps> = ({
  avatar,
  country,
  isVerified,
  birthday,
  phone,
  name,
}) => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <img className={s.avatar} src={avatar} />
        <div className={s.right}>
          <div className={s.country}>
            <img src={RuFlag} />
            {country}
          </div>
          <h1 className={s.name}>{name}</h1>
        </div>
      </div>
      {!isVerified && (
        <div className={s.verification}>
          <InfoOutlinedIcon />
          Подтвердите личность для доступа к новым функциям
        </div>
      )}
      <div className={s.info}>
        {birthday && (
          <div className={s.block}>
            <div className={s.label}>День рождения</div>
            <div className={s.value}>{birthday}</div>
          </div>
        )}
        {phone && (
          <div className={s.block}>
            <div className={s.label}>Номер телефона</div>
            <div className={s.value}>{phone}</div>
          </div>
        )}
      </div>
      <div className={s.bottom}>
        <button className={s.editButton}>Редактировать</button>
        <button className={s.shareButton}>
          <ShareOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Profile;
