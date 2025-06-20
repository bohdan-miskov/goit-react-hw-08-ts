import css from "./ErrorMessage.module.css";
import { Props } from "./ErrorMessage.types";

export default function ErrorMessage({ children }: Props) {
  return <p className={css.message}>{children}</p>;
}
