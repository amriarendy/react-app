import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Input, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { passwordConfirm, required } from "../../../libs/utils/validate";

const AddUser = () => {
  const breadCrumbs = {
    page: "User Add",
    data: [
      { page: "User", route: "/user" },
      { page: "Add", route: "/user/add" },
    ],
  };
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [biography, setBiography] = useState("");
  const [status, setStatus] = useState("Active");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordValidate = passwordConfirm(password, confirmPassword);
    const requiredValidate = required(email, "email required");
    alert(requiredValidate);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("dob", dob);
    formData.append("phone", phone);
    formData.append("gender", gender);
    if (photo) {
      formData.append("photo", photo);
    }
    formData.append("biography", biography);
    formData.append("status", status);
    formData.append("position", position);
    formData.append("country", country);

    try {
      await axios.post(`http://localhost:3001/users/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add User
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="sm:col-span-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id={"name"}
                  name={"name"}
                  type={"text"}
                  label={"Full Name"}
                  placeholder={"full name"}
                  required={false}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  label={"Email"}
                  placeholder={"active email"}
                  required={false}
                />
              </div>
              <div className="w-full">
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
              <div className="w-full">
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id={"confirm-password"}
                  name={"confirm-password"}
                  type={"password"}
                  label={"Password Confirm"}
                  placeholder={"••••••••"}
                  required={false}
                />
              </div>
              <div className="w-full">
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id={"phone"}
                  name={"phone"}
                  type={"number"}
                  label={"Phone Number"}
                  placeholder={"+628••••••••"}
                  required={false}
                />
              </div>
              <div className="w-full">
                <Input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  id={"dob"}
                  name={"dob"}
                  type={"date"}
                  label={"Date of Birth"}
                  placeholder={"type here"}
                  required={false}
                />
              </div>
              <div className="w-full">
                <InputFile
                  onChange={(e) => setPhoto(e.target.files[0])}
                  id={"photo"}
                  name={"photo"}
                  label={"Upload Photo"}
                  help={"Ext: jpg, jpeg, png. Max: 1024MB"}
                  required={false}
                />
              </div>
              <div className="w-full">
                <Option
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  id={"gender"}
                  name={"gender"}
                  label={"Gender"}
                  required={false}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </div>
              <div className="w-full">
                <Option
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  id={"position"}
                  name={"position"}
                  label={"Position"}
                  required={false}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    {
                      value: "Full Stack Developer",
                      label: "Full Stack Developer",
                    },
                    {
                      value: "Frontend Developer",
                      label: "Frontend Developer",
                    },
                    {
                      value: "Backend Developer",
                      label: "Backend Developer",
                    },
                    { value: "Data Analyts", label: "Data Analyts" },
                    { value: "Data Science", label: "Data Science" },
                    { value: "UI/UX", label: "UI/UX" },
                    { value: "Design", label: "Design" },
                    { value: "Ilustrator", label: "Ilustrator" },
                  ]}
                />
              </div>
              <div className="w-full">
                <Option
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id={"country"}
                  name={"country"}
                  label={"Country"}
                  required={false}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { value: "Indonesia", label: "Indonesia" },
                    { value: "Malaysia", label: "Malaysia" },
                    { value: "China", label: "China" },
                    { value: "Japan", label: "Japan" },
                    { value: "India", label: "India" },
                    { value: "United State", label: "United State" },
                    { value: "Egypt", label: "Egypt" },
                    { value: "Palestine", label: "Palestine" },
                  ]}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  id={"biography"}
                  name={"biography"}
                  label={"Biography"}
                  rows={4}
                  required={false}
                />
              </div>
            </div>
            <Button
              id={"btnSave"}
              type={"submit"}
              label={"Submit"}
              color={"blue"}
              icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
            />
          </form>
        </div>
      </PanelLayout>
    </>
  );
};

export default AddUser;
