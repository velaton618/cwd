import { TabProps } from "@mui/material";
import React from "react";

import s from "./Tab.module.css";

const Tab: React.FC<TabProps> = ({ icon, title }) => {
  return (
    <div className={s.tab}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default Tab;
