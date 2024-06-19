import React from "react";

import s from "./Tab.module.scss";
import { ITabProps } from "../../../../types/ITabProps.interface";

const Tab: React.FC<ITabProps> = ({ icon, title, isActive, href }) => {
  return (
    <a href={href} className={`${s.tab} ${isActive ? s.active : ""}`}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </a>
  );
};

export default Tab;
