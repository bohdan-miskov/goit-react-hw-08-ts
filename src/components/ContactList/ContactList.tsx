import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectViewedContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const viewedContacts = useSelector(selectViewedContacts);

  return (
    <section className={css.container}>
      <h2 className={css.title}>Your Contacts</h2>
      <ul className={css.list}>
        {viewedContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </section>
  );
}
