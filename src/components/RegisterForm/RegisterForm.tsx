import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./RegisterForm.module.css";
import { signUp } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";
import { UserRegisterData } from "../../types/auth";

export default function RegisterForm() {
  const id = useId();
  const dispatch = useAppDispatch();
  const handleSignUp = (user: UserRegisterData) => dispatch(signUp(user));

  const handleSubmit = (
    values: UserRegisterData,
    helpers: FormikHelpers<UserRegisterData>
  ) => {
    handleSignUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    helpers.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Must be minimum 2 characters")
      .max(30, "Must be maximum 30 characters")
      .required("Is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Is required"),
    password: Yup.string()
      .min(8, "Must be minimum 8 characters")
      .required("Is required"),
  });

  const initialValues: UserRegisterData = {
    name: "",
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
        <label className={css.label} htmlFor={`${id}-name`}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          id={`${id}-name`}
          name="name"
        />
        <ErrorMessage className={css.errorMsg} name="name" component="span" />

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
          Sign up
        </button>
      </Form>
    </Formik>
  );
}
