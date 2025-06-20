import style from "./Text.module.css";
import { Props } from "./Text.types";

const Text = ({ children, textAlign = "", marginBottom = "0" }: Props) => {
  return (
    <p
      className={[
        style["text"],
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default Text;
