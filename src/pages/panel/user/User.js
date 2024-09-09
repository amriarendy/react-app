import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import AttributeTable from "../../../components/table/advance/AttributeTable";
import Table from "../../../components/table/advance/Table";
import Thead from "../../../components/table/advance/Thead";
import Tfoot from "../../../components/table/advance/Tfoot";
import Taction from "../../../components/table/advance/Taction";
import { USER_FORMAT_TABLE } from "../../../libs/constants/formats/UserFormat";
import { useEffect, useState } from "react";
import { ImageCircleSmall } from "../../../components/ui/Image";
import { imageCheck } from "../../../libs/utils/image";
import CheckBox from "../../../components/ui/CheckBox";
import axios from "axios";
import Loading from "../../../components/errors/Loading";
import Errors from "../../../components/errors/Errors";

const User = () => {
  const breadCrumbs = {
    page: "Users",
    data: [
      { page: "Users", route: "/dashboard/Users" },
      { page: "List", route: "/dashboard/Users" },
    ],
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageStatus, setImageStatus] = useState({});

  useEffect(() => {
    if (users) {
      setUsers(users);
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          users.map(async (item) => {
            const result = await imageCheck(`${item.urlPhoto}`);
            status[item.id] = result;
          })
        );
        setImageStatus(status);
      };
      imageChecks();
    }
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const destroy = async (param) => {
    try {
      await axios.delete(`http://localhost:3001/users/${param}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <AttributeTable attribute={USER_FORMAT_TABLE.attribute} />
        {loading ? (
          <div className="flex items-center inset-0 sm:h-full">
            <Loading />
          </div>
        ) : error ? (
          <div className="flex items-center inset-0 sm:h-full">
            <Errors code={500} status={error.code} message={error.message} />
          </div>
        ) : (
          <Table>
            <Thead
              thead={USER_FORMAT_TABLE.th}
              attribute={USER_FORMAT_TABLE.attribute}
            />
            <tbody>
              {users.length > 0 ? (
                users.map((item, index) => (
                  <tr key={item.id} className="border-b dark:border-gray-700">
                    {USER_FORMAT_TABLE.attribute.checkbox && (
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <CheckBox item={{ id: "checkbox-1" }} />
                        </div>
                      </td>
                    )}
                    {USER_FORMAT_TABLE.attribute.number && (
                      <td className="w-4 p-4">
                        <div className="flex items-center">{index + 1}.</div>
                      </td>
                    )}
                    <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      <ImageCircleSmall
                        src={
                          imageStatus[item.id]
                            ? `${item.urlPhoto}`
                            : "https://placehold.co/150x150?text=Image+Not+Found"
                        }
                        alt={item.name}
                      />
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </div>
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          {item.email}
                        </div>
                      </div>
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.biography}
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.position}
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.country}
                    </td>
                    <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        {item.status === "Active" ? (
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                        ) : (
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                        )}
                        {item.status}
                      </div>
                    </td>
                    <Taction
                      taction={item}
                      attribute={USER_FORMAT_TABLE.attribute}
                      destroy={destroy}
                    />
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-3 text-center">
                    Data Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
        <Tfoot />
      </PanelLayout>
    </>
  );
};

export default User;
