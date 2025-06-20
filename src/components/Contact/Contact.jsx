import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/contacts/operations";
import { setEditId } from "../../redux/contacts/slice";
import toast from "react-hot-toast";
import { selectEnabled } from "../../redux/removeModal/selectors";
import { useRef, useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { disableModal } from "../../redux/removeModal/slice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const modalEnabled = useSelector(selectEnabled);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeId = useRef("");
  const handleConfirm = (id) => {
    removeId.current = id;
    if (modalEnabled) {
      setModalIsOpen(true);
    } else {
      handleDeleteContact();
    }
  };
  const handleDeleteContact = () =>
    dispatch(removeContact(removeId.current))
      .unwrap()
      .then(() => toast.success("Contact removed successfully!"))
      .catch(() => {});
  const handleSetEditContact = (id) => dispatch(setEditId(id));
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <li className={css.container}>
        <div>
          <div>
            <IoPerson className={css.icon} />
            <p className={css.info}>{name}</p>
          </div>
          <div>
            <BsFillTelephoneFill className={css.icon} />
            <a className={css.info} href={`tel:${number}`}>
              {number}
            </a>
          </div>
        </div>
        <ul className={css.btnList}>
          <li>
            <button
              className={css.btnOps}
              type="button"
              onClick={() => handleSetEditContact(id)}
            >
              <CiEdit />
            </button>
          </li>
          <li>
            <button
              className={css.btnOps}
              type="button"
              onClick={() => handleConfirm(id)}
            >
              <MdDelete />
            </button>
          </li>
        </ul>
      </li>
      <ConfirmModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        onConfirm={handleDeleteContact}
        onModalDisable={() => dispatch(disableModal())}
        type="remove"
      />
    </>
  );
}
