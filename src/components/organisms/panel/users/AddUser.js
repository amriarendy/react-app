import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import OptionGroup from "../../../elements/input/OptionGroup";
import TextAreaGroup from "../../../elements/textarea";

const AddUser = () => {
  return (
    <>
      <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create Data
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder={"Type Here"}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="name"
                name="name"
                label="Full Name"
                type="text"
                placeholder={"Type Here"}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder={"••••••••••"}
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="phone"
                name="phone"
                label="Phone"
                type="number"
                placeholder={"628*****/08*****"}
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="photo"
                name="photo"
                label="Photo"
                type="file"
                placeholder={"628*****/08*****"}
                caption="Ext: jpg, jpeg, png, svg. Max: 1024MB"
                required
              />
            </div>
            <div className="w-full">
              <OptionGroup
                id={"gender"}
                name={"gender"}
                label={"Gender"}
                required={true}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "male", value: "male", label: "Male" },
                  { key: "female", value: "female", label: "Female" },
                ]}
              />
            </div>
            <div className="w-full">
              <InputGroup
                id="dob"
                name="dob"
                label="Date of Birth"
                type="date"
                required
              />
            </div>
            <div className="w-full">
              <OptionGroup
                id={"position"}
                name={"position"}
                label={"Position"}
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
                id={"country"}
                name={"country"}
                label={"Country"}
                required={true}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "indonesia", value: "indonesia", label: "Indonesia" },
                  { key: "malaysia", value: "malaysia", label: "Malaysia" },
                  { key: "brunie", value: "brunie", label: "Brunie" },
                  { key: "thailand", value: "thailand", label: "Thailand" },
                  {
                    key: "philippines",
                    value: "philippines",
                    label: "Philippines",
                  },
                  { key: "uk", value: "uk", label: "United Kingdom" },
                  { key: "usa", value: "usa", label: "United State America" },
                  { key: "canada", value: "canada", label: "Canada" },
                ]}
              />
            </div>
            <div className="sm:col-span-2">
              <TextAreaGroup
                id="biography"
                name="biography"
                label="Biography"
                rows={4}
              />
            </div>
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
        </form>
      </div>
    </>
  );
};

export default AddUser;
