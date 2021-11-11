import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './styles';
import underlinePic from '/public/img/underline.png';

export type ActiveLinkProps = {
  href: string;
  name: string;
};

const ActiveLink = ({ href, name }: ActiveLinkProps) => {
  const { asPath } = useRouter(); //route that you're currently accessing
  /*if the route that you're currently accessing is equal to the href that you're passing as parameter, then the link is active*/
  const isActive = asPath === href;

  console.log('asPath: ' + asPath, 'href:', href);
  return (
    // -- you cant'add style direct to a Link component
    <S.LinkContainer>
      <Link href={href} passHref>
        <S.StyledLink>{name}</S.StyledLink>
      </Link>

      <S.Picture isActive={isActive}>
        <Image src={underlinePic} alt="underline" quality={75} />
      </S.Picture>
    </S.LinkContainer>
  );
};

export default ActiveLink;
