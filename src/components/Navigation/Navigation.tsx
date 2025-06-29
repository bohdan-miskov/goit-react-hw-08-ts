import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                clsx(css.link, { [css.active]: isActive })
              }
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
