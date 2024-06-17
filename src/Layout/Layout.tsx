import React, { FC, ReactNode } from "react";
import Header from "../components/Header/Header";
import { LayoutProps } from "./LayoutProps.interface";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
