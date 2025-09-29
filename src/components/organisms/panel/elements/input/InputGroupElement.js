import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../elements/card/Card";
import Input from "../../../../elements/input/Input";
import InputGroup from "../../../../elements/input";
import InputButton from "../../../../elements/input/InputButton";
import InputForm from "../../../../elements/input/InputForm";
import Button from "../../../../elements/button/Button";

const InputGroupElement = () => {
  return (
    <>
      {/* Input Group */}
      <div className="w-full">
        <Card header={"Input Group"}>
          <InputGroup
            value={""}
            onChange={""}
            id="input-text"
            name="input-text"
            label="Input Text"
            type="text"
            placeholder="Type here"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
            id="input-password"
            name="input-password"
            label="Input Password"
            type="password"
            placeholder="••••••••••"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
            id="input-number"
            name="input-number"
            label="Input Number"
            type="number"
            placeholder="Choose number"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
            id="input-date"
            name="input-date"
            label="Input Date"
            type="date"
            placeholder="Choose date"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
            id="input-time"
            name="input-time"
            label="Input Time"
            type="time"
            placeholder="Choose time"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
            id="input-file"
            name="input-file"
            label="Input File"
            type="file"
            placeholder="Choose files"
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
          <InputGroup
            value={""}
            onChange={""}
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
    </>
  );
};

export default InputGroupElement;
