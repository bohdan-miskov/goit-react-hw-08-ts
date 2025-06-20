import css from "./RegisterPage.module.css";
import { useSelector } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function RegisterPage() {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  return (
    <>
      <h1 className={css.title}>Sign up</h1>
      <RegisterForm />
      {loading && <Loader />}
      {error && <ErrorMessage>Something was wrong</ErrorMessage>}
    </>
  );
}
