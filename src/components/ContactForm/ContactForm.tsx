import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useSelector } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import { selectEditingContact } from "../../redux/contacts/selectors";
import { clearEditId } from "../../redux/contacts/slice";
import toast from "react-hot-toast";
import { ContactCreateData, EditContactData } from "../../types/contatcs";
import { useAppDispatch } from "../../hooks/redux";

export default function ContactForm() {
  const id = useId();
  const dispatch = useAppDispatch();
  const editingContact = useSelector(selectEditingContact);

  const handleAddContact = (contact: ContactCreateData) =>
    dispatch(addContact(contact))
      .unwrap()
      .then(() => toast.success("Contact saved successfully!"))
      .catch(() => {});
  const handleEditContact = (editData: EditContactData) =>
    dispatch(editContact(editData))
      .unwrap()
      .then(() => toast.success("Contact saved successfully!"))
      .catch(() => {});

  const handleSubmit = (
    values: ContactCreateData,
    helpers: FormikHelpers<ContactCreateData>
  ) => {
    const newContact = { name: values.name, number: values.number };
    if (editingContact) {
      handleEditContact({
        newContact,
        id: editingContact.id,
      });
      dispatch(clearEditId());
    } else {
      handleAddContact(newContact);
    }
    helpers.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be minimum 3 characters")
      .max(50, "Must be maximum 50 characters")
      .required("Is required"),
    number: Yup.string()
      .phone("UA", "Please enter a valid phone number")
      .required("Is required"),
  });

  const initialValues: ContactCreateData = {
    name: editingContact?.name ?? "",
    number: editingContact?.number ?? "",
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      initialValues={initialValues}
      enableReinitialize={true}
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
        <label className={css.label} htmlFor={`${id}-number`}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          id={`${id}-number`}
          name="number"
        />
        <ErrorMessage className={css.errorMsg} name="number" component="span" />
        <button className={css.buttonAdd} type="submit">
          {editingContact ? "Save contact" : "Add contact"}
        </button>
      </Form>
    </Formik>
  );
}
