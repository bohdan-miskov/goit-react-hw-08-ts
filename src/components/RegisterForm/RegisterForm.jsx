import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";

export default function RegisterForm() {
  const id = useId();
  const dispatch = useDispatch();
  const handleSignUp = (user) => dispatch(signUp(user));

  const handleSubmit = (values, helpers) => {
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

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      initialValues={initialValues}
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
