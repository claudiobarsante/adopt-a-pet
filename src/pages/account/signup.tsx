import Head from 'next/head';
import SignUpForm from 'components/SignUpForm';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
