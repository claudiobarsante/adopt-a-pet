import ActiveLink from 'components/ActiveLink';
import Button from 'components/Button';
import React, { useCallback } from 'react';
import Menu from './Menu';
import * as S from './styles';
import Image from 'next/image';
import picKitten from '/public/img/kitten.png';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleMobileMenuClick = () => {
    console.log('cli');
  };

  const handleLogIn = useCallback(() => {
    router.push('/api/auth/login');
  }, [router]);

  return (
    <>
      <S.Nav>
        <S.LogoContainer>
          <S.Logo onClick={handleLogoClick}>
            <Image
              //key={`photo-${index}`}
              src={picKitten}
              alt="picture"
              quality={75}
            />
          </S.Logo>
        </S.LogoContainer>

        <Menu />

        <S.TopRightContainer>
          <ActiveLink href="/account/signup" name="Cadastre-se" />
          <li>
            <Button
              backgroundColor="black"
              textColor="white"
              size="medium"
              onClick={handleLogIn}
            >
              Log in
            </Button>
          </li>
        </S.TopRightContainer>
      </S.Nav>
      <S.MobileMenu>
        <S.MobileMenuButton onClick={handleMobileMenuClick} />
      </S.MobileMenu>
    </>
  );
};

export default Navbar;
