const RunningTest = () => {
  return (
    <div className="text-justify pb-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
        #Running Test
      </h2>
      <p className="mt-6 text-xl leading-8">
        debug frontend test, port default 3000
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          npm run start
        </span>
        debug backend test, port default 3001
        <span class="text-center bg-gray-200 block dark:bg-gray-900">
          nodemon index.js
        </span>
      </p>
    </div>
  );
};

export default RunningTest;
