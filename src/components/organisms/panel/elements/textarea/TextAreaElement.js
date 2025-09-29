import Card from "../../../../elements/card/Card";
import TextArea from "../../../../elements/textarea/TextArea";
import TextAreaGroup from "../../../../elements/textarea";

const TextAreaElement = () => {
    return (
      <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
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
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Textarea Group"}>
        <TextAreaGroup
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
        <Card header={"Textarea Group Code"}>
        <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
            <code>
              {`import TextAreaGroup from "@/src/components/elements/textarea/TextAreaGroup";

<TextAreaGroup
value={value}
onChange={onChange}
id="id-input"
name="input"
rows={5}
placeholder={"Type here"}
classname={classname}
caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
required
readonly
disabled
/>`}
            </code>
          </pre>
        </Card>
      </div>
      </div>
      </>
    );
  };
  
  export default TextAreaElement;
  