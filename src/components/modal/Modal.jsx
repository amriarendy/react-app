import { IoMdClose } from "react-icons/io";

const Modal = ({ body, toggleModal }) => {
  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 ${
          toggleModal ? "flex" : ""
        } items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
          toggleModal ? "block" : "hidden"
        }`}
        id="add-user-modal"
      >
        {" "}
        {/* Dark background */}
        <div
          className={`fixed inset-0 bg-black opacity-50 ${
            toggleModal ? "block" : "hidden"
          }`}
          // onClick={toggleModal}
        ></div>
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
              <h3 className="text-xl font-semibold dark:text-white">
                {body.header}
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-red-600 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-700 dark:hover:text-white"
                data-modal-toggle="add-user-modal"
              >
                <IoMdClose className="w-5 h-5" fill="currentColor" />
              </button>
            </div>

            <div className="p-6">
              <form action="#"></form>
              <div className={`grid grid-cols-${body.content.grid} gap-6`}>
                {body.content.elements.map((item) => (
                  <div className={item.col} key={item.key}>
                    {item.attribute}
                  </div>
                ))}
              </div>
            </div>

            {body.footer && (
              <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                {body.footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
