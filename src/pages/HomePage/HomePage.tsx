import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to your Contact Book 📒</h1>
      <p className={css.subtitle}>
        Save, search and manage your contacts easily.
      </p>
      <Link to="/contacts" className={css.button}>
        Go to Contacts
      </Link>
    </div>
  );
}
