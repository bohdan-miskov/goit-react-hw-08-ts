import { ChangeEvent, useState } from "react";
import Modal from "react-modal";
import css from "./ConfirmModal.module.css";
import { Props } from "./ConfirmModal.types";

export default function ConfirmModal({
  modalIsOpen,
  closeModal,
  onConfirm,
  onModalDisable,
  type,
}: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "2rem",
      borderRadius: "12px",
      width: "90%",
      maxWidth: "400px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1000,
    },
  };

  const [showing, setShowing] = useState<boolean>(true);

  Modal.setAppElement("#root");
  const handleConfirm = () => {
    onConfirm();
    if (!showing) {
      onModalDisable();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowing(!event.target.value);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      closeTimeoutMS={200}
    >
      <h3 className={css.header}>Confirm</h3>
      <p className={css.message}>{`Do you confirm the ${type} operation?`}</p>
      <label className={css.checkboxLabel}>
        <input
          className={css.checkbox}
          type="checkbox"
          checked={!showing}
          onChange={handleChange}
        />
        Don't show anymore
      </label>
      <div className={css.buttons}>
        <button className={css.buttonConfirm} onClick={handleConfirm}>
          Confirm
        </button>
        <button className={css.buttonCancel} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
