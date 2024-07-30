import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Card from "../../components/card/Card";
import {
  AlertAditionalContent,
  AlertBorder,
  AlertList,
  Alert,
} from "../../components/alerts/Alert";

const Blank = () => {
  const breadCrumbs = {
    page: "Blank",
    data: [{ page: "Blank", route: "/blank" }],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-full xl:col-auto">
          <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
            <p className="dark:text-gray-300">col-span-full xl:col-auto</p>
          </Card>
        </div>
        <div className="col-span-2">
          <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
            <p className="dark:text-gray-300">col-span-2</p>
          </Card>
        </div>
        <div className="col-span-3">
          <Card header={"Card Header"} footer={"Card Footer"} cols={2}>
            <div className="col-span-1 dark:text-gray-300">col-span-3</div>
            <div className="col-span-1 dark:text-gray-300">col-span-3</div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <div className="col-span-1 bg-red-100 dark:text-gray-300">
              col-span-3
            </div>
            <div className="col-span-1 bg-blue-100 dark:text-gray-300">
              col-span-3
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          <Card header={"Alert"}>
            <div className="col-span-1">
              <Alert
                code={200}
                message={"Nice Work! Success alert with code 200."}
              />
              <AlertList
                code={422}
                label={"Warning! Validation status code 422"}
                data={[
                  { message: "Input required" },
                  { message: "Email format validation" },
                  { message: "At least one lowercase character" },
                  {
                    message:
                      "At least 10 characters (and up to 100 characters)",
                  },
                  {
                    message:
                      "Inclusion of at least one special character, e.g., ! @ # ?",
                  },
                ]}
              />
              <AlertAditionalContent
                code={500}
                label={"This is a danger alert"}
                message={
                  " More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
                }
              />
              <AlertBorder
                message={"Information: You good and god bless you."}
              />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Blank;
