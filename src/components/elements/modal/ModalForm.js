import { FaSave } from "react-icons/fa";
import Button from "../../elements/button/Button";

const ModalForm = ({ children, onSubmit, toggleModal }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {children}
        <Button id={"btnSave"} type={"submit"} onClick={toggleModal}>
          <FaSave className="w-5 h-5 mr-2 -ml-1" />
        </Button>
      </form>
    </>
  );
};

export default ModalForm;
