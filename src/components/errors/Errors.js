const Errors = ({ code, status, message }) => {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-red-500">
            {code}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {status}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>
    </>
  );
};

export default Errors;