import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import AttributeTable from "../../../components/table/advance/AttributeTable";
import Table from "../../../components/table/advance/Table";
import Thead from "../../../components/table/advance/Thead";
import Tfoot from "../../../components/table/advance/Tfoot";
import Taction from "../../../components/table/advance/Taction";
import { USER_FORMAT_TABLE } from "../../../libs/constants/formats/UserFormat";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { ImageCircleSmall } from "../../../components/ui/Image";
import { imageCheck } from "../../../libs/utils/image";
import CheckBox from "../../../components/ui/CheckBox";
import axios from "axios";
import { SERVER_API } from "../../../services/api";

const User = () => {
  const breadCrumbs = {
    page: "Users",
    data: [
      { page: "Users", route: "/Users" },
      { page: "List", route: "/Users" },
    ],
  };

  const [users, setUsers] = useState([]);
  const [imageStatus, setImageStatus] = useState({});

  const { data, loading, error } = useFetch("/users");

  useEffect(() => {
    if (data) {
      setUsers(data);
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          data.map(async (item) => {
            const result = await imageCheck(`${item.urlPhoto}`);
            status[item.id] = result;
          })
        );
        setImageStatus(status);
      };

      imageChecks();
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const destroy = async (param) => {
    try {
      await axios.delete(`http://localhost:3001/users/${param}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <AttributeTable attribute={USER_FORMAT_TABLE.attribute} />
        <Table>
          <Thead
            thead={USER_FORMAT_TABLE.th}
            attribute={USER_FORMAT_TABLE.attribute}
          />
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
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
        <Tfoot />
      </PanelLayout>
    </>
  );
};

export default User;
