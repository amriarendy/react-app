import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import Card from "../../../components/molecules/card/Card";
import {
  Alert,
  AlertAditionalContent,
  AlertBorder,
  AlertList,
} from "../../../components/molecules/alerts/Alert";
import AlertView from "../../../components/templates/panel/templates/AlertView";

const Alerts = () => {
  return (
    <>
      <PanelLayout>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <AlertView />
        </div>
      </PanelLayout>
    </>
  );
};

export default Alerts;
