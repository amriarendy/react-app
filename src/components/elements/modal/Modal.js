import ModalHead from "./ModalHead";
import ModalBody from "./ModalBody";
import ModalLabel from "./ModalLabel";

const Modal = ({ children, label, toggleModal }) => {
  return (
    <>
      <ModalHead toggleModal>
        <ModalBody>
          <ModalLabel label={label} toggleModal={toggleModal} />
          {children}
        </ModalBody>
      </ModalHead>
    </>
  );
};

export default Modal;
