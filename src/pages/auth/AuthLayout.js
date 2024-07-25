const AuthLayout = ({ children }) => {
  return (
    <>
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
          <a
            href="#"
            className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
          >
            <img
              src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
              className="mr-4 h-11"
              alt="FlowBite Logo"
            />
            <span>Flowbite</span>
          </a>
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
