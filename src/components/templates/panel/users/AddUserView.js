import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import AddUser from "../../../organisms/panel/users/AddUser";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";
import { useNavigate } from "react-router-dom";

const AddUserView = () => {
  const breadCrumbs = {
    page: "Add User",
    data: [
      { page: "Users", route: "/dashboard/users" },
      { page: "Add Users", route: "/dashboard/users/add-user" },
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
  // err state
  const [validate, setValidate] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    phone: "",
    gender: "",
    photo: "",
    biography: "",
    position: "",
    country: "",
  });

  const [errMessage, setErrMessage] = useState("");

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
    formData.append("status", status);
    formData.append("position", position);
    formData.append("country", country);
    formData.append("biography", biography);

    try {
      await axiosJWT.post(`${SERVER_API()}/users/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard/users");
    } catch (error) {
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          let newValidate = {
            email: "",
            password: "",
            name: "",
            dob: "",
            phone: "",
            gender: "",
            photo: "",
            biography: "",
          };

          errors.forEach((err) => {
            if (newValidate.hasOwnProperty(err.field)) {
              newValidate[err.field] = err.message || "An error occurred";
            }
          });

          setValidate(newValidate);
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
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <AddUser
        props={{
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
          dob,
          setDob,
          phone,
          setPhone,
          gender,
          setGender,
          photo,
          setPhoto,
          biography,
          setBiography,
          status,
          setStatus,
          position,
          setPosition,
          country,
          setCountry,
          biography,
          setBiography,
          validate,
          errMessage,
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddUserView;
