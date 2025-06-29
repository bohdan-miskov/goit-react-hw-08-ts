import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";
import { UserLogInData } from "../../types/auth";

export default function LoginForm() {
  const id = useId();
  const dispatch = useAppDispatch();
  const handleLogIn = (userData: UserLogInData) => dispatch(logIn(userData));

  const handleSubmit = (
    values: UserLogInData,
    helpers: FormikHelpers<UserLogInData>
  ) => {
    handleLogIn({
      email: values.email,
      password: values.password,
    });
    helpers.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Is required"),
    password: Yup.string()
      .min(8, "Must be minimum 8 characters")
      .required("Is required"),
  });

  const initialValues: UserLogInData = {
    email: "",
    password: "",
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={`${id}-email`}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          id={`${id}-email`}
          name="email"
        />
        <ErrorMessage className={css.errorMsg} name="email" component="span" />

        <label className={css.label} htmlFor={`${id}-password`}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          id={`${id}-password`}
          name="password"
        />
        <ErrorMessage
          className={css.errorMsg}
          name="password"
          component="span"
        />

        <button className={css.buttonSub} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
