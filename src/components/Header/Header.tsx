import Logo from "./Logo/Logo";
import s from "./Header.module.css";
import Options from "./Options/Options";
import Tabs from "./Tabs/Tabs";

function Header() {
  return (
    <div className={s.header}>
      <Logo />
      <Tabs />
      <Options />
    </div>
  );
}

export default Header;
