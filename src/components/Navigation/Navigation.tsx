import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <ul className={css.navList}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? clsx(css.active, css.link) : css.link
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? clsx(css.active, css.link) : css.link
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
