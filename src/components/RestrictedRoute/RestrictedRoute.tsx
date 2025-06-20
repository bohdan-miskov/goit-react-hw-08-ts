import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { Props } from "./RestrictedRoute.types";

export default function RestrictedRoute({ component }: Props) {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={"/contacts"} /> : component;
}
