import LoginForm from "../../organisms/auth/LoginForm";

const LoginView = () => {
  return (
    <>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginView;
