import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { Input, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import WYSIWYG from "../../../components/ui/WYSIWYG";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const breadCrumbs = {
    page: "Blog Add",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "Add", route: "/blog/add" },
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
      await axios.post(`http://localhost:3001/blogs/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/blog");
    } catch (error) {
      console.log(error);
    }
  }

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
                  onChange={(e) => setTitle(e.target.value)}
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
                  required={true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Option
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id={"category"}
                  name={"category"}
                  label={"Category"}
                  required={true}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { key: "business", value: "business", label: "Business" },
                    { key: "politic", value: "politic", label: "Politic" },
                  ]}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Option
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  id={"tag"}
                  name={"tag"}
                  label={"Hashtag"}
                  required={true}
                  selected={[
                    { key: "", value: "", label: "Choose Your Selected" },
                  ]}
                  data={[
                    { key: "business", value: "business", label: "Business" },
                    { key: "politic", value: "politic", label: "Politic" },
                  ]}
                />
              </div>
            </Card>
            <WYSIWYG />
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
                <Input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  id={"slug"}
                  type={"text"}
                  name={"slug"}
                  label={"Slug"}
                  required={false}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  id={"publishedAt"}
                  type={"date"}
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
