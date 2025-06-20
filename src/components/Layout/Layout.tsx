import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Props } from "./Layout.types";

export default function Layout({ children }: Props) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
