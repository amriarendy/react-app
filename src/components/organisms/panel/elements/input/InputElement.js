import Card from "../../../../elements/card/Card";
import Input from "../../../../elements/input/Input";
import InputGroup from "../../../../elements/input";

const InputElement = () => {
  return (
    <>
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
          <div className="rounded rounded-lg bg-gray-200 dark:bg-gray-900">
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
          </div>
        </Card>
      </div>
    </>
  );
};

export default InputElement;
