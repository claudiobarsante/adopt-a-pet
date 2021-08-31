import ActiveLink from 'components/ActiveLink';
import Button from 'components/Button';
import React, { useCallback } from 'react';
import Menu from './Menu';
import * as S from './styles';
import Image from 'next/image';
import picKitten from '/public/img/kitten.png';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <S.Header>
      <S.LogoContainer>
        <S.Logo onClick={handleLogoClick}>
          <Image
            //key={`photo-${index}`}
            src={picKitten}
            alt="picture"
            quality={75}
          />
        </S.Logo>

        {/* <ActiveLink href="/" name="Página Inicial" /> */}
      </S.LogoContainer>
      <S.Nav>
        <Menu />
      </S.Nav>
      <S.SignUpContainer>
        <ActiveLink href="/account/signup" name="Cadastre-se" />
      </S.SignUpContainer>
      <S.LoginContainer>
        <Button backgroundColor="black" textColor="white" size="medium">
          Log in
        </Button>
      </S.LoginContainer>
    </S.Header>
  );
};

export default Navbar;
