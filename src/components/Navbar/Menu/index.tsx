import ActiveLink from 'components/ActiveLink';
import React from 'react';
import * as S from './styles';
const Menu = () => {
  return (
    <S.LinksContainer>
      <ActiveLink href="/pet/search" name="Pets" />
      <ActiveLink href="/services" name="Serviços" />
      <ActiveLink href="/articles" name="Artigos" />
      <ActiveLink href="/stories" name="Histórias de Sucesso" />
      <ActiveLink href="/outros" name="Outros" />
    </S.LinksContainer>
  );
};

export default Menu;
