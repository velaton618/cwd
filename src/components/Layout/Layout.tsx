import { FC } from "react";
import Header from "../Header/Header";
import { LayoutProps } from "./LayoutProps.interface";
import Modal from "../Modal/Modal";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Modal />
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
