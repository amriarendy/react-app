const FormGroup = ({ children, label, onSubmit }) => {
  return (
    <>
      {" "}
      <div className="py-8{ bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {label}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
            {children}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormGroup;
