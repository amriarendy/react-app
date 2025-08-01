import CheckBox from "../../components/atoms/CheckBox";
import { HrefText } from "../../components/atoms/Href";
import { Input } from "../../components/atoms/Input";
import { Button } from "../../components/atoms/Button";
import AuthLayout from "./AuthLayout";

const ResetPassword = () => {
  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create a Free Account
          </h2>
          <form className="mt-8 space-y-6" action="#">
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
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
