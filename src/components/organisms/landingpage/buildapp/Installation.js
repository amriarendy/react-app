const Installation = () => {
  return (
    <div className="text-justify pb-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
        #Installation
      </h2>
      <p className="mt-6 text-xl leading-8">
        clone project frontend
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          git clone https://github.com/amriarendy/react-app.git
        </span>
        clone project backend
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          git clone -b {"<branch>"} https://github.com/amriarendy/react-app.git
        </span>
        go to project directory
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          <span className="font-semibold text-blue-900">cd</span> react-app
        </span>
        install npm dependencies
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          <span className="font-semibold text-yellow-300">npm</span> update or{" "}
          <span className="font-semibold text-yellow-300">npm</span> install
        </span>
        migrate database and seeder
      </p>
    </div>
  );
};

export default Installation;
