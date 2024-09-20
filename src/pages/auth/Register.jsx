import CheckBox from "../../components/ui/CheckBox";
import { HrefText } from "../../components/ui/Href";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMassage, setErrMassage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", confirmPassword);
    try {
      await axios.post(`http://localhost:3001/register/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create a Free Account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id={"email"}
                name={"email"}
                type={"email"}
                label={"Your Email"}
                placeholder={"username@domain.com"}
                required={false}
              />
            </div>
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id={"name"}
                name={"name"}
                type={"text"}
                label={"Full Name"}
                placeholder={"Write your full name"}
                required={false}
              />
            </div>
            <div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id={"password"}
                name={"password"}
                type={"password"}
                label={"Password"}
                placeholder={"••••••••"}
                required={false}
              />
            </div>
            <div>
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id={"password_confirm"}
                name={"password_confirm"}
                type={"password"}
                label={"Password Confirm"}
                placeholder={"••••••••"}
                required={false}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <CheckBox
                  id={"termscondictions"}
                  name={"termscondictions"}
                  label={"I accept the"}
                />
              </div>
              <div className="ml-3 text-sm">
                <HrefText color={"blue"} label={" Terms and Conditions"} />
              </div>
            </div>
            <Button
              id={"register"}
              type={"submit"}
              label={"Create account"}
              color={"blue"}
            />
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <HrefText route="/login" color={"blue"} label={"Login"} />
            </div>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;
