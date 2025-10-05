import Card from "../../../../elements/card/Card";
import CheckBoxGroup from "../../../../elements/checkbox";

const RadioElement = () => {
  return (
    <>
      <div className="w-full">
        <Card header={"Radio Group"}>
          {" "}
          <CheckBoxGroup
            id="input-radio"
            name="input-radio"
            label="Input Radio"
            type="radio"
            description="I agree with the terms and conditions."
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            validate={""}
            required
          />
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Radio Group Code"}>
          <div className="rounded rounded-lg bg-gray-200 dark:bg-gray-900">
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`import CheckboxGroup from "@/src/components/elements/checkbox/CheckboxGroup";
<CheckBoxGroup
  value={""}
  onChange={""}
  id="input-radio"
  name="input-radio"
  label="Input Radio"
  type="radio"
  description="I agree with the terms and conditions."
  caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  validate={""}
  required
/>`}
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RadioElement;
