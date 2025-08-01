import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import Card from "../../../components/molecules/card/Card";
import { Button } from "../../../components/atoms/Button";
import { FaCodeBranch, FaSave } from "react-icons/fa";
import { Input, InputButton, InputFile } from "../../../components/atoms/Input";
import Option from "../../../components/atoms/Option";
import TextArea from "../../../components/atoms/TextArea";
import WYSIWYG from "../../../components/atoms/WYSIWYG";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosJWT } from "../../../libs/utils/axiosJwt";
import { slugFormat } from "../../../libs/utils/text";
import { SERVER_API } from "../../../services/api";

const AddBlog = () => {
  const breadCrumbs = {
    page: "Blog Add",
    data: [
      { page: "Blog", route: "/dashboard/blog" },
      { page: "Add", route: "/dashboard/blog/add" },
    ],
  };
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
  const [slug, setSlug] = useState("");
  const [publishedAt, setPublishedAt] = useState("");

  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTags = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/tags`);
      setTags(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/categories`);
      setCategories(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTags();
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tag", tag);
    formData.append("body", body);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    if (file) {
      formData.append("file", file);
    }
    formData.append("slug", slug);
    formData.append("publishedAt", publishedAt);
    try {
      await axiosJWT.post(`${SERVER_API()}/blogs/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard/blog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
            <div className="col-span-3">
              <Card cols={6}>
                <div className="col-span-6">
                  <Input
                    value={title}
                    onChange={(e) => {
                      const slugTitle = e.target.value;
                      setTitle(slugTitle);
                      setSlug(slugFormat(slugTitle));
                    }}
                    id={"title"}
                    name={"title"}
                    type={"text"}
                    label={"Title"}
                    required={false}
                  />
                </div>
                <div className="col-span-6">
                  <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id={"description"}
                    name={"description"}
                    label={"Description"}
                    rows={4}
                    required={false}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Option
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id={"category"}
                    name={"category"}
                    label={"Category"}
                    required={false}
                    selected={[
                      {
                        key: "categories",
                        value: "",
                        label: "Choose Your Selected",
                      },
                    ]}
                    data={categories.map((item, index) => ({
                      key: item.id,
                      value: item.slug,
                      label: item.category,
                    }))}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Option
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    id={"tag"}
                    name={"tag"}
                    label={"Hashtag"}
                    required={false}
                    selected={[
                      { key: "tags", value: "", label: "Choose Your Selected" },
                    ]}
                    data={tags.map((item, index) => ({
                      key: item.id,
                      value: item.tag,
                      label: item.tag,
                    }))}
                  />
                </div>
              </Card>
              <WYSIWYG
                value={body}
                onChange={(e) => setBody(e.target.value)}
                id={"body"}
                name={"body"}
                label={"Body"}
                rows={4}
                required={false}
              />
              <Card
                footer={
                  <Button
                    id={"btnSave"}
                    type={"submit"}
                    label={"Save"}
                    color={"blue"}
                    icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                  />
                }
                cols={6}
              >
                <div className="col-span-6 sm:col-span-3">
                  <InputFile
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    id={"thumbnail"}
                    name={"thumbnail"}
                    label={"Thumbnail"}
                    help={"Ext: jpg, jpeg, png, svg. Max: 1024MB"}
                    required={false}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputFile
                    onChange={(e) => setFile(e.target.files[0])}
                    id={"file"}
                    name={"file"}
                    label={"File"}
                    help={"Ext: pdf, docx, xlsx, pptx. Max: 1024MB"}
                    required={false}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputButton
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    id={"slug"}
                    type={"text"}
                    name={"slug"}
                    label={"Slug"}
                    icon={
                      <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    }
                    required={false}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    id={"publishedAt"}
                    type={"datetime-local"}
                    name={"publishedAt"}
                    label={"Date Post"}
                    required={false}
                  />
                </div>
              </Card>
            </div>
          </div>
        </form>
      </PanelLayout>
    </>
  );
};

export default AddBlog;
