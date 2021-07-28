import { signUpUserService } from 'api/services/authService';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';

const SignUp = () => {
  const router = useRouter();
  const handleSignUp = useCallback(async () => {
    try {
      const response = await signUpUserService({
        nickname: 'Testeee',
        email: 'testeee@gmaiddlsd.com',
        password: 'Teste@2021',
        confirmPassword: 'Teste@2021'
      });
      const parsedResponse = JSON.parse(response.data);

      console.log('response', parsedResponse);
      // router.replace('/test');
    } catch (error) {
      console.log('error', error);
    }
  }, [router]);
  return (
    <>
      <h1>SignUp</h1>
      <button onClick={() => handleSignUp()}>SignUp</button>
    </>
  );
};

export default SignUp;
