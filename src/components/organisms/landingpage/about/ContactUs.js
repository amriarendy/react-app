import TextAreaGroup from "../../../elements/textarea";
import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";

const ContactUs = () => {
  return (
    <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="w-full">
            <InputGroup
              id={"firstname"}
              name={"firstname"}
              type={"text"}
              label={"First Name"}
              placeholder={"First Name"}
              required={true}
            />
          </div>
          <div className="w-full">
            <InputGroup
              id={"lastname"}
              name={"lastname"}
              type={"text"}
              label={"Last Name"}
              placeholder={"Last Name"}
              required={true}
            />
          </div>
          <div className="sm:col-span-2">
            <InputGroup
              id={"email"}
              name={"email"}
              type={"email"}
              label={"Email"}
              placeholder={"Active Email"}
              required={true}
            />
          </div>
          <div className="sm:col-span-2">
            <TextAreaGroup
              id={"message"}
              name={"message"}
              type={"text"}
              label={"Message"}
              placeholder={"Messages..."}
              required={true}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            type={"button"}
            classname={
              "rounded rounded-lg inline-flex items-center px-3 py-2 text-white bg-green-700 hover:bg-green-500"
            }
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
