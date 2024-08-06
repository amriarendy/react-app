import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Input, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { store } from "../../../services/routeService";
import React, { useState } from "react";
import axios from "axios";

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
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");
  const [biography, setBiography] = useState("");
  const [status, setStatus] = useState("Active");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("dob", dob);
    formData.append("phone", phone);
    formData.append("gender", gender);
    if (photo) {
      formData.append("photo", photo); // Pastikan photo adalah objek File
    }
    formData.append("biography", biography);
    formData.append("status", status);
    formData.append("position", position);
    formData.append("country", country);
    console.log("formData: ", formData);
    try {
      await axios.post("http://localhost:3001/users", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/user");
    } catch (error) {
      if (error.response) {
        // Request made and server responded with a status code outside of 2xx
        console.error("Server responded with an error:", error.response.data);
        console.error("Server status code:", error.response.status);
        console.error("Server headers:", error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something else caused the error
        console.error("Error message:", error.message);
      }
    }
  };

  // const { values, handleChange, setValues } = useForm(
  //   {
  //     id: 1,
  //     email: "",
  //     password: "",
  //     name: "",
  //     dob: "",
  //     phone: "",
  //     gender: "",
  //     photo: "",
  //     biography: "",
  //     status: "active",
  //     position: "",
  //     country: "",
  //   },
  //   handleSubmit
  // );

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     await store("users", values);
  //     navigate("/user");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
                  id={"text"}
                  name={"text"}
                  type={"text"}
                  label={"Full Name"}
                  placeholder={"Full Name"}
                  required={true}
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
                  placeholder={"Active Email"}
                  required={true}
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
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  id={"confirm-password"}
                  name={"confirm-password"}
                  type={"password"}
                  label={"Password Confirm"}
                  placeholder={"••••••••"}
                  required={true}
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
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  id={"date-of-birth"}
                  name={"date-of-birth"}
                  type={"date"}
                  label={"Date of Birth"}
                  placeholder={"Date of Birth"}
                  required={true}
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
                  required={true}
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
                  required={true}
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
                  required={true}
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
                  required={true}
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
