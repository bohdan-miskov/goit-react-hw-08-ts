export type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  onModalDisable: () => void;
  type: string;
};
