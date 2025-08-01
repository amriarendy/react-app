import React from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import { Input, InputFile } from "../../../components/atoms/Input";
import Option from "../../../components/atoms/Option";
import TextArea from "../../../components/atoms/TextArea";
import { Button } from "../../../components/atoms/Button";
import { FaCodeBranch, FaSave, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { store } from "../../../services/routeService";

const Test = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/dashboard/templates/test" },
      { page: "Test Page", route: "/dashboard/templates/test" },
    ],
  };

  const { values, handleChange, setValues } = useForm(
    {
      input: "",
      email: "",
      password: "",
      number: "",
      date: "",
      time: "",
      option: "",
      file: "",
      textarea: "",
    },
    handleSubmit
  );
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      await store("#", values);
      navigate("/#");
    } catch (error) {
      console.error(error);
    }
  }

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
                  value={values.name}
                  onChange={handleChange}
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
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
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
                  value={values.number}
                  onChange={handleChange}
                  id={"phone"}
                  name={"phone"}
                  type={"phone"}
                  label={"Phone Number"}
                  placeholder={"+628••••••••"}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={values.date}
                  onChange={handleChange}
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
                  value={values.file}
                  onChange={handleChange}
                  id={"photo"}
                  name={"photo"}
                  label={"Upload Photo"}
                  help={"Ext: jpg, jpeg, png. Max: 1024MB"}
                  required={false}
                />
              </div>
              <div className="w-full">
                <Option
                  value={values.gender}
                  onChange={handleChange}
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
                  value={values.position}
                  onChange={handleChange}
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
                    { value: "atoms/UX", label: "atoms/UX" },
                    { value: "Design", label: "Design" },
                    { value: "Ilustrator", label: "Ilustrator" },
                  ]}
                />
              </div>
              <div className="w-full">
                <Option
                  value={values.country}
                  onChange={handleChange}
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
                  value={values.biography}
                  onChange={handleChange}
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

export default Test;
