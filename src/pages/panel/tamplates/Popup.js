import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Button } from "../../../components/ui/Button";
import { useState } from "react";

const Popup = () => {
  const breadCrumbs = {
    page: "Popups",
    data: [
      { page: "Templates", route: "/dashboard/templates/popup" },
      { page: "Popups", route: "/dashboard/templates/popup" },
    ],
  };
  
  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
                <Button
                  type="button"
                  label="Modal"
                  color="blue"
                />
                <Button
                  type="button"
                  label="Read Modal"
                  color="blue"
                />
            </div>
          </div>
        </div>  
      </PanelLayout>
    </>
  );
};

export default Popup;
