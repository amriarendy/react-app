import Login from "../../organisms/auth/Login";

const LoginView = () => {
  return (
    <>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg border border-gray-300 shadow dark:bg-gray-800 dark:border-gray-500">
        <Login />
      </div>
    </>
  );
};

export default LoginView;
