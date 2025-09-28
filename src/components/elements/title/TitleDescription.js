const TitleDescription = ({ label, description }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {label}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </>
  );
};

export default TitleDescription;
