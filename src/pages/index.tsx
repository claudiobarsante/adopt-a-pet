import Image from 'next/image';
import picHome from '/public/img/right-side.png';
import Button from 'components/Button/index';
export default function Home() {
  return (
    <>
      <Button>Log in</Button>
      {/* <Image
        //key={`photo-${index}`}
        src={picHome}
        alt="picture"
        //width={1000}
        //   height={600}
        //quality={75}
      /> */}
    </>
  );
}
