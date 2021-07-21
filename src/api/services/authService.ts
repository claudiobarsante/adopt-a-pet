import apiClient from './../client';

export type SignUpInfo = {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const signUpUserService = ({
  nickname,
  password,
  email,
  confirmPassword
}: SignUpInfo) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return apiClient({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: `${baseUrl}/api/account/register`,
    data: JSON.stringify({ nickname, email, password, confirmPassword })
  });
};
