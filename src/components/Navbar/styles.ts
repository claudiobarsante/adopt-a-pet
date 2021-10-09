import styled from 'styled-components';
import { IoListCircleSharp } from 'react-icons/io5';

export const Header = styled.header`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;

    position: relative;
  }
`;

export const LogoContainer = styled.div`
  margin: 1rem;
  min-width: 157px;
  width: 10%;
`;

export const Logo = styled.button`
  background: transparent;
  border: 0;
`;

export const Nav = styled.div`
  border: 1px solid gray;
  //grid-area: menu;
  /* a + a {
    margin-left: 4rem;
  }

  @media screen and (min-width: 1389px) {
    a + a {
      margin-left: 12rem;
    }
  } */

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const TopRightContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;

  width: 18%;
  min-width: 239px;
  border: 1px solid gray; */
  // position: absolute;
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    min-width: 239px;
    position: absolute;
    right: 0;
    top: 3.3rem;
    width: 18%;
  }
  display: none;
`;

export const MobileMenu = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenuButton = styled(IoListCircleSharp)`
  margin-top: 2rem;
  height: 7rem;
  width: 7rem;
  color: var(--color-primary);

  &:hover {
    cursor: pointer;
  }
`;
