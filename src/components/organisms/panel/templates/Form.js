import InputGroup from "../../../elements/input";
import InputButton from "../../../elements/input/InputButton";
import OptionGroup from "../../../elements/input/OptionGroup";
import RadioGroup from "../../../elements/radio";
import Radio from "../../../elements/radio/Radio";
import TextAreaGroup from "../../../elements/textarea";

const Form = () => {
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
                            id="input-text"
                            name="input-text"
                            label="Input Text"
                            type="text"
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
                        id={"option"}
                        name={"option"}
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
                            id="input-text"
                            name="input-text"
                            label="Input File"
                            type="file"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <RadioGroup
                            value={""}
                            onChange={""}
                            id="input-text"
                            name="input-text"
                            label="Input File"
                            type="radio"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <InputButton
                            value={""}
                            onChange={""}
                            id="input-password"
                            name="input-password"
                            label="Input Password"
                            type="password"
                            placeholder={"••••••••••"}
                            required
                        ></InputButton>
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
            </form>
        </div>
      </>
    );
  };
  
  export default Form;
  