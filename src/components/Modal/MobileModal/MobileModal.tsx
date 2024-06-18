import s from "./MobileModal.module.scss";
import LoginText from "../../LoginText/LoginText";
import PhoneInput from "../../PhoneInput/PhoneInput";
import SendButton from "../../SendButton/SendButton";
import Registration from "../../Registration/Registration";
import Logo from "../../../assets/modal/logo.svg";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { ModalStage } from "../../../types/ModalStage";
import RegisterText from "../../RegisterText/RegisterText";
import Rules from "../../Rules/Rules";
import Login from "../../Login/Login";

const MobileModal = () => {
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const stage = useAppSelector((state) => state.modal.stage);
  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).id === "mobileModal") {
      dispatch(closeModal());
    }
  }

  return (
    <>
      <div className={`${s.modalBlurer} ${isOpened && s.active}`}></div>
      <div
        id="mobileModal"
        onClick={handleClick}
        className={`${s.modal} ${isOpened ? s.active : ""}`}
      >
        <div className={s.inner}>
          <img src={Logo} className={s.logo} />
          {stage === ModalStage.Login && (
            <>
              <LoginText />
              <PhoneInput />
              <SendButton />
              <Registration />
            </>
          )}

          {stage === ModalStage.Register && (
            <>
              <RegisterText />
              <PhoneInput />
              <SendButton />
              <Rules />
              <Login />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileModal;
