// Node modules.
import React, { useContext } from "react";
// Relative imports.
import "./styles.scss";
import { MODAL_TYPES } from "./constants";
import { ModalContext } from "./context";

const Modal = () => {
  const [modalType] = useContext(ModalContext);

  // Derive the modal instance.
  const ModalInstance = MODAL_TYPES[modalType];

  // Escape early if no modal was found with that key.
  if (!ModalInstance) {
    return null;
  }

  // Render the modal instance.
  return <ModalInstance />;
};

export default Modal;
