import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
});

export default apiClient;
