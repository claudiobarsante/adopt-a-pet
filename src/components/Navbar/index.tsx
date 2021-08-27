import ActiveLink from 'components/ActiveLink';
import Button from 'components/Button';
import React from 'react';
import Menu from './Menu';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <ActiveLink href="/" name="Página Inicial" />
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