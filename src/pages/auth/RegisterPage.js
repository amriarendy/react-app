import AuthLayout from "../../components/templates/auth/AuthLayout";
import RegisterForm from "../../components/organisms/auth/RegisterForm";
import RegisterView from "../../components/templates/auth/RegisterView";

const Register = () => {
  return (
    <>
      <AuthLayout>
        <RegisterView />
      </AuthLayout>
    </>
  );
};

export default Register;
