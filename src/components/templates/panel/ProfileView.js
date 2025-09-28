import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import Profile from "../../organisms/panel/Profile";
import { axiosJWT } from "../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileView = () => {
  const breadCrumbs = {
    page: "Profile",
    data: [{ page: "Profile", route: "/dashboard/profile" }],
  };

  const navigate = useNavigate();
  const { param } = useParams();

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
  const [errMessage, setErrMessage] = useState("");
  const [validate, setValidate] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    phone: "",
    gender: "",
    photo: "",
    position: "",
    country: "",
    biography: "",
  });

  useEffect(() => {
    getWhere();
  }, []);

  const getWhere = async () => {
    const response = await axiosJWT.get(`${SERVER_API()}/users/22`);
    setName(response.data.name);
    setEmail(response.data.email);
    setDob(response.data.dob);
    setPhone(response.data.phone);
    setGender(response.data.gender);
    setStatus(response.data.status);
    setPosition(response.data.position);
    setCountry(response.data.country);
    setBiography(response.data.biography);
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
    formData.append("status", status);
    formData.append("position", position);
    formData.append("country", country);
    formData.append("biography", biography);

    try {
      await axiosJWT.patch(`${SERVER_API()}/users/22`, formData, {
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
      <Profile
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
          validate,
          errMessage,
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ProfileView;
