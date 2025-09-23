import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import OptionGroup from "../../../elements/input/OptionGroup";
import TextAreaGroup from "../../../elements/textarea";
import FormGroup from "../../../elements/form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import InputButton from "../../../elements/input/InputButton";
import { slugFormat } from "../../../../libs/utils/text";

const EditBlog = ({ onSubmit, props }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    category,
    setCategory,
    thumbnail,
    setThumbnail,
    author,
    setAuthor,
    slug,
    setSlug,
    publishedAt,
    setPublishedAt,
    validate,
  } = props;

  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      <FormGroup label={"Edit Data"} onSubmit={onSubmit}>
        <div className="sm:col-span-2">
          <InputGroup
            value={title}
            onChange={(e) => {
              const titleSlug = e.target.value;
              setTitle(titleSlug);
              setSlug(slugFormat(titleSlug));
            }}
            id="title"
            name="title"
            label="Title"
            type="text"
            placeholder={"Type Here"}
            validate={validate.title}
          />
        </div>
        <div className="sm:col-span-2">
          <InputButton
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            id="slug"
            name="slug"
            label="Slug"
            type="text"
            validate={validate.slug}
            classname={`${
              isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"
            }`}
            onClick={toggleReadOnly}
            placeholder={"Type Here"}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            label="Description"
            placeholder="Description for meta seo"
            rows={4}
            validate={validate.description}
          />
        </div>
        <div className="w-full">
          <OptionGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id={"category"}
            name={"category"}
            label={"Category"}
            validate={validate.category}
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
            onChange={(e) => setThumbnail(e.target.files[0])}
            id="thumbnail"
            name="thumbnail"
            label="Thumbnail"
            type="file"
            caption="Ext: jpg, jpeg, png, svg. Max: 1024MB"
            validate={validate.thumbnail}
          />
        </div>
        <div className="w-full">
          <InputGroup
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            id="publishedAt"
            name="publishedAt"
            label="Date Post"
            type="date"
            caption="Ext: pdf, doc, excel,, images, svg. Max: 1024MB"
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaGroup
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="body"
            name="body"
            label="Body"
            rows={8}
            validate={validate.body}
          />
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

export default EditBlog;
