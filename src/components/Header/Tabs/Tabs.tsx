import Tab from "./Tab/Tab";
import s from "./Tabs.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const Tabs = () => {
  return (
    <div className={s.tabs}>
      <Tab
        href="#"
        title={"Лента"}
        icon={<HomeOutlinedIcon />}
        isActive={true}
      />
      <Tab
        isActive={false}
        href="#"
        title={"Маркетплейс"}
        icon={<LocalMallOutlinedIcon />}
      />
      <Tab
        isActive={false}
        href="#"
        title={"Рейтинги"}
        icon={<GroupOutlinedIcon />}
      />
      <Tab
        isActive={false}
        href="#"
        title={"Cоревнования"}
        icon={<EmojiEventsOutlinedIcon />}
      />
      <Tab
        isActive={false}
        href="#"
        title={"Организации"}
        icon={<AccountBalanceOutlinedIcon />}
      />
    </div>
  );
};

export default Tabs;
