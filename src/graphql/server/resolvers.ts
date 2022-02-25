import { Resolvers } from 'graphql/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    breeds: async (_, __, { dataSources }) => {
      const result = await dataSources.petAPI.getBreeds();
      const { breeds } = JSON.parse(result);

      return breeds;
    }
  }
};
