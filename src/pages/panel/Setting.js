import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { Input, InputButton, InputFile } from "../../components/ui/Input";
import Option from "../../components/ui/Option";
import TextArea from "../../components/ui/TextArea";
import { Button, ButtonIcon } from "../../components/ui/Button";
import { FaCodeBranch, FaSave, FaSearch } from "react-icons/fa";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { store } from "../../services/routeService";
import Radio from "../../components/ui/Radio";

const Setting = () => {
  const breadCrumbs = {
    page: "Setting",
    data: [
      { page: "Setting", route: "/dashboard/setting" },
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
            Setting
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="sm:col-span-2">
                <Input
                  value={values.email}
                  onChange={handleChange}
                  id={"webhook"}
                  name={"webhook"}
                  type={"webhook"}
                  label={"Backend Endpoint"}
                  placeholder={"http://localhost:5000/"}
                  required={true}
                />
              </div>
              <div className="sm:col-span-2">
                <Option
                  value={values.option}
                  onChange={handleChange}
                  id={"database"}
                  name={"database"}
                  label={"Database"}
                  required={true}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { key: "mysql", value: "mysql", label: "MySQL" },
                    { key: "postgresql", value: "postgresql", label: "PostgreSQL" },
                    { key: "json-server", value: "json-server", label: "JSON Server" },
                    { key: "mongodb", value: "mongodb", label: "Mongo DB" },
                    { key: "firebase", value: "firebase", label: "Firebase" },
                  ]}
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

export default Setting;
