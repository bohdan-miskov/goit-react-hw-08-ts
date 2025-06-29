import css from "./Loader.module.css";
import { PropagateLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      className={css.loader}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <PropagateLoader size={15} color="#1976d2" />
      <span className={css.visuallyHidden}>Loading...</span>
    </div>
  );
}
