import CheckBoxGroup from "../../elements/checkbox";
import InputGroup from "../../elements/input";
import Href from "../../elements/href/Href";
import Button from "../../elements/button/Button";

const ResetPassword = () => {
  return (
    <>
      <form className="mt-8 space-y-6" action="#">
        <div>
          <InputGroup
            id={"email"}
            name={"email"}
            type={"email"}
            label={"Your Email"}
            placeholder={"username@domain.com"}
            required={true}
          />
        </div>
        <div>
          <InputGroup
            id={"password"}
            name={"password"}
            type={"password"}
            label={"Password"}
            placeholder={"••••••••"}
            required={true}
          />
        </div>
        <div>
          <InputGroup
            id={"password_confirm"}
            name={"password_confirm"}
            type={"password"}
            label={"Password Confirm"}
            placeholder={"••••••••"}
            required={true}
          />
        </div>
        <div className="flex items-start">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Href
              route={`/login`}
              classname={"inline-flex items-center px-2 py-1 text-gray-800"}
            >
              Login Here!
            </Href>
          </div>
        </div>
        <Button
          id={"btnReset"}
          route={"button"}
          classname={
            "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
          }
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ResetPassword;
