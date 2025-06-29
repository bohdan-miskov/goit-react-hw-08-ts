import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>Oops! This page could not be found 🤷‍♀️</p>
    </div>
  );
}
