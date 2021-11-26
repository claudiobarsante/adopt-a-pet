import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Breed {
    value: String
    text: String
  }

  type Query {
    "Query to get all breeds"
    breeds: [Breed]
  }
`;
