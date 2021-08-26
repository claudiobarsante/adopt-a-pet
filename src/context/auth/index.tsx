import { toast, Slide } from 'react-toastify';
import {
  Credentials,
  signInService,
  SignUpInfo,
  signUpService
} from 'api/services/authService';
import { setCookie } from 'nookies';

import { createContext, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { getErrorMessage } from 'helpers/errors';
import { useLoading } from 'context/loading';
import { useState } from 'react';
import apiClient from 'api/client';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextData = {
  signUp: (userData: SignUpInfo) => void;
  signIn: (userCredentials: Credentials) => void;
};

type AuthState = {
  user: {
    nickname: string;
    userId: string;
    isAuthenticated: boolean;
    expirationDate: Date;
  };
  error: {
    code: number;
    message: string;
  };
  token: string;
};

export const TOKEN_KEY = '@adopt-a-pet:token';

const INITIAL_STATE: AuthState = {
  user: {
    nickname: '',
    userId: '',
    isAuthenticated: false,
    expirationDate: new Date('2021-0-01')
  },
  error: { code: 0, message: '' },
  token: ''
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(INITIAL_STATE);

  const router = useRouter();
  const { changeIsLoadingToTrue, changeIsLoadingToFalse } = useLoading();

  const signUp = useCallback(
    async (userData: SignUpInfo) => {
      try {
        changeIsLoadingToTrue();

        const response = await signUpService(userData);

        const { success, errorDescription } = JSON.parse(response.data);

        if (success) {
          router.push('/account/signin');
        } else {
          const message = getErrorMessage(
            errorDescription.errors[0],
            userData.email
          );
          toast.info(`😿 ${message}`, {
            transition: Slide
          });
        }
      } catch (error) {
        console.log('error', error);
        toast.error(
          `💥 Ocorreu um erro inesperado no cadastro. Tente em alguns minutos, se o erro persisistir entre em contato conosco`,
          {
            transition: Slide
          }
        );
      } finally {
        changeIsLoadingToFalse();
      }
    },
    [changeIsLoadingToFalse, changeIsLoadingToTrue, router]
  );

  const signIn = useCallback(async (userCredentials: Credentials) => {
    try {
      const response = await signInService(userCredentials);

      const { access_token, expires_in, nickName, id } = response.data;

      const expirationDate = new Date(
        new Date().getTime() + parseInt(expires_in) * 1000 //? *1000 to convert in miliseconds
      );
      const user = {
        nickname: nickName,
        userId: id,
        isAuthenticated: true,
        expirationDate: expirationDate
      };

      const token = access_token;
      apiClient.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      // -- first parameter undefined because it's ont the client side, 2nd name of the token, could be anything,3rd the token
      setCookie(undefined, TOKEN_KEY, token, {
        maxAge: 60 * 60 * 24 * 30, // keep the cookies max 30 days
        path: '/' //any route of my application could access these cookies
      });

      setData((data) => ({ ...data, user, token }));
    } catch (error) {}
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
