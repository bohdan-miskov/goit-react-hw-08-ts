import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
      </nav>
      <div className={css.authSection}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
