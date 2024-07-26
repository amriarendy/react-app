import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Card from "../../components/card/Card";
import {AlertAditionalContent, AlertBorder, AlertList, Alerts} from "../../components/alerts/Alerts";
import { FaInfoCircle } from "react-icons/fa";

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
              <Alerts color={'blue'} icon={<FaInfoCircle className="flex-shrink-0 w-4 h-4" />} message={'Info alert! Change a few things up and try submitting again.'} />
              <AlertList />
              <AlertBorder />
              <AlertAditionalContent />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Blank;
