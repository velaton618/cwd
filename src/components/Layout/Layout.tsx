import { FC } from "react";
import Header from "../Header/Header";
import { LayoutProps } from "./LayoutProps.interface";
import Modal from "../Modal/Modal";
import MobileModal from "../Modal/MobileModal/MobileModal";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Modal />
      <MobileModal />
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
