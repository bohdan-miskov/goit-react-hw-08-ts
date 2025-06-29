import AppBar from "../AppBar/AppBar";
import { Props } from "./Layout.types";

export default function Layout({ children }: Props) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
