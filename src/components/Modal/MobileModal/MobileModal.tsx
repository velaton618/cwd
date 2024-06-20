import s from "./MobileModal.module.scss";
import LoginText from "../../LoginText/LoginText";
import PhoneInput from "../../PhoneInput/PhoneInput";
import SendButton from "../../SendButton/SendButton";
import Registration from "../../Registration/Registration";
import Logo from "../../../assets/modal/logo.svg";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { closeModal, setStage } from "../../../redux/slices/modalSlice";
import { ModalStage } from "../../../types/ModalStage";
import RegisterText from "../../RegisterText/RegisterText";
import Rules from "../../Rules/Rules";
import Login from "../../Login/Login";
import CodeText from "../../CodeText/CodeText";
import CodeInput from "../../CodeInput/CodeInput";
import CodeButton from "../../CodeButton/CodeButton";
import ChoiceTitle from "../../ChoiceTitle/ChoiceTitle";
import SportsChoice from "../../SportsChoice/SportsChoice";
import ChoiceButtons from "../../ChoiceButtons/ChoiceButtons";
import AthletesChoice from "../../AthletesChoice/AthletesChoice";
import OrganizationsChoice from "../../OrganizationsChoice/OrganizationsChoice";
import ProfileStage from "../../ProfileStage/ProfileStage";
import CloseButton from "../../CloseButton/CloseButton";

const MobileModal = () => {
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const stage = useAppSelector((state) => state.modal.stage);
  const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if ((e.target as HTMLElement).id === "mobileModal") {
      dispatch(closeModal());
    }
  }

  if (stage === ModalStage.Done) dispatch(closeModal());

  return (
    <>
      <div className={`${s.modalBlurer} ${isOpened && s.active}`}></div>
      <div
        id="mobileModal"
        onClick={handleClick}
        className={`${s.modal} ${isOpened ? s.active : ""}`}
      >
        <div className={s.inner}>
          <CloseButton />
          {stage === ModalStage.Login && (
            <>
              <img src={Logo} className={s.logo} />
              <LoginText />
              <PhoneInput />
              <SendButton nextStage={ModalStage.LoginCode} />
              <Registration />
            </>
          )}

          {stage === ModalStage.Register && (
            <>
              <img src={Logo} className={s.logo} />
              <RegisterText />
              <PhoneInput />
              <SendButton nextStage={ModalStage.RegisterCode} />
              <Rules />
              <Login />
            </>
          )}

          {stage === ModalStage.LoginCode && (
            <>
              <img src={Logo} className={s.logo} />
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
              <img src={Logo} className={s.logo} />
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
              <ChoiceButtons step={1} />
            </>
          )}

          {stage === ModalStage.AthletesChoice && (
            <>
              <ChoiceTitle
                step={2}
                stepsCount={4}
                title="Выберите спортсмена"
                description="Выберите одного или нескольких спортсменов из списка предложенных."
              />
              <AthletesChoice />
              <ChoiceButtons step={2} />
            </>
          )}

          {stage === ModalStage.OrganizationsChoice && (
            <>
              <ChoiceTitle
                step={3}
                stepsCount={4}
                title="Выберите спортивные организации"
                description="Выберите  организации из списка предложенных."
              />
              <OrganizationsChoice />
              <ChoiceButtons step={3} />
            </>
          )}

          {stage === ModalStage.Profile && (
            <>
              <ChoiceTitle
                step={4}
                stepsCount={4}
                title="Заполните основные данные"
              />
              <ProfileStage />
              <ChoiceButtons step={4} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileModal;
