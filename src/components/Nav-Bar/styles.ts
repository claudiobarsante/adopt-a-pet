import styled from 'styled-components';

export const Header = styled.header`
  display: grid;

  grid-template-columns: 20% 60% 10% 10%;

  justify-content: center;
  align-items: center;
  //border: 1px solid gray;

  background: transparent;
  // color: black;
  height: 12rem;
  margin-bottom: 3rem;
  // width: 86.9rem;

  /* position: absolute;
  margin: 0 auto;
  // -- to center a fixed or absolute element
  left: 0;
  right: 0;
  // --
  z-index: 999; */
`;

export const LogoContainer = styled.div`
  //border: 1px solid gray;
  // grid-area: logo;
  // justify-content: flex-start;
  align-items: center;
`;

export const Nav = styled.nav`
  //border: 1px solid gray;
  //grid-area: menu;
  a + a {
    margin-left: 12rem;
  }
`;

export const SignUpContainer = styled.div`
  //border: 1px solid gray;
  //grid-area: sign-up;
`;

export const LoginContainer = styled.div`
  border: 1px solid gray;
  fit-content: ;
  //grid-area: login;
`;
