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
        console.log('pasei no context', success, errorDescription);
        if (success) {
          router.push('/account/signin');
        } else {
          console.log('passei no erro-dentro do if');
          toast.error(`sddfsdfd`, {
            autoClose: 5000,
            closeOnClick: true,
            draggable: true,
            hideProgressBar: false,
            pauseOnHover: true,
            position: 'top-right',
            transition: Slide
          });
        }
      } catch (error) {
        console.log('passei no erro');
        toast.error(`sddfsdfd`, {
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          pauseOnHover: true,
          position: 'top-right',
          transition: Slide
        });
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
