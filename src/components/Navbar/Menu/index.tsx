import ActiveLink from 'components/ActiveLink';
import React from 'react';

const Menu = () => {
  return (
    <nav>
      <ActiveLink href="/pets" name="Pets" />
      <ActiveLink href="/services" name="Serviços" />
      <ActiveLink href="/articles" name="Artigos" />
      <ActiveLink href="/stories" name="Histórias de Sucesso" />
    </nav>
  );
};

export default Menu;
