import { useState } from "react";
import InputGroup from "../../../elements/input";
import InputButton from "../../../elements/input/InputButton";
import OptionGroup from "../../../elements/input/OptionGroup";
import CheckBoxGroup from "../../../elements/checkbox";
import TextAreaGroup from "../../../elements/textarea";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../../../elements/button/Button";

const Form = () => {
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };
  return (
    <>
      <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Form
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="input-text"
                name="input-text"
                label="Input Text"
                type="text"
                placeholder={"Type Here"}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <InputGroup
                value={""}
                onChange={""}
                id="input-password"
                name="input-password"
                label="Input Password"
                type="password"
                placeholder={"••••••••••"}
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="input-email"
                name="input-email"
                label="Input Email"
                type="email"
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="input-number"
                name="input-number"
                label="Input Number"
                type="number"
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="input-date"
                name="input-date"
                label="Input Date"
                type="date"
                required
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="input-time"
                name="input-time"
                label="Input Time"
                type="time"
                required
              />
            </div>
            <div className="w-full">
              <OptionGroup
                id={"input-option"}
                name={"input-option"}
                label={"Input Option"}
                required={true}
                caption={"Ext: jpg, jpeg, png, svg. Max: 1024MB"}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "option 1", value: "option 1", label: "option 1" },
                  { key: "option 2", value: "option 2", label: "option 2" },
                ]}
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={""}
                onChange={""}
                id="input-file"
                name="input-file"
                label="Input File"
                type="file"
                required
              />
            </div>
            <div className="w-full">
              <CheckBoxGroup
                id="input-checkbox"
                name="input-checkbox"
                label="Input Checkbox"
                type="checkbox"
                description="I agree with the terms and conditions."
                required
              />
            </div>
            <div className="w-full">
              <CheckBoxGroup
                id="input-radio"
                name="input-radio"
                label="Input Radio"
                type="radio"
                description="I agree with the terms and conditions."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <InputButton
                value={""}
                onChange={""}
                id="input-button"
                name="input-button"
                label="Input Button"
                type="text"
                classname={`${
                  isReadOnly
                    ? "bg-gray-300 dark:bg-gray-700"
                    : "dark:bg-gray-100"
                }`}
                onClick={toggleReadOnly}
                placeholder={"••••••••••"}
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
                value={""}
                onChange={""}
                id="input-text"
                name="input-text"
                label="Input Textarea"
                rows={4}
                required
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

export default Form;
