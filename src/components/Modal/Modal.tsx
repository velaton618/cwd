import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import s from "./Modal.module.scss";
import { closeModal, setStage } from "../../redux/slices/modalSlice";
import Logo from "../../assets/modal/logo.svg";
import CloseButton from "../CloseButton/CloseButton";
import LoginText from "../LoginText/LoginText";
import PhoneInput from "../PhoneInput/PhoneInput";
import Registration from "../Registration/Registration";
import SendButton from "../SendButton/SendButton";
import { ModalStage } from "../../types/ModalStage";
import RegisterText from "../RegisterText/RegisterText";
import Login from "../Login/Login";
import Rules from "../Rules/Rules";
import CodeText from "../CodeText/CodeText";
import CodeInput from "../CodeInput/CodeInput";
import CodeButton from "../CodeButton/CodeButton";
import ChoiceTitle from "../ChoiceTitle/ChoiceTitle";
import SportsChoice from "../SportsChoice/SportsChoice";
import ChoiceButtons from "../ChoiceButtons/ChoiceButtons";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpened);
  const stage = useAppSelector((state) => state.modal.stage);
  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).id === "modal") {
      dispatch(closeModal());
    }
  }

  if (stage === ModalStage.Done) dispatch(closeModal());

  return (
    <div
      className={`${s.modal} ${isOpen ? s.active : ""} ${stage === ModalStage.SportsChoice || stage === ModalStage.AthletesChoice || stage === ModalStage.OrganizationsChoice ? s.big : ""}`}
      id="modal"
      onClick={handleClick}
    >
      <div className={s.inner}>
        <CloseButton />
        <div className={s.content}>
          {stage === ModalStage.Login && (
            <>
              <img src={Logo} />
              <LoginText />
              <PhoneInput />
              <SendButton nextStage={ModalStage.LoginCode} />
              <Registration />
            </>
          )}

          {stage === ModalStage.Register && (
            <>
              <img src={Logo} />
              <RegisterText />
              <PhoneInput />
              <SendButton nextStage={ModalStage.RegisterCode} />
              <Rules />
              <Login />
            </>
          )}

          {stage === ModalStage.LoginCode && (
            <>
              <img src={Logo} />
              <CodeText />
              <CodeInput />
              <CodeButton
                onClick={(_) => {
                  dispatch(setStage(ModalStage.Done));
                  dispatch(closeModal());
                }}
              />
            </>
          )}

          {stage === ModalStage.RegisterCode && (
            <>
              <img src={Logo} />
              <CodeText />
              <CodeInput />
              <CodeButton
                onClick={(_) => {
                  dispatch(setStage(ModalStage.SportsChoice));
                }}
              />
            </>
          )}

          {stage === ModalStage.SportsChoice && (
            <>
              <ChoiceTitle
                step={1}
                stepsCount={4}
                title="Выберите вид спорта"
              />
              <SportsChoice />
              <ChoiceButtons step={1} stepsCount={4} />
            </>
          )}

          {stage === ModalStage.AthletesChoice && <>Not yet done</>}

          {stage === ModalStage.OrganizationsChoice && <>Not yet done</>}

          {stage === ModalStage.Profile && <>Not yet done</>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
