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
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_API } from "../../../services/api";

const EditUser = () => {
  const breadCrumbs = {
    page: "User Edit",
    data: [
      { page: "User", route: "/dashboard/user" },
      { page: "Edit", route: "/dashboard/user/edit" },
    ],
  };
  const navigate = useNavigate();
  const { param } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [biography, setBiography] = useState("");
  const [status, setStatus] = useState("Active");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    getWhere();
  }, []);

  const getWhere = async () => {
    const response = await axios.get(`http://localhost:3001/users/${param}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setDob(response.data.dob);
    setPhone(response.data.phone);
    setGender(response.data.gender);
    setBiography(response.data.biography);
    setStatus(response.data.status);
    setPosition(response.data.position);
    setCountry(response.data.country);
  };

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
      formData.append("photo", photo);
    }
    formData.append("biography", biography);
    formData.append("status", status);
    formData.append("position", position);
    formData.append("country", country);

    try {
      await axios.patch(`http://localhost:3001/users/${param}`, formData, {
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
            Edit User
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
                  placeholder={"active email"}
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
                  value={password}
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
                  type={"phone"}
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
                    {
                      key: "",
                      value: `${gender}`,
                      label: `${gender}`,
                    },
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
                    {
                      key: "",
                      value: `${position}`,
                      label: `${position}`,
                    },
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
                    {
                      key: "",
                      value: `${country}`,
                      label: `${country}`,
                    },
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
