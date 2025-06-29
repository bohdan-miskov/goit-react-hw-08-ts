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
    <div className={css.container}>
      <h1 className={css.title}>Create your Contact Book account ✨</h1>
      <p className={css.subtitle}>
        Sign up to start saving and managing your contacts.
      </p>
      <div className={css.formWrapper}>
        <RegisterForm />
        {loading && <Loader />}
        {error && (
          <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
        )}
      </div>
    </div>
  );
}
