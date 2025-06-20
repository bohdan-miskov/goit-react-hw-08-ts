import { NavLink } from "react-router";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <ul className={css.authList}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? clsx(css.active, css.link) : css.link
          }
          to="/login"
        >
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? clsx(css.active, css.link) : css.link
          }
          to="/register"
        >
          Sign up
        </NavLink>
      </li>
    </ul>
  );
}
