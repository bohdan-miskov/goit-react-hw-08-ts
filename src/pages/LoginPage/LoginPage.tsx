import css from "./LoginPage.module.css";
import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function LoginPage() {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  return (
    <>
      <h1 className={css.title}>Log in</h1>
      <LoginForm />
      {loading && <Loader />}
      {error && <ErrorMessage>Something was wrong</ErrorMessage>}
    </>
  );
}
