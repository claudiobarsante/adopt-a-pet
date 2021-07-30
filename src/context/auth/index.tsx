import { SignUpInfo, signUpUserService } from 'api/services/authService';
import { createContext, useCallback, useContext } from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextData = {
  signUp: (signUpInfo: SignUpInfo) => void;
};
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const signUp = useCallback(async (signUpInfo: SignUpInfo) => {
    const {
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
    } = signUpInfo;
    try {
      const response = await signUpUserService({
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
      const parsedResponse = JSON.parse(response.data);
      console.log('response', parsedResponse);
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
