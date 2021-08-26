import Head from 'next/head';
import SignUpForm from 'components/SignUpForm';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Cadastre-se | Adote um Pet 🐈</title>
      </Head>
      <SignUpForm />;
    </>
  );
};

export default SignUp;
