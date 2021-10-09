import Image from 'next/image';
import picHome from '/public/img/home-right.png';
import * as S from 'styles/pages/home';
import Button from 'components/Button';
import { FaPaw } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <S.Main>
        <S.Hero>
          <h1>Abra seu coração</h1>
          <h2>para um amigo na sua vida.</h2>
          <p>Pensando em adotar um pet ?</p>
          <Button backgroundColor="black" textColor="white" size="medium">
            Comece por aqui <FaPaw />
          </Button>
        </S.Hero>
        <S.Picture>
          <Image
            //key={`photo-${index}`}
            src={picHome}
            alt="picture"
            quality={75}
          />
        </S.Picture>
      </S.Main>

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
