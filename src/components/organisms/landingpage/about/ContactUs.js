import { Button } from "../../../atoms/Button";
import { Input } from "../../../atoms/Input";
import TextArea from "../../../atoms/TextArea";

const ContactUs = () => {
    return (
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
  <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    <div className="w-full">
      <Input
        id={"firstname"}
        name={"firstname"}
        type={"text"}
        label={"First Name"}
        placeholder={"First Name"}
        required={true}
      />
      </div>
    <div className="w-full">
      <Input
        id={"lastname"}
        name={"lastname"}
        type={"text"}
        label={"Last Name"}
        placeholder={"Last Name"}
        required={true}
      />
      </div>
    <div className="sm:col-span-2">
      <Input
        id={"email"}
        name={"email"}
        type={"email"}
        label={"Email"}
        placeholder={"Active Email"}
        required={true}
      />
      </div>
    <div className="sm:col-span-2">
      <TextArea
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
              id={"btnSendMessage"}
              type={"submit"}
              label={"Send message"}
              color={"blue"}
            />
    </div>
  </div></form>
    )
}

export default ContactUs;