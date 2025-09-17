import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";
import { FaRegEye, FaRegEyeSlash, FaSearch } from "react-icons/fa";

const CategoryAdd = ({ onSubmit, toggleModal, props }) => {
  const { slugFormat, validate, category, setCategory, slug, setSlug } = props;
  return (
    <>
      {" "}
      <ModalForm onSubmit={onSubmit}>
        <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
          <InputGroup
            value={category}
            onChange={(e) => {
              const categoryAddSlug = e.target.value;
              setCategory(categoryAddSlug);
              setSlug(slugFormat(categoryAddSlug));
            }}
            id={"category"}
            name={"category"}
            label={"Category"}
            type={"text"}
            validate={validate}
            required={true}
          />
          <InputGroup
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            id={"slug"}
            name={"slug"}
            label={"Slug"}
            type={"text"}
            validate={validate}
            required={true}
          />
        </Modal>
      </ModalForm>
    </>
  );
};

export default CategoryAdd;
