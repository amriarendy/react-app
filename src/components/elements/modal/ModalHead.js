const ModalHead = ({ children, toggleModal }) => {
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
        // onClick={toggleModal}
      ></div>
      {children}
    </div>
  );
};

export default ModalHead;
