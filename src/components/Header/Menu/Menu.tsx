import { useAppDispatch } from "../../../redux/hooks";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import s from "./Menu.module.scss";
import { openModal } from "../../../redux/slices/modalSlice";

const Menu = () => {
  const dispatch = useAppDispatch();

  return (
    <button className={s.menuBtn} onClick={() => dispatch(openModal())}>
      <DragHandleIcon />
    </button>
  );
};

export default Menu;
