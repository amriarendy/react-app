import Card from "../../../../elements/card/Card";
import TextArea from "../../../../elements/textarea/TextArea";
import TextAreaGroup from "../../../../elements/textarea";

const TextAreaElement = () => {
  return (
    <>
      <div className="w-full">
        <Card header={"Textarea"}>
          <TextArea
            value={""}
            onChange={""}
            id="input-text"
            name="input-text"
            label="Input Textarea"
            rows={4}
            caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            required
          />
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Textarea Code"}>
          <div className="rounded rounded-lg bg-gray-200 dark:bg-gray-900">
            <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`import TextArea from "@/src/components/elements/textarea/TextArea";

<TextArea
  value={value}
  onChange={onChange}
  id="id-input"
  name="input"
  rows={5}
  placeholder={"Type here"}
  classname={classname}
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

export default TextAreaElement;
