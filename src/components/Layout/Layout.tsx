import { FC } from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import MobileModal from "../Modal/MobileModal/MobileModal";
import { ILayoutProps } from "../../types/ILayoutProps";

const Layout: FC<ILayoutProps> = ({ children }) => {
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
