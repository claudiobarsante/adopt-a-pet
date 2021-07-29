import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  // justify-content: center;
  align-items: center;

  background: transparent;
  color: black;
  height: 12rem;
  width: 86.9rem;

  position: absolute;
  margin: 0 auto;
  // -- to center a fixed or absolute element
  left: 0;
  right: 0;
  // --
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Nav = styled.nav`
  a + a {
    margin-left: 12rem;
  }
`;
