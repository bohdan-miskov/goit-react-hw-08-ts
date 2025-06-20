import { useDispatch, useSelector } from "react-redux";
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

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    const fetchContacts = async () => await dispatch(getContacts());
    fetchContacts();
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage>Something was wrong</ErrorMessage>}
      <ContactList />
    </>
  );
}
