import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { Props } from "./PrivateRoute.types";

export default function PrivateRoute({ component }: Props) {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={"/register"} />;
}
