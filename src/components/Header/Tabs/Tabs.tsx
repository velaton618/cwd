import Tab from "./Tab/Tab";
import s from "./Tabs.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const Tabs = () => {
  const path = window.location.href.split("://")[1].split("/")[1];

  const tabsState = {
    feed: path.includes("feed") || path === "",
    marketplace: path.includes("marketplace"),
    ratings: path.includes("ratings"),
    competitions: path.includes("competitions"),
    organization: path.includes("organizations"),
  };

  return (
    <nav className={s.tabs}>
      <Tab
        href="/feed"
        title={"Лента"}
        icon={<HomeOutlinedIcon />}
        isActive={tabsState.feed}
      />
      <Tab
        isActive={tabsState.marketplace}
        href="/marketplace"
        title={"Маркетплейс"}
        icon={<LocalMallOutlinedIcon />}
      />
      <Tab
        isActive={tabsState.ratings}
        href="/ratings"
        title={"Рейтинги"}
        icon={<GroupOutlinedIcon />}
      />
      <Tab
        isActive={tabsState.competitions}
        href="/competitions"
        title={"Cоревнования"}
        icon={<EmojiEventsOutlinedIcon />}
      />
      <Tab
        isActive={tabsState.organization}
        href="/organizations"
        title={"Организации"}
        icon={<AccountBalanceOutlinedIcon />}
      />
    </nav>
  );
};

export default Tabs;
