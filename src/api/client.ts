import axios, { AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from 'context/auth';
import { parseCookies } from 'nookies';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { TOKEN_KEY: token } = parseCookies();

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }
);

export default apiClient;
