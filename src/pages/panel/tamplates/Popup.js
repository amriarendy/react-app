import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import { Button } from "../../../components/atoms/Button";
import { useState } from "react";
import Modal from "../../../components/organisms/modal/Modal";
import { Input } from "../../../components/atoms/Input";
import ModalRead from "../../../components/organisms/modal/ModalRead";

const Popup = () => {
  const breadCrumbs = {
    page: "Popups",
    data: [
      { page: "Templates", route: "/dashboard/templates/popup" },
      { page: "Popups", route: "/dashboard/templates/popup" },
    ],
  };

  // modal state
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);

  const toggleInputModal = () => {
    setIsInputModalOpen(!isInputModalOpen);
  };

  const toggleReadModal = () => {
    setIsReadModalOpen(!isReadModalOpen);
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />

        {/* modal */}
        <div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto mb-4 max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-center text-xl mb-4 font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Modal
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              <Button
                type="button"
                label="Modal"
                color="blue"
                onClick={toggleInputModal}
              />
              <Button
                type="button"
                label="Read Modal"
                color="blue"
                onClick={toggleReadModal}
              />
            </div>
          </div>

          {/* popups */}
          <div className="mx-auto mb-4 max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-center text-xl mb-4 font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Popup
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              <Button
                type="button"
                label="Modal"
                color="blue"
                onClick={toggleInputModal}
              />
              <Button
                type="button"
                label="Read Modal"
                color="blue"
                onClick={toggleReadModal}
              />
            </div>
          </div>
        </div>

        {/* modal */}
        {isInputModalOpen && (
          <Modal toggleModal={toggleInputModal} header={"Modal Input"}>
            {" "}
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Input type={"text"} label={"Input Text"} required={false} />
              </div>
            </div>
          </Modal>
        )}

        {isReadModalOpen && (
          <ModalRead toggleModal={toggleReadModal} header={"Read Modal"}>
            {" "}
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Category
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Electronics/PC
              </dd>
            </dl>
          </ModalRead>
        )}
      </PanelLayout>
    </>
  );
};

export default Popup;
