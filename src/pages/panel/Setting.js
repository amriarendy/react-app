import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import Option from "../../components/ui/Option";
import TextArea from "../../components/ui/TextArea";
import PanelLayout from "./PanelLayout";
import Radio from "../../components/ui/Radio";
import { Image } from "../../components/ui/Image";
import Card from "../../components/card/Card";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaSave,
  FaRegTrashAlt,
} from "react-icons/fa";

const Setting = () => {
  const breadCrumbs = {
    page: "Setting",
    data: [{ page: "Setting", route: "/setting" }],
  };
  const imageClass = "mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0";
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-full xl:col-auto">
          <Card>
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <Image
                src={
                  "https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                }
                alt={"Jese picture"}
                className={imageClass}
              />
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  Website Icon
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
          <Card header={"Website Setting"}>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaFacebookF
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                      Facebook account
                    </span>
                    <span className="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Not connected
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <a
                      href="#"
                      className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaTwitter
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                      Twitter account
                    </span>
                    <span className="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Connected
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <a
                      href="#"
                      className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Disconnect
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaGithub
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                      Github account
                    </span>
                    <span className="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      Connected
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <Radio item={{ id: "account-activity" }} />
                  </div>
                </div>
              </li>
            </ul>
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
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"title"}
                name={"title"}
                type={"text"}
                label={"Title"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"keyword"}
                name={"keyword"}
                type={"text"}
                label={"Keyword"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextArea
                id={"description"}
                name={"description"}
                label={"Description"}
                rows={4}
                required={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"author"}
                name={"author"}
                type={"text"}
                label={"Author"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"copyright"}
                name={"copyright"}
                type={"text"}
                label={"Copyright"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Option
                id={"robots"}
                name={"robots"}
                label={"Robots"}
                required={true}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { value: "index, follow", label: "index, follow" },
                  { value: "follow", label: "follow" },
                  { value: "noindex, follow", label: "noindex, follow" },
                  { value: "index, nofollow", label: "index, nofollow" },
                  { value: "noindex, nofollow", label: "noindex, nofollow" },
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Option
                id={"googlebot"}
                name={"googlebot"}
                label={"Google Bot"}
                required={true}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { value: "index, follow", label: "index, follow" },
                  { value: "follow", label: "follow" },
                  { value: "noindex, follow", label: "noindex, follow" },
                  { value: "index, nofollow", label: "index, nofollow" },
                  { value: "noindex, nofollow", label: "noindex, nofollow" },
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Option
                id={"googlebotnews"}
                name={"googlebotnews"}
                label={"Google Bot News"}
                required={true}
                selected={[
                  { key: "", value: "", label: "Choose Your Selected" },
                ]}
                data={[
                  { value: "index, follow", label: "index, follow" },
                  { value: "follow", label: "follow" },
                  { value: "noindex, follow", label: "noindex, follow" },
                  { value: "index, nofollow", label: "index, nofollow" },
                  { value: "noindex, nofollow", label: "noindex, nofollow" },
                ]}
              />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Setting;
