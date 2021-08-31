import { GetStaticPaths, GetStaticProps } from 'next';
import { ErrorType } from 'helpers/utils';

type Props = {
  error: string;
};

export default function ErrorDetails({ error }: Props) {
  console.log('error', error);
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
  console.log('error3', params?.error);

  return {
    props: { error: params?.error }
  };
};
