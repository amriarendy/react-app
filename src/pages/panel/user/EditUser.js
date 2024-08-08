import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Input, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { update } from "../../../services/routeService";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const EditUser = () => {
  const breadCrumbs = {
    page: "User Edit",
    data: [
      { page: "User", route: "/user" },
      { page: "Edit", route: "/user/edit" },
    ],
  };
  const { param } = useParams();
  const { data, loading, error } = useFetch(`/users/${param}`);
  
  const navigate = useNavigate();

  const initialFormValues = {
    name: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
    photo: null,
    biography: "",
    status: "Active",
    position: "",
    country: "",
  };

  const { values, handleChange, resetForm } = useForm(initialFormValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    });
    
    const ContentType = "multipart/form-data";
    try {
      await update("/users", ContentType, formData);
      navigate("/user");
    } catch (error) {
      console.error("Error message:", error.message);
    }
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit User
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
                <Input
                  value={param}
                  onChange={handleChange}
                  id={"id"}
                  name={"id"}
                  type={"hidden"}
                  required={false}
                />
              <div className="sm:col-span-2">
                <Input
                  value={data.name}
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
                  value={data.email}
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
                  value={data.password}
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
                  value={data.password}
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
                  value={data.phone}
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
                  value={data.dob}
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
                  value={values.photo}
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
                    { key: "", value: `${data.gender}`, label: `${data.gender}` },
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
                    { key: "", value: `${data.gender}`, label: `${data.position}` },
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
                  value={data.country}
                  onChange={handleChange}
                  id={"country"}
                  name={"country"}
                  label={"Country"}
                  required={true}
                  selected={[
                    { key: "", value:`${data.country}`, label: `${data.country}` },
                  ]}
                  data={[
                    { value: "Indonesia", label: "Indonesia" },
                    { value: "Palestine", label: "Palestine" },
                    { value: "Malaysia", label: "Malaysia" },
                    { value: "China", label: "China" },
                    { value: "Japan", label: "Japan" },
                    { value: "India", label: "India" },
                    { value: "United State", label: "United State" },
                    { value: "Egypt", label: "Egypt" },
                  ]}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  value={data.biography}
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
              id={"btnUpdate"}
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

export default EditUser;
