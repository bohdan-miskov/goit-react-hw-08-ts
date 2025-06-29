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
      <div className={css.container}>
        <h1 className={css.title}>Log in to your Contact Book 📘</h1>
        <p className={css.subtitle}>Access your saved contacts in seconds.</p>
        <div className={css.formWrapper}>
          <LoginForm />
          {loading && <Loader />}
          {error && (
            <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
          )}
        </div>
      </div>
    </>
  );
}
