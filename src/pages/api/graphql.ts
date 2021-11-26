import { gql, ApolloServer } from 'apollo-server-micro';
import PetAPI from 'graphql/server/datasources/adopt-a-pet-api';
import { typeDefs } from 'graphql/server/schema';
import { resolvers } from 'graphql/server/resolvers';
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      petAPI: new PetAPI()
    };
  }
});

const startServer = apolloServer.start();

const cors = Cors();

export default cors(async function handler(req, res) {
  // -- for Apollo studio to work
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
});

// -- https://nextjs.org/docs/api-routes/api-middlewares
// -- bodyParser Enables body parsing,
// -- the default config on Next it's json
// -- to use GraphQL playground
export const config = {
  api: {
    bodyParser: false
  }
};
