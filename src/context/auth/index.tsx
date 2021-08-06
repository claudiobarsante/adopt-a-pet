import {
  Credentials,
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
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  const signUp = useCallback(
    async (userData: SignUpInfo) => {
      try {
        const response = await signUpService(userData);

        if (response.status === ResponseStatus.OK) {
          router.push('/account/signin');
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [router]
  );

  const signIn = useCallback(async () => {}, []);
  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
