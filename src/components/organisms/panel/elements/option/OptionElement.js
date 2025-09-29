import Card from "../../../../elements/card/Card";
import OptionGroup from "../../../../elements/input/OptionGroup";

const OptionElement = () => {
    return (
      <>

<div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <div className="w-full">
          <Card header={"Option Data Statistic"}>
          <OptionGroup
                id={"input-option"}
                name={"input-option"}
                label={"Input Option"}
                required={true}
                caption={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "option-1", value: "option-1", label: "Option 1" },
                  { key: "option-2", value: "option-2", label: "Option 2" },
                  { key: "option-3", value: "option-3", label: "Option 3" },
                ]}
              />
          </Card>
        </div>
        <div className="w-full">
          <Card header={"Option Data Statistic Code"}>
          <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`import OptionGroup from "../../../../elements/input/OptionGroup";

          <OptionGroup
                id={"input-option"}
                name={"input-option"}
                label={"Input Option"}
                required={true}
                caption={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "option-1", value: "option-1", label: "Option 1" },
                  { key: "option-2", value: "option-2", label: "Option 2" },
                  { key: "option-3", value: "option-3", label: "Option 3" },
                ]}
              />`}
              </code>
            </pre>
          </Card>
        </div>
        
        <div className="w-full">
          <Card header={"Option Data Dynamic"}>
          <OptionGroup
                id={"input-option"}
                name={"input-option"}
                label={"Input Option"}
                required={true}
                caption={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "option-1", value: "option-1", label: "Option 1" },
                  { key: "option-2", value: "option-2", label: "Option 2" },
                  { key: "option-3", value: "option-3", label: "Option 3" },
                ]}
              />
          </Card>
        </div>
        <div className="w-full">
          <Card header={"Option Data Dynamic Code"}>
          <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
              <code>
                {`import OptionGroup from "../../../../elements/input/OptionGroup";
                
          <OptionGroup
                id={"input-option"}
                name={"input-option"}
                label={"Input Option"}
                required={true}
                caption={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { key: "option-1", value: "option-1", label: "Option 1" },
                  { key: "option-2", value: "option-2", label: "Option 2" },
                  { key: "option-3", value: "option-3", label: "Option 3" },
                ]}
              />`}
              </code>
            </pre>
          </Card>
        </div>
        </div>
      </>
    );
  };
  
  export default OptionElement;
  