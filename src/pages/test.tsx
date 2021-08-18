import { GetStaticProps } from 'next';
import Image from 'next/image';
const Test = () => {
  return (
    <>
      <h1>My Homepage</h1>
      <Image src="/loader.gif" width={20} height={20} />
      <p>Welcome to my homepage!</p>
    </>
  );
};

export default Test;
