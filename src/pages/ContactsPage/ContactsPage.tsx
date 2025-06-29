import { useSelector } from "react-redux";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import { getContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactList from "../../components/ContactList/ContactList";
import { useAppDispatch } from "../../hooks/redux";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    const fetchContacts = async () => await dispatch(getContacts());
    fetchContacts();
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>📞 My Phonebook</h1>

      <div className={css.section}>
        <h2 className={css.subtitle}>Add New Contact</h2>
        <ContactForm />
      </div>

      <div className={css.section}>
        <h2 className={css.subtitle}>Search</h2>
        <SearchBox />
      </div>

      <div className={css.section}>
        {loading && <Loader />}
        {error && (
          <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
        )}
        <ContactList />
      </div>
    </div>
  );
}
