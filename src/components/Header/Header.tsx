import Logo from "./Logo/Logo";
import s from "./Header.module.css";
import Options from "./Options/Options";
import Tabs from "./Tabs/Tabs";

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <Tabs />
      <Options />
    </header>
  );
}

export default Header;
