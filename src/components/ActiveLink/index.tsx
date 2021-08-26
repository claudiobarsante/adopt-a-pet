import Link from 'next/link';

import { useRouter } from 'next/router';
import * as S from './styles';

type Props = {
  href: string;
  name: string;
};

const ActiveLink = ({ href, name }: Props) => {
  const { asPath } = useRouter(); //route that you're currently accessing
  /*if the route that you're currently accessing is equal to the href that you're passing as parameter, then the link is active*/
  //const className = asPath === rest.href ? activeClassName : '';
  return (
    // -- you cant'add style direct to a Link component

    <Link href={href}>
      <S.StyledLink>{name}</S.StyledLink>
    </Link>
  );
};

export default ActiveLink;
