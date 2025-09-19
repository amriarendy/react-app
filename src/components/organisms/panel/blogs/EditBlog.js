import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import OptionGroup from "../../../elements/input/OptionGroup";
import TextAreaGroup from "../../../elements/textarea";

const EditBlog = () => {
  return (
    <>
      <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Data
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="title"
                name="title"
                label="Title"
                type="text"
                placeholder={"Type Here"}
                required
              />
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
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
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
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
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
              <TextAreaGroup
                id="body"
                name="body"
                label="Body"
                rows={8}
                required
              />
            </div>
          </div>
          <div className="mt-3">
            <Button
              id={"btnSave"}
              route={"button"}
              classname={
                "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
              }
            >
              Upadate
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
