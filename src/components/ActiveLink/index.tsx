import Link from 'next/link';
//import Image from 'next/image';
//import { useRouter } from 'next/router';
import * as S from './styles';
//import underlinePic from '/public/img/underline.png';

type Props = {
  href: string;
  name: string;
};

const ActiveLink = ({ href, name }: Props) => {
  // const { asPath } = useRouter(); //route that you're currently accessing
  /*if the route that you're currently accessing is equal to the href that you're passing as parameter, then the link is active*/
  //const className = asPath === rest.href ? activeClassName : '';
  return (
    // -- you cant'add style direct to a Link component
    <>
      <Link href={href} passHref>
        <S.StyledLink>{name}</S.StyledLink>
      </Link>

      {/* <S.Picture>
        <Image src={underlinePic} alt="underline" quality={75} />
      </S.Picture> */}
    </>
  );
};

export default ActiveLink;
