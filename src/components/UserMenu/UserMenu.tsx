import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks/redux";

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const handleLogOut = () => dispatch(logOut());
  const username = useSelector(selectAuthUser).name;

  return (
    <div className={css.container}>
      <p className={css.text}>{`Welcome,${username}`}</p>
      <button className={css.btn} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
