import { useDispatch } from "react-redux";
import s from "./CloseButton.module.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { closeModal } from "../../../redux/slices/modalSlice";

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <button className={s.closeBtn} onClick={() => dispatch(closeModal())}>
      <CloseOutlinedIcon />
    </button>
  );
};

export default CloseButton;
