import apiClient from 'api/client';

export const getAddressInfo = (zipcode: string) => {
  return apiClient({
    method: 'GET',
    url: `https://viacep.com.br/ws/${zipcode}/json/`
    //url: `https://api.postmon.com.br/v1/cep/${zipcode}`
  });
};
