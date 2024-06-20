import Profile from "../../components/Profile/Profile";
import IProfileProps from "../../types/IProfileProps";
import s from "./Organizations.module.scss";

const Organizations = () => {
  const profile: IProfileProps = {
    avatar: "/default_user.png",
    name: "Александр Магомедов",
    country: "Российская Федерация",
    isVerified: true,
    birthday: "12 сентября 1994",
    phone: "+7 (773) 493 39 10",
  };

  return (
    <div className={s.container}>
      <Profile {...profile} />
    </div>
  );
};

export default Organizations;
