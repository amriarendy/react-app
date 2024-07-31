import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import TableFeature from "../../../components/table/TableFeature";
import TableAction from "../../../components/table/TableAction";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { BLOG_FORMAT_TABLE } from "../../../libs/constants/formats/BlogFormat";
import DataTable from "../../../dummy.json";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

const Blog = () => {
  const breadCrumbs = {
    page: "Blog",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "List", route: "/blog" },
    ],
  };

  const { data, loading, error } = useFetch("/blogs");
  useEffect(() => {
    if (data) {
      console.log("Data loaded:", data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <PanelLayout><div className="grid grid-cols-1 bg-white px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card
            header={<AttributeTable attribute={BLOG_FORMAT_TABLE.attribute} />}
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={BLOG_FORMAT_TABLE.attribute}
                thead={BLOG_FORMAT_TABLE.th}
                tbody={BLOG_FORMAT_TABLE.attribute}
                tdata={DataTable.blogs}
              >
                {data.map((item, index) => (
                  <tr
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    key={index}
                  >
                    <TableFeature
                      attribute={BLOG_FORMAT_TABLE.attribute}
                      index={index}
                    />
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.title}
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.description}
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      Bussiness
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      432
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.publishedAt}
                    </td>
                    <TableAction attribute={BLOG_FORMAT_TABLE.attribute} />
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

export default Blog;
