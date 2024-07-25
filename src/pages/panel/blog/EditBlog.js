import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { Button } from "../../../components/ui/Button";
import { FaSave } from "react-icons/fa";
import { Input, InputFile } from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import TextArea from "../../../components/ui/TextArea";
import WYSIWYG from "../../../components/ui/WYSIWYG";

const EditBlog = () => {
  const breadCrumbs = {
    page: "Blog Edit",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "Edit", route: "/blog/edit" },
    ],
  };
  const imageClass =
    "mb-4 rounded-lg h-auto max-w-full sm:mb-0 xl:mb-4 2xl:mb-0";
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card cols={6}>
            <div className="col-span-6">
              <Input
                id={"title"}
                name={"title"}
                type={"text"}
                label={"Title"}
                required={false}
              />
            </div>
            <div className="col-span-6">
              <TextArea
                id={"description"}
                name={"description"}
                label={"Description"}
                rows={4}
                required={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Option
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
                type={"button"}
                label={"Save"}
                color={"blue"}
                icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
              />
            }
            cols={6}
          >
            <div className="col-span-6 sm:col-span-3">
              <InputFile
                id={"thumbnail"}
                name={"thumbnail"}
                label={"Thumbnail"}
                help={"Ext: jpg, jpeg, png, svg. Max: 1024MB"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <InputFile
                id={"file"}
                name={"file"}
                label={"File"}
                help={"Ext: pdf, docx, xlsx, pptx. Max: 1024MB"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"slug"}
                type={"text"}
                name={"slug"}
                label={"Slug"}
                required={false}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                id={"file"}
                type={"date"}
                name={"file"}
                label={"File"}
                required={false}
              />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default EditBlog;
