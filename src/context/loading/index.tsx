import { createContext, useCallback, useContext, useState } from 'react';

type LoadingProviderProps = {
  children: React.ReactNode;
};

type LoadingContextData = {
  isLoading: boolean;
  changeIsLoadingToTrue: () => void;
  changeIsLoadingToFalse: () => void;
};

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const changeIsLoadingToTrue = useCallback(() => {
    setIsLoading(true);
  }, []);

  const changeIsLoadingToFalse = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ isLoading, changeIsLoadingToTrue, changeIsLoadingToFalse }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
