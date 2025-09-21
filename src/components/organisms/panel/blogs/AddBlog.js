import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import OptionGroup from "../../../elements/input/OptionGroup";
import TextAreaGroup from "../../../elements/textarea";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import InputButton from "../../../elements/input/InputButton";
import { useState } from "react";
import { slugFormat } from "../../../../libs/utils/text";
import FormGroup from "../../../elements/form";

const AddBlog = ({ onSubmit, toggleModal, props }) => {
  // const { validate } = props;

  const [isReadOnly, setReadOnly] = useState(true);
  const [useTitle, setTitle] = useState("");
  const [useSlug, setSlug] = useState("");

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      <FormGroup label={"Create Data"}>
        <div className="sm:col-span-2">
          <InputGroup
            value={useTitle}
            onChange={(e) => {
              const titleAddSlug = e.target.value;
              setTitle(titleAddSlug);
              setSlug(slugFormat(titleAddSlug));
            }}
            id="title"
            name="title"
            label="Title"
            type="text"
            placeholder={"Type Here"}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <InputButton
            value={useSlug}
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
            required
            readonly={isReadOnly ? { readonly: true } : {}}
          >
            {" "}
            {isReadOnly ? (
              <FaRegEyeSlash className="w-4 h-4" />
            ) : (
              <FaRegEye className="w-4 h-4" />
            )}
          </InputButton>
        </div>
        <div className="sm:col-span-2">
          <TextAreaGroup
            id="description"
            name="description"
            label="Description"
            placeholder="Description for meta seo"
            rows={4}
          />
        </div>
        <div className="w-full">
          <OptionGroup
            id={"category"}
            name={"category"}
            label={"Category"}
            required={true}
            selected={[{ key: "", value: "", label: "Choose Your Selected" }]}
            data={[
              {
                key: "software-engginer",
                value: "software-engginer",
                label: "Software Engginer",
              },
              {
                key: "mechine-learning",
                value: "mechine-learning",
                label: "Mechine Learning",
              },
              {
                key: "data-scientist",
                value: "data-scientist",
                label: "Data Scientist",
              },
              { key: "ui/ux", value: "ui/ux", label: "ui/ux" },
              {
                key: "data-engginer",
                value: "data-engginer",
                label: "Data Engginer",
              },
              {
                key: "ai-engginer",
                value: "ai-engginer",
                label: "AI Engginer",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <OptionGroup
            id={"hashtag"}
            name={"hashtag"}
            label={"Hashtag"}
            selected={[{ key: "", value: "", label: "Choose Your Selected" }]}
            data={[
              {
                key: "software-engginer",
                value: "software-engginer",
                label: "Software Engginer",
              },
              {
                key: "mechine-learning",
                value: "mechine-learning",
                label: "Mechine Learning",
              },
              {
                key: "data-scientist",
                value: "data-scientist",
                label: "Data Scientist",
              },
              { key: "ui/ux", value: "ui/ux", label: "ui/ux" },
              {
                key: "data-engginer",
                value: "data-engginer",
                label: "Data Engginer",
              },
              {
                key: "ai-engginer",
                value: "ai-engginer",
                label: "AI Engginer",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <InputGroup
            value={""}
            onChange={""}
            id="thumbnail"
            name="thumbnail"
            label="Thumbnail"
            type="file"
            caption="Ext: jpg, jpeg, png, svg. Max: 1024MB"
          />
        </div>
        <div className="w-full">
          <InputGroup
            value={""}
            onChange={""}
            id="document"
            name="document"
            label="Document"
            type="file"
            caption="Ext: pdf, doc, excel,, images, svg. Max: 1024MB"
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaGroup id="body" name="body" label="Body" rows={8} required />
        </div>
        <div className="mt-3">
          <Button
            id={"btnSave"}
            route={"button"}
            classname={
              "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
            }
          >
            Save
          </Button>
        </div>
      </FormGroup>
    </>
  );
};

export default AddBlog;
