import Logo from "./Logo/Logo";
import s from "./Header.module.scss";
import Options from "./Options/Options";
import Tabs from "./Tabs/Tabs";
import Menu from "./Menu/Menu";

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <Tabs />
      <Options />

      <Menu />
    </header>
  );
}

export default Header;
