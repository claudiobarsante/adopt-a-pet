import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  /* display: grid;

  grid-template-columns: 20% 58% 12% 10%;

  justify-content: center;
  align-items: center;
  //border: 1px solid gray;

  background: transparent;
  // color: black;
  height: 12rem;
  margin-bottom: 3rem; */
  // width: 86.9rem;

  /* position: absolute;
  margin: 0 auto;
  // -- to center a fixed or absolute element
  left: 0;
  right: 0;
  // --
  z-index: 999; */
  /* @media screen and (min-width: 1252px) {
    grid-template-columns: 20% 60% 10% 10%;
  } */
`;

export const LogoContainer = styled.div`
  //border: 1px solid gray;
  // grid-area: logo;
  // justify-content: flex-start;
  margin: 1rem;
  width: 10%;
`;

export const Logo = styled.button`
  background: transparent;
  border: 0;
`;

export const Nav = styled.nav`
  //border: 1px solid gray;
  //grid-area: menu;
  a + a {
    margin-left: 4rem;
  }

  @media screen and (min-width: 1389px) {
    a + a {
      margin-left: 12rem;
    }
  }
`;

export const TopRightContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;

  width: 18%;
  min-width: 239px;
  border: 1px solid gray;
  position: absolute;
  right: 0;
`;
