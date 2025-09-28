import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import OptionGroup from "../../../elements/input/OptionGroup";
import TextAreaGroup from "../../../elements/textarea";
import FormGroup from "../../../elements/form";
const AddUser = ({ onSubmit, props }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
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
  } = props;
  return (
    <>
      <FormGroup label="Add Data" onSubmit={onSubmit}>
        <div className="sm:col-span-2">
          <InputGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder={"Active Email"}
            validate={validate.email}
          />
        </div>
        <div className="sm:col-span-2">
          <InputGroup
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            label="Full Name"
            type="text"
            placeholder={"Full Name"}
            validate={validate.name}
          />
        </div>
        <div className="sm:col-span-2">
          <InputGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder={"••••••••••"}
            validate={validate.password}
          />
        </div>
        <div className="w-full">
          <InputGroup
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
            label="Phone"
            type="number"
            placeholder={"628*****/08*****"}
            validate={validate.phone}
          />
        </div>
        <div className="w-full">
          <InputGroup
            onChange={(e) => setPhoto(e.target.files[0])}
            id="photo"
            name="photo"
            label="Photo"
            type="file"
            validate={validate.photo}
            caption="Ext: jpg, jpeg, png, svg. Max: 1024MB"
          />
        </div>
        <div className="w-full">
          <OptionGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id={"gender"}
            name={"gender"}
            label={"Gender"}
            validate={validate.gender}
            selected={[{ key: null, value: "", label: "Choose Your Selected" }]}
            data={[
              { key: "male", value: "male", label: "Male" },
              { key: "female", value: "female", label: "Female" },
            ]}
          />
        </div>
        <div className="w-full">
          <InputGroup
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            validate={validate.dob}
          />
        </div>
        <div className="w-full">
          <OptionGroup
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            id={"position"}
            name={"position"}
            label={"Position"}
            validate={validate.position}
            selected={[{ key: null, value: "", label: "Choose Your Selected" }]}
            data={[
              {
                key: "software-engginer",
                value: "software-engginer",
                label: "Software Engginer",
              },
              {
                key: "mechine-learning",
                value: "mechine-learning",
                label: "Mechine Learning",
              },
              {
                key: "data-scientist",
                value: "data-scientist",
                label: "Data Scientist",
              },
              { key: "ui/ux", value: "ui/ux", label: "ui/ux" },
              {
                key: "data-engginer",
                value: "data-engginer",
                label: "Data Engginer",
              },
              {
                key: "ai-engginer",
                value: "ai-engginer",
                label: "AI Engginer",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <OptionGroup
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            id={"country"}
            name={"country"}
            label={"Country"}
            validate={validate.country}
            selected={[{ key: null, value: "", label: "Choose Your Selected" }]}
            data={[
              { key: "indonesia", value: "indonesia", label: "Indonesia" },
              { key: "malaysia", value: "malaysia", label: "Malaysia" },
              { key: "brunie", value: "brunie", label: "Brunie" },
              { key: "thailand", value: "thailand", label: "Thailand" },
              {
                key: "philippines",
                value: "philippines",
                label: "Philippines",
              },
              { key: "uk", value: "uk", label: "United Kingdom" },
              { key: "usa", value: "usa", label: "United State America" },
              { key: "canada", value: "canada", label: "Canada" },
            ]}
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaGroup
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            id="biography"
            name="biography"
            label="Biography"
            rows={4}
          />
        </div>
        <div className="mt-3">
          <Button
            id={"btnSubmit"}
            type={"submit"}
            classname={
              "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
            }
          >
            Submit
          </Button>
        </div>
      </FormGroup>
    </>
  );
};

export default AddUser;
