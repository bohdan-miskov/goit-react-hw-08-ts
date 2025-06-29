import { NavLink } from "react-router";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <div aria-label="Authentication navigation">
      <ul className={css.authList}>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
          >
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
