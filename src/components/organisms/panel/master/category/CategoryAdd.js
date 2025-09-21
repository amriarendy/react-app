import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import InputButton from "../../../../elements/input/InputButton";
import { useState } from "react";

const CategoryAdd = ({ onSubmit, toggleModal, props }) => {
  const { slugFormat, validate, category, setCategory, slug, setSlug } = props;
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      {" "}
      <ModalForm onSubmit={onSubmit}>
        <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
          <InputGroup
            value={category}
            onChange={(e) => {
              const categorySlug = e.target.value;
              setCategory(categorySlug);
              setSlug(slugFormat(categorySlug));
            }}
            id={"category"}
            name={"category"}
            label={"Category"}
            type={"text"}
            validate={validate.category}
          />
          <InputButton
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            id="slug"
            name="slug"
            label="Slug"
            type="text"
            classname={`${
              isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"
            }`}
            onClick={toggleReadOnly}
            placeholder={"Type Here"}
            readonly={isReadOnly ? { readonly: true } : {}}
            validate={validate.slug}
          >
            {" "}
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

export default CategoryAdd;
