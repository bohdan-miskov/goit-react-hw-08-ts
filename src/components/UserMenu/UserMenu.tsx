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
    <div className={css.container} role="region" aria-label="User menu">
      <p className={css.text}>
        Welcome, <span className={css.username}>{username}</span>
      </p>
      <button
        className={css.btn}
        onClick={handleLogOut}
        type="button"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
