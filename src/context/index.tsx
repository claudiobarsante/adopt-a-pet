import { AuthProvider } from './auth';
import { LoadingProvider } from './loading';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <LoadingProvider>
      <AuthProvider>{children}</AuthProvider>
    </LoadingProvider>
  );
};

export default AppProvider;
