import DragHandleIcon from "@mui/icons-material/DragHandle";
import s from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={s.menu}>
      <button className={s.btn}>
        <DragHandleIcon />
      </button>
    </div>
  );
};

export default Menu;
