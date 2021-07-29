import ActiveLink from 'components/Active-Link';
import React from 'react';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Header>
      <S.Content>
        <ActiveLink href="/" name="Página Inicial" />
        <S.Nav>
          <ActiveLink href="/" name="Pets" />
          <ActiveLink href="/" name="Serviços" />
          <ActiveLink href="/" name="Artigos" />
          <ActiveLink href="/" name="Histórias de Sucesso" />
        </S.Nav>
      </S.Content>
    </S.Header>
  );
};

export default Navbar;
