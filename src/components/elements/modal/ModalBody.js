const ModalBody = ({ children }) => {
  return (
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        {children}
      </div>
    </div>
  );
};

export default ModalBody;
