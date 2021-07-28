import apiClient from './../client';

export const getBaseInfosService = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return apiClient({
    method: 'GET',
    url: `${baseUrl}/v1/adoption/baseInfos`
  });
};
