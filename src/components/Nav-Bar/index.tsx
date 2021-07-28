import ActiveLink from 'components/Active-Link';
import React from 'react';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Header>
      <S.Content>
        <S.Nav>
          <ActiveLink href="/" name="Página Inicial" />
          <ActiveLink href="/" name="Pets" />
          <ActiveLink href="/" name="Serviços" />
          <ActiveLink href="/" name="Patrocinadores" />
          <ActiveLink href="/" name="Histórias de sucesso" />
          <ActiveLink href="/" name="Artigos" />
        </S.Nav>
      </S.Content>
    </S.Header>
  );
};

export default Navbar;
