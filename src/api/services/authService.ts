import apiClient from './../client';

export type SignUpInfo = {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  zipcode: string;
  neighborhood: string;
  city: string;
  state: string;
  code: string;
};

export const signUpService = (userData: SignUpInfo) => {
  return apiClient({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: '/v1/account/register',
    data: JSON.stringify(userData)
  });
};

export type Credentials = {
  email: string;
  password: string;
};

export const signInService = ({ email, password }: Credentials) => {
  return apiClient({
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    url: '/token',
    data: `username=${email}&password=${password}&grant_type=password`
  });
};
