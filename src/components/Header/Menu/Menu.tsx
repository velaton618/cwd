import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RuFlag from "../../../assets/ru_flag.svg";
import { closeModal, openModal } from "../../../redux/slices/modalSlice";
import { ModalStage } from "../../../types/ModalStage";
import { closeMenu, openMenu } from "../../../redux/slices/menuSlice";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import s from "./Menu.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import Tab from "../Tabs/Tab/Tab";

const Menu = () => {
  const dispatch = useAppDispatch();
  const stage = useAppSelector((state) => state.modal.stage);
  const isModalOpened = useAppSelector((state) => state.modal.isOpened);
  const isOpened = useAppSelector((state) => state.menu.isOpened);
  const path = window.location.href.split("://")[1].split("/")[1];
  const tabsState = {
    feed: path.includes("feed") || path === "",
    marketplace: path.includes("marketplace"),
    ratings: path.includes("ratings"),
    competitions: path.includes("competitions"),
    organization: path.includes("organizations"),
  };

  const [language, setLanguage] = useState("ru");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  function handleClick() {
    if (stage !== ModalStage.Done) {
      dispatch(isModalOpened ? closeModal() : openModal());
    } else {
      dispatch(isOpened ? closeMenu() : openMenu());
    }
  }

  useEffect(() => {
    if (isOpened || isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpened, isOpened]);

  return (
    <div className={s.container}>
      <button className={s.menuBtn} onClick={handleClick}>
        <DragHandleIcon />
      </button>

      <div className={`${s.menu} ${isOpened && s.active}`}>
        <div className={s.top}>
          <Logo />
          <button className={s.menuBtn} onClick={handleClick}>
            <CloseOutlinedIcon />
          </button>
        </div>

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

        <Select
          sx={{
            width: "100%",
            "& fieldset": { border: "none" },
            "& .languageItem": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          value={language}
          onChange={handleChange}
          className={`${s.languageSelect} demo-select-small-label`}
        >
          <MenuItem className="languageItem" value={"ru"}>
            <img width={30} height={12} src={RuFlag} />
            <span className={s.lang}>RU</span>
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Menu;
