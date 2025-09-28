import ResetPassword from "../../organisms/auth/ResetPassword";

const ResetPasswordView = () => {
  return (
    <>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg border border-gray-300 shadow dark:bg-gray-800 dark:border-gray-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create a Free Account
        </h2>
        <ResetPassword />
      </div>
    </>
  );
};

export default ResetPasswordView;
