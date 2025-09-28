import ModalGroup from "./ModalGroup";
import ModalBody from "./ModalBody";
import ModalLabel from "./ModalLabel";
import ModalFooter from "./ModalFooter";

const Modal = ({ children, label, toggleModal, footerButton }) => {
  return (
    <>
      <ModalGroup toggleModal>
        <ModalLabel label={label} toggleModal={toggleModal} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter footerButton={footerButton} />
      </ModalGroup>
    </>
  );
};

export default Modal;
