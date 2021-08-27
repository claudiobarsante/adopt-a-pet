import apiClientSetup from 'api/apiClientSetup';

import { GetServerSidePropsContext } from 'next';

export const getBaseInfosService = (context: GetServerSidePropsContext) => {
  const api = apiClientSetup(context);
  return api({
    method: 'GET',
    url: '/v1/adoption/baseInfos'
  });
};
