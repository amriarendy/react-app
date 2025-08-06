import { HrefText } from "../../atoms/Href";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";

const ResetPasswordForm = () => {
    return (
      <><form className="mt-8 space-y-6" action="#">
      <div>
        <Input
          id={"email"}
          name={"email"}
          type={"email"}
          label={"Your Email"}
          placeholder={"username@domain.com"}
          required={true}
        />
      </div>
      <div>
        <Input
          id={"password"}
          name={"password"}
          type={"password"}
          label={"Password"}
          placeholder={"••••••••"}
          required={true}
        />
      </div>
      <div>
        <Input
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
          <HrefText route="/login" color={"blue"} label={"Login"} />
        </div>
      </div>
      <Button
        id={"login"}
        type={"button"}
        label={"Reset Password"}
        color={"blue"}
      />
    </form>
      </>
    );
  };
  
  export default ResetPasswordForm;
  