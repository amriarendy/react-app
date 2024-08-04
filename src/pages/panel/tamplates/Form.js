import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Input, InputButton, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import { Button, ButtonIcon } from "../../../components/ui/Button";
import { FaCodeBranch, FaSave, FaSearch } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { store } from "../../../services/routeService";
import Radio from "../../../components/ui/Radio";

const Form = () => {
  const breadCrumbs = {
    page: "Form",
    data: [
      { page: "Templates", route: "/templates/form" },
      { page: "Form", route: "/templates/form" },
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
            Form
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
                  label={"Input Text"}
                  placeholder={"type here"}
                  required={true}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  value={values.password}
                  onChange={handleChange}
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  label={"Input Password"}
                  placeholder={"••••••••"}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={values.email}
                  onChange={handleChange}
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  label={"Input Email"}
                  placeholder={"type here"}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={values.number}
                  onChange={handleChange}
                  id={"number"}
                  name={"number"}
                  type={"number"}
                  label={"Input Number"}
                  placeholder={"$2999"}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={values.date}
                  onChange={handleChange}
                  id={"date"}
                  name={"date"}
                  type={"date"}
                  label={"Input Date"}
                  placeholder={"type here"}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Input
                  value={values.time}
                  onChange={handleChange}
                  id={"time"}
                  name={"time"}
                  type={"time"}
                  label={"Input Time"}
                  placeholder={"$2999"}
                  required={true}
                />
              </div>
              <div>
                <Option
                  value={values.option}
                  onChange={handleChange}
                  id={"option"}
                  name={"option"}
                  label={"Option"}
                  required={true}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { key: "option 1", value: "option 1", label: "option 1" },
                    { key: "option 2", value: "option 2", label: "option 2" },
                  ]}
                />
              </div>
              <div>
                <InputFile
                  value={values.file}
                  onChange={handleChange}
                  id={"file"}
                  name={"file"}
                  label={"Input File"}
                  help={"Ext: jpg, jpeg, png, svg. Max: 1024MB"}
                  required={false}
                />
              </div>
              <div className="sm:col-span-2">
                <Radio
                  value={values.radio}
                  onChange={handleChange}
                  id={"input-radio"}
                  label={"Input Radio"}
                  caption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <InputButton
                  value={values.inputButton}
                  onChange={handleChange}
                  id={"input-button"}
                  name={"input-button"}
                  type={"text"}
                  label={"Input Button"}
                  icon={
                    <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  }
                  buttonIcon={<FaSearch className="w-4 h-4" />}
                  placeholder={"Search Everything:"}
                  required={true}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  value={values.textarea}
                  onChange={handleChange}
                  id={"textarea"}
                  name={"textarea"}
                  label={"Textarea"}
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

export default Form;
