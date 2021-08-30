import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';
import { useAuth } from 'context/auth';
import { ErrorType } from 'helpers/utils';
import { useRouter } from 'next/router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const { user } = data;

    if (user.isAuthenticated) {
      router.push(`/error/${ErrorType.IS_ALREADY_AUTHENTICATED}`);
    }
  }, [data, router]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    };

    signIn(data);
  }
  return (
    <>
      <Head>
        <title>Log in | Adote um Pet 🐶</title>
      </Head>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignIn;
