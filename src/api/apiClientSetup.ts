import axios, { AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from 'context/auth';
import { parseCookies } from 'nookies';
import { GetServerSidePropsContext } from 'next';

export default function apiClientSetup(context?: GetServerSidePropsContext) {
  // --
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
  });

  const cookies = parseCookies(context);

  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const token = cookies[TOKEN_KEY];

      config.headers.Authorization = `Bearer ${token}`;

      return config;
    }
  );

  return api;
}
