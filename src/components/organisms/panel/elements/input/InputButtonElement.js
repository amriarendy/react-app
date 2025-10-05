import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../elements/card/Card";
import Input from "../../../../elements/input/Input";
import InputGroup from "../../../../elements/input";
import InputButton from "../../../../elements/input/InputButton";
import InputForm from "../../../../elements/input/InputForm";
import Button from "../../../../elements/button/Button";

const InputButtonElement = () => {
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };
  return (
    <>
      <div className="w-full">
        <Card header={"Input Button"}>
          <InputButton
            value={""}
            onChange={""}
            id="input-button"
            name="input-button"
            label="Input Button"
            type="text"
            classname={`${
              isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"
            }`}
            onClick={toggleReadOnly}
            placeholder={"Button Input"}
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
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Input Button Code"}>
          <div className="rounded rounded-lg bg-gray-200 dark:bg-gray-900">
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`import InputButton from "@/src/components/elements/input/InputButton";

const [isReadOnly, setReadOnly] = useState(true);
const toggleReadOnly = () => {
  setReadOnly(!isReadOnly);
};

<InputButton
  value={value}
  onChange={onChange}
  id="input-button"
  name="input-button"
  label="Input Button"
  type="text" /password/number/date/time/file/color
  className={\`\${isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"}\`}
  onClick={toggleReadOnly}
  placeholder={"Button Input"}
  required
  readonly={isReadOnly ? { readonly: true } : {}}
  >
  {" "}
  {isReadOnly ? (
    <FaRegEyeSlash className="w-4 h-4" />
  ) : (
    <FaRegEye className="w-4 h-4" />
  )}
</InputButton>`}
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InputButtonElement;
