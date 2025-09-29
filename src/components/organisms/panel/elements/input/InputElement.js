import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../elements/card/Card";
import Input from "../../../../elements/input/Input";
import InputGroup from "../../../../elements/input";
import InputButton from "../../../../elements/input/InputButton";
import InputForm from "../../../../elements/input/InputForm";
import Button from "../../../../elements/button/Button";

const InputElement = () => {
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };
    return (
      <>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
          {/* Input */}
          <div className="w-full">
            <Card header={"Input"}>
                <Input
                  id="input"
                  name="input"
                  type="text"
                  placeholder="Choose text"
                  required
                />
                <Input
                  id="input"
                  name="input"
                  type="password"
                  placeholder="Choose password"
                  required
                />
                <Input
                  id="input"
                  name="input"
                  type="number"
                  placeholder="Choose number"
                  required
                />
                <Input
                  id="input"
                  name="input"
                  type="date"
                  placeholder="Choose date"
                  required
                />
                <Input
                  id="input"
                  name="input"
                  type="time"
                  placeholder="Choose time"
                  required
                />
                <Input
                  id="input"
                  name="input"
                  type="file"
                  placeholder="Choose file"
                  required
                />
                <InputGroup
                  id="input-color"
                  name="input-color"
                  label="Input Color"
                  type="color"
                  placeholder="Choose color"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
            </Card>
          </div>
          <div className="w-full">
            <Card header={"Input Code"}>
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
                <code>
                  {`import Input from "@/src/components/elements/input/Input";
                  <Input
                    id="id-input"
                    value={value}
                    onChange={onChange}
                    name="input"
                    type="text" /password/number/date/time/file/color
                    placeholder={"Type here"}
                    className={classname}
                    required
                    readonly
                    disabled
                  />`}
                </code>
              </pre>
            </Card>
          </div>
          {/* Input Group */}
          <div className="w-full">
            <Card header={"Input Group"}>
                <InputGroup
                  id="input-text"
                  name="input-text"
                  label="Input Text"
                  type="text"
                  placeholder="Type here"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-password"
                  name="input-password"
                  label="Input Password"
                  type="password"
                  placeholder="••••••••••"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-number"
                  name="input-number"
                  label="Input Number"
                  type="number"
                  placeholder="Choose number"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-date"
                  name="input-date"
                  label="Input Date"
                  type="date"
                  placeholder="Choose date"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-time"
                  name="input-time"
                  label="Input Time"
                  type="time"
                  placeholder="Choose time"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-file"
                  name="input-file"
                  label="Input File"
                  type="file"
                  placeholder="Choose files"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
                <InputGroup
                  id="input-color"
                  name="input-color"
                  label="Input Color"
                  type="color"
                  placeholder="Choose colors"
                  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  required
                />
            </Card>
          </div>
          <div className="w-full">
            <Card header={"Input Group Code"}>
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
                <code>
                  {`import InputGroup from "@/src/components/elements/input/InputGroup";
                  <Input
                    value={value}
                    onChange={onChange}
                    id="id-input-group"
                    name="input-input-group"
                    type="text" /password/number/date/time/file/color
                    className={classname}
                    placeholder={"Type here"}
                    required
                    readonly
                    disabled
                  />`}
                </code>
              </pre>
            </Card>
          </div>
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
                  isReadOnly
                    ? "bg-gray-300 dark:bg-gray-700"
                    : "dark:bg-gray-100"
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
            </Card>
          </div>
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
                <Button                type="button"
                classname={
                  "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white"
                }>
                  <FaSearch
                  className="-mr-1 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  aria-hidden="true" />
                </Button>
              </InputForm>
            </Card>
          </div>
          <div className="w-full">
            <Card header={"Input Form Code"}>
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
                  </InputForm>
                  `}
                </code>
              </pre>
            </Card>
          </div>
        </div>
      </>
    );
  };
  
  export default InputElement;
  