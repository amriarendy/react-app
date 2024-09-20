import CheckBox from "../../components/ui/CheckBox";
import { HrefText } from "../../components/ui/Href";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import AuthLayout from "./AuthLayout";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrEmail("");
    setErrPassword("");
    setErrMessage("");
    try {
      await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        const errors = error.response.data.errors;
        if (errors.field === "email") {
          setErrEmail(
            error.response.data.errors.message || "An error occurred"
          );
        } else if (errors.field === "password") {
          setErrPassword(
            error.response.data.errors.message || "An error occurred"
          );
        } else {
          setErrMessage(error.response.data.message || "An error occurred");
        }
      } else {
        setErrMessage("Network error, please try again later");
      }
    }
  };

  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id={"email"}
                name={"email"}
                type={"text"}
                label={"Your Email"}
                placeholder={"username@domain.com"}
                required={false}
              />
              {errEmail && (
                <p className="font-semibold text-red-500 text-sm">{errEmail}</p>
              )}
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
              {errPassword && (
                <p className="font-semibold text-red-500 text-sm">
                  {errPassword}
                </p>
              )}
            </div>
            <div className="flex items-start">
              <CheckBox
                id={"remember"}
                name={"remember"}
                label={"Remember Me"}
              />
              <HrefText color={"blue"} label={"Lost Password?"} />
            </div>
            <Button
              id={"login"}
              type={"submit"}
              label={"Login to your account"}
              color={"blue"}
            />
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Not registered?{" "}
              <HrefText
                route="/register"
                color={"blue"}
                label={"Account Register?"}
              />
            </div>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
