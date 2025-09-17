import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";
import InputButton from "../../../../elements/input/InputButton";
import { FaRegEye, FaRegEyeSlash, FaSearch } from "react-icons/fa";

const CategoryEdit = ({ onSubmit, toggleModal, props }) => {
  const {
    slugFormat,
    validate,
    editCategory,
    setEditCategory,
    handleEditChange,
    setCategory,
    toggleReadOnly,
    isReadOnly,
    setSlug,
  } = props;
  return (
    <>
      {" "}
      <ModalForm onSubmit={onSubmit}>
        <Modal label={"Edit Data"} toggleModal={() => toggleModal()}>
          <InputGroup
            value={editCategory.id}
            id="id"
            name="id"
            type="hidden"
            label="ID"
            disabled
          />
          <InputGroup
            value={editCategory.category}
            onChange={(e) => {
              handleEditChange(e);
              setEditCategory((prev) => ({
                ...prev,
                slug: slugFormat(e.target.value),
              }));
            }}
            id="category"
            name="category"
            label="Category"
            type="text"
            validate={validate}
            required
          />
          <InputButton
            value={editCategory.slug}
            onChange={(e) => {
              const categoryEditSlug = e.target.value;
              setCategory(categoryEditSlug);
              setSlug(slugFormat(categoryEditSlug));
            }}
            id="slug"
            name="slug"
            label="Slug"
            type="text"
            onClick={toggleReadOnly}
            classname={`${
              isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"
            }`}
            validate={validate}
            required
            readonly={isReadOnly ? { readonly: true } : {}}
          >
            {isReadOnly ? (
              <FaRegEyeSlash className="w-4 h-4" />
            ) : (
              <FaRegEye className="w-4 h-4" />
            )}
          </InputButton>
        </Modal>
      </ModalForm>
    </>
  );
};

export default CategoryEdit;
