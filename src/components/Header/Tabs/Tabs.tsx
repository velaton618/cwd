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
      <Tab title={"Лента"} icon={<HomeOutlinedIcon />} />
      <Tab title={"Маркетплейс"} icon={<LocalMallOutlinedIcon />} />
      <Tab title={"Рейтинги"} icon={<GroupOutlinedIcon />} />
      <Tab title={"Cоревнования"} icon={<EmojiEventsOutlinedIcon />} />
      <Tab title={"Организации"} icon={<AccountBalanceOutlinedIcon />} />
    </div>
  );
};

export default Tabs;
