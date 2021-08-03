import { useRouter } from 'next/dist/client/router';
import { Formik } from 'formik';

// -- Context
import { useAuth } from 'context/auth';
// -- Services
import { SignUpInfo } from 'api/services/authService';
// -- Components
import SignUpForm from 'components/Sign-Up';
// -- Helpers
import { INITIAL_VALUES, SignUpSchema } from 'helpers/sign-up/formik';

const SignUp = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  const handleSubmit = async ({
    nickname,
    password,
    email,
    confirmPassword,
    phone,
    zipcode,
    neighborhood,
    city,
    state,
    code
  }: SignUpInfo) => {
    signUp({
      nickname,
      password,
      email,
      confirmPassword,
      phone,
      zipcode,
      neighborhood,
      city,
      state,
      code
    });
  };

  return (
    <>
      <h1>Cadastro</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SignUpSchema}
        onSubmit={(values) => handleSubmit(values)}
        validateOnBlur
      >
        {() => <SignUpForm />}
      </Formik>
    </>
  );
};

export default SignUp;
