import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../elements/card/Card";
import Input from "../../../../elements/input/Input";
import InputGroup from "../../../../elements/input";
import InputButton from "../../../../elements/input/InputButton";
import InputForm from "../../../../elements/input/InputForm";
import Button from "../../../../elements/button/Button";

const InputFormElement = () => {
  return (
    <>
      <div className="w-full">
        <Card header={"Input Form"}>
          <InputForm
            value={""}
            onChange={""}
            id="input-form"
            name="input-form"
            label="Input form"
            type="text"
            onClick={""}
            onSubmit={""}
            classname={""}
            placeholder={"Form Input"}
            required
          >
            <Button
              type="button"
              classname={
                "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white"
              }
            >
              <FaSearch
                className="-mr-1 h-5 w-5 text-gray-400"
                fill="currentColor"
                aria-hidden="true"
              />
            </Button>
          </InputForm>
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Input Form Code"}>
          <div className="rounded rounded-lg bg-gray-200 dark:bg-gray-900">
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`
import InputForm from "@/src/components/elements/input/InputForm";
import Button from "@/src/components/elements/button/Button";
import { FaSearch } from "react-icons/fa";

<InputForm
  value={""}
  onChange={""}
  onClick={""}
  onSubmit={""}
  id="input-form"
  name="input-form"
  label="Input form"
  classname={""}
  placeholder={"Form Input"}
  required
>
  <Button
  type="button"
  classname={
    "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white"
  }>
    <FaSearch
    className="-mr-1 h-5 w-5 text-gray-400"
    fill="currentColor"
    aria-hidden="true" />
  </Button>
</InputForm>`}
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InputFormElement;
