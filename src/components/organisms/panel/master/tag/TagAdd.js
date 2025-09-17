import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";

const TagAdd = ({ onSubmit, toggleModal, props }) => {
  const { tag, setTag, validate } = props;
  return (
    <ModalForm onSubmit={onSubmit}>
      <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
        <InputGroup
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          id="tag"
          name="tag"
          label="Tag"
          type="text"
          validate={validate}
          required
        />
      </Modal>
    </ModalForm>
  );
};

export default TagAdd;
