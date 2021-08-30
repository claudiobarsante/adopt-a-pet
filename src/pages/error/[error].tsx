import { GetStaticPaths, GetStaticProps } from 'next';

export enum ErrorType {
  IS_ALREADY_AUTHENTICATED = 'is-already-authenticated'
}

export default function ErrorDetails() {
  return (
    <>
      <h1> Error description</h1>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('error', params);

  return {
    props: {}
  };
};
