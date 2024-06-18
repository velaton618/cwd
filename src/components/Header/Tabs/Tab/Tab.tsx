import React from "react";

import s from "./Tab.module.scss";
import { TabProps } from "./TabProps.interface";

const Tab: React.FC<TabProps> = ({ icon, title, isActive, href }) => {
  return (
    <a href={href} className={`${s.tab} ${isActive ? s.active : ""}`}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </a>
  );
};

export default Tab;
