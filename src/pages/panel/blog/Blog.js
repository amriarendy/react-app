import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import AttributeTable from "../../../components/organisms/table/advance/AttributeTable";
import Table from "../../../components/organisms/table/advance/Table";
import Thead from "../../../components/organisms/table/advance/Thead";
import Tfoot from "../../../components/organisms/table/advance/Tfoot";
import Taction from "../../../components/organisms/table/advance/Taction";
import { BLOG_FORMAT_TABLE } from "../../../libs/constants/formats/BlogFormat";
import { useEffect, useState } from "react";
import { ImageSquareSmall } from "../../../components/atoms/Image";
import { imageCheck } from "../../../libs/utils/image";
import CheckBox from "../../../components/atoms/CheckBox";
import { axiosJWT } from "../../../libs/utils/axiosJwt";
import { DateTime } from "../../../libs/utils/dateTime";
import { SERVER_API } from "../../../services/api";

const Blog = () => {
  const breadCrumbs = {
    page: "Blog",
    data: [
      { page: "Blog", route: "/dashboard/blog" },
      { page: "List", route: "/dashboard/blog" },
    ],
  };

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageStatus, setImageStatus] = useState({});

  useEffect(() => {
    if (blog) {
      setBlog(blog);
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          blog.map(async (item) => {
            const result = await imageCheck(`${item.urlThumbnail}`);
            status[item.id] = result;
          })
        );
        setImageStatus(status);
      };
      imageChecks();
    }
    getblog();
  }, []);

  const getblog = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/blogs/`);
      setBlog(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const destroy = async (param) => {
    try {
      await axiosJWT.delete(`${SERVER_API()}/blogs/${param}`);
      getblog();
    } catch (error) {
      console.log(error);
    }
  };

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
            {blog.length > 0 ? (
              blog.map((item, index) => (
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
                  <td className="flex items-center justify-center p-4 whitespace-nowrap">
                    <ImageSquareSmall
                      src={
                        imageStatus[item.id]
                          ? `${item.urlThumbnail}`
                          : "https://placehold.co/150x150?text=Image+Not+Found"
                      }
                      alt={item.name}
                    />
                  </td>
                  <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {item.author}
                    </div>
                  </td>
                  <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    {item.description}
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {DateTime(item.publishedAt)}
                  </td>
                  <Taction
                    taction={item}
                    destroy={destroy}
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
