const ModalGroup = ({ children, toggleModal }) => {
  return (
    <div
      aria-hidden="true"
      className={`fixed left-0 right-0 z-50 ${
        toggleModal ? "flex" : ""
      } items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
        toggleModal ? "block" : "hidden"
      }`}
    >
      {" "}
      {/* Dark background */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          toggleModal ? "block" : "hidden"
        }`}
      ></div>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalGroup;
