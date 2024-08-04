import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import AttributeTable from "../../../components/table/advance/AttributeTable";
import Table from "../../../components/table/advance/Table";
import Thead from "../../../components/table/advance/Thead";
import Tfoot from "../../../components/table/advance/Tfoot";
import Taction from "../../../components/table/advance/Taction";
import { BLOG_FORMAT_TABLE } from "../../../libs/constants/formats/BlogFormat";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { ImageRoundedSmall } from "../../../components/ui/Image";
import { imageCheck } from "../../../libs/utils";
import CheckBox from "../../../components/ui/CheckBox";

const Blog = () => {
  const breadCrumbs = {
    page: "Blog",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "List", route: "/blog" },
    ],
  };

  const [users, setUsers] = useState([]);
  const [imageStatus, setImageStatus] = useState({});

  const { data, loading, error } = useFetch("/blogs");

  useEffect(() => {
    if (data) {
      setUsers(data);
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          data.map(async (item) => {
            const result = await imageCheck(`${item.thumbnail}`);
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
  // Ensure data.users is defined before mapping
  // if (!data || !data.users) return <div>No users found.</div>;

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <AttributeTable attribute={BLOG_FORMAT_TABLE.attribute} />
        <Table>
          <Thead
            thead={BLOG_FORMAT_TABLE.th}
            attribute={BLOG_FORMAT_TABLE.attribute}
          />
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id} className="border-b dark:border-gray-700">
                  {BLOG_FORMAT_TABLE.attribute.checkbox && (
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <CheckBox item={{ id: "checkbox-1" }} />
                      </div>
                    </td>
                  )}
                  {BLOG_FORMAT_TABLE.attribute.number && (
                    <td className="w-4 p-4">
                      <div className="flex items-center">{index + 1}.</div>
                    </td>
                  )}
                  <td className="flex items-center p-4 whitespace-nowrap">
                    <ImageRoundedSmall
                      src={
                        imageStatus[item.id]
                          ? `${item.thumbnail}`
                          : "https://placehold.co/150x150?text=Image+Not+Found"
                      }
                      alt={item.name}
                    />
                  </td>
                  <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    <div class="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </div>
                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {item.author}
                    </div>
                  </td>
                  <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    {item.description}
                  </td>
                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.publishedAt}
                  </td>
                  <Taction
                    taction={item}
                    attribute={BLOG_FORMAT_TABLE.attribute}
                  />
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-3 text-center">
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

export default Blog;
