import ActiveLink from 'components/Active-Link';
import React from 'react';

const Menu = () => {
  return (
    <nav>
      <ActiveLink href="/" name="Pets" />
      <ActiveLink href="/" name="Serviços" />
      <ActiveLink href="/" name="Artigos" />
      <ActiveLink href="/" name="Histórias de Sucesso" />
    </nav>
  );
};

export default Menu;
