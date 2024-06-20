import Profile from "../../components/Profile/Profile";
import IProfileProps from "../../types/IProfileProps";
import s from "./Competitions.module.scss";

const Competitions = () => {
  const profile: IProfileProps = {
    avatar: "/profile.png",
    name: "Александр Магомедов",
    country: "Российская Федерация",
    isVerified: false,
    birthday: "12 сентября 1994",
    phone: "+7 (773) 493 39 10",
  };

  return (
    <div className={s.container}>
      <Profile {...profile} />
    </div>
  );
};

export default Competitions;
