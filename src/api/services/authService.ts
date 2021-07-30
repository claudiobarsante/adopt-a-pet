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

export const signUpUserService = ({
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
}: SignUpInfo) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return apiClient({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: `${baseUrl}/v1/account/register`,
    data: JSON.stringify({
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
    })
  });
};
