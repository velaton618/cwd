import { FC } from "react";
import Header from "../Header/Header";
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
