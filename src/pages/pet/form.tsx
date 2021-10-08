import Select from 'components/Select';
// import { GetStaticProps } from 'next';
// import { getBaseInfosService } from './../../api/services/formService';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getBaseInfosService } from 'api/services/formService';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type Content = {
  text: string;
  value: string;
};
type Props = {
  breeds: Content[];
  colors: Content[];
  furs: Content[];
  sizes: Content[];
  tempers: Content[];
  species: Content[];
};
const PetForm = ({ breeds, colors, furs, sizes, tempers, species }: Props) => {
  return (
    <>
      <h1>Pet Form</h1>
      <div>
        <Select data={breeds} type="breed" />
      </div>
    </>
  );
};

export default PetForm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hasuraEndpoint = createHttpLink({
    uri: 'https://positive-sponge-35.hasura.app/v1/graphql'
  });

  const requestHeaders = setContext(() => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'zRr0D2QvOMUDwgi3Io7L6SJLUcrZi7F13bpO2HsmjwLXaXAgXhixTEGVkThShxZG'
      }
    };
  });

  const client = new ApolloClient({
    link: requestHeaders.concat(hasuraEndpoint),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GET_BREED {
        breed {
          text: name
          value: breedId
        }
      }
    `
  });

  const breeds = data.breed.map((breed) => ({
    text: breed.text,
    value: String(breed.value)
  }));

  return {
    props: { breeds }
  };

  // const result = await getBaseInfosService(context);
  // const info = JSON.parse(result.data);
  // const { breeds, colors, furs, sizes, tempers, species } = info;

  // return {
  //   props: { breeds, colors, furs, sizes, tempers, species }
  // };
};
