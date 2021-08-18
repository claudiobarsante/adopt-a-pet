import { toast, Slide } from 'react-toastify';
import {
  Credentials,
  signInService,
  SignUpInfo,
  signUpService
} from 'api/services/authService';
import { ResponseStatus } from 'helpers/utils';
import { createContext, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { getErrorMessage } from 'helpers/errors';

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
  isLoading: boolean;
};
const INITIAL_STATE: AuthState = {
  user: {
    nickname: '',
    userId: '',
    isAuthenticated: false,
    expirationDate: new Date('2021-0-01')
  },
  error: { code: 0, message: '' },
  token: '',
  isLoading: false
};
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  const signUp = useCallback(
    async (userData: SignUpInfo) => {
      try {
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
      }
    },
    [router]
  );

  const signIn = useCallback(async (userCredentials: Credentials) => {
    try {
      const response = await signInService(userCredentials);
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
