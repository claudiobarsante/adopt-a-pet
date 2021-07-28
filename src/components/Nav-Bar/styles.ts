import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  height: 6.4rem;
  width: 86.9rem;
  margin: 0 auto;
`;

export const Content = styled.div``;

export const Nav = styled.nav`
  a + a {
    margin-left: 1.6rem;
  }
`;
