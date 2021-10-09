import ActiveLink from 'components/ActiveLink';
import React from 'react';
import * as S from './styles';
const Menu = () => {
  return (
    <S.LinksContainer>
      <ActiveLink href="/pets" name="Pets" />
      <ActiveLink href="/services" name="Serviços" />
      <ActiveLink href="/articles" name="Artigos" />
      <ActiveLink href="/stories" name="Histórias de Sucesso" />
      <ActiveLink href="/articles" name="Artigos" />
    </S.LinksContainer>
  );
};

export default Menu;
