import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import Card from "../../../components/card/Card";
import Table from "../../../components/table/Table";
import { USER_FORMAT_TABLE } from "../../../libs/constants/formats/UserFormat";
import AttributeTable from "../../../components/table/AttributeTable";
import DataTable from "../../../dummy.json";
import TableFeature from "../../../components/table/TableFeature";
import TableAction from "../../../components/table/TableAction";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { ImageRounded } from "../../../components/ui/Image";
import { imageCheck } from "../../../libs/utils";

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
          data.map(async (user) => {
            const result = await imageCheck(`${user.avatar}`);
            status[user.id] = result;
          })
        );
        setImageStatus(status);
      };

      imageChecks();
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Ensure data.users is defined before mapping
  // if (!data || !data.users) return <div>No users found.</div>;

  return (
    <>
      <PanelLayout>
          <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="col-span-3">
            <Card
              header={
                <AttributeTable
                  attribute={USER_FORMAT_TABLE.attribute}
                  cols={1}
                />
              }
            >
              {/* <CheckImage /> */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table
                  attribute={USER_FORMAT_TABLE.attribute}
                  thead={USER_FORMAT_TABLE.th}
                >
                  {data.map((item, index) => (
                    <tr
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      key={item.id}
                    >
                      <TableFeature
                        attribute={USER_FORMAT_TABLE.attribute}
                        index={index}
                      />
                      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                        <ImageRounded
                          src={
                            imageStatus[item.id]
                              ? `${item.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={item.name}
                          rounded="full"
                          w={10}
                          h={10}
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
                      <TableAction
                        attribute={USER_FORMAT_TABLE.attribute}
                        param={item.id}
                      />
                    </tr>
                  ))}
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default User;
