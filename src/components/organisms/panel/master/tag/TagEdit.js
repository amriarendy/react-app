import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";

const TagEdit = ({ onSubmit, toggleModal, props }) => {
  const { editTag, setEditTag, validate } = props; // ✅ destructure correctly

  return (
    <>
      <ModalForm onSubmit={onSubmit}>
        <Modal label={"Edit Data"} toggleModal={() => toggleModal()}>
          <InputGroup
            value={editTag.id}
            id="id"
            name="id"
            type="hidden"
            label="ID"
            disabled
          />
          <InputGroup
            value={editTag.tag}
            onChange={(e) => setEditTag({ ...editTag, tag: e.target.value })}
            id="tag"
            name="tag"
            label="Tag"
            type="text"
            validate={validate}
            required
          />
        </Modal>
      </ModalForm>
    </>
  );
};

export default TagEdit;
