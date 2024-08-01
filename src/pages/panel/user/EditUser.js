import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Input } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import { Image } from "../../../components/ui/Image";
import Card from "../../../components/card/Card";
import { Button } from "../../../components/ui/Button";
import { FaSave, FaRegTrashAlt } from "react-icons/fa";
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
  const { data: user, loading, error } = useFetch(`/users/${param}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const imageClass = "mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0";
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="col-span-full xl:col-auto">
            <Card>
              <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <Image
                  src={
                    "https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                  }
                  alt={"Jese picture"}
                  className={imageClass}
                />
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    Avatar
                  </h3>
                  <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    JPG, GIF or PNG. Max size of 800K
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button
                      id={"btnSave"}
                      type={"button"}
                      label={"Upload File"}
                      color={"blue"}
                      icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                    />
                    <Button
                      id={"btnSave"}
                      type={"button"}
                      label={"Delete"}
                      color={"red"}
                      icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <Card
              header={"General Information"}
              footer={
                <Button
                  id={"btnSave"}
                  type={"button"}
                  label={"Save"}
                  color={"blue"}
                  icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                />
              }
              cols={6}
            >
              <Input
                id={"id"}
                name={"id"}
                type={"hidden"}
                label={"ID"}
                value={user.id || ""}
                required={true}
              />
              <div className="col-span-6 sm:col-span-3">
                <Input
                  id={"name"}
                  name={"name"}
                  type={"text"}
                  label={"Name"}
                  value={user.name || ""}
                  required={true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  label={"Email"}
                  value={user.email || ""}
                  required={true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  value={user.password || ""}
                  required={true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Option
                  id={"gender"}
                  name={"gender"}
                  label={"Gender"}
                  value={user.gender}
                  required={true}
                  selected={[
                    {
                      key: "",
                      value: user.gender || "",
                      label: user.gender || "",
                    },
                  ]}
                  data={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </div>
              <div className="col-span-6">
                <TextArea
                  id={"biography"}
                  name={"biography"}
                  label={"Biography"}
                  value={user.biography || ""}
                  rows={4}
                  required={false}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Option
                  id={"position"}
                  name={"position"}
                  label={"Position"}
                  required={true}
                  selected={[
                    {
                      key: "",
                      value: user.position || "",
                      label: user.position || "",
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
                    { value: "Backend Developer", label: "Backend Developer" },
                    { value: "Data Analyts", label: "Data Analyts" },
                    { value: "Data Science", label: "Data Science" },
                    { value: "UI/UX", label: "UI/UX" },
                    { value: "Design", label: "Design" },
                    { value: "Ilustrator", label: "Ilustrator" },
                  ]}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Option
                  id={"country"}
                  name={"country"}
                  label={"Country"}
                  required={true}
                  selected={[
                    {
                      key: "",
                      value: user.country || "",
                      label: user.country || "",
                    },
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
            </Card>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default EditUser;
