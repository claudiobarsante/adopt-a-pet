import styled, { keyframes, css } from 'styled-components';
import { IoListCircleSharp } from 'react-icons/io5';
import media from 'styled-media-query';

export const Nav = styled.nav`
  display: none;
  border: 1px solid yellow;
  ${media.greaterThan('large')`
  display: flex;
  align-items: center;

  position: relative;

  `}
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

export const TopRightContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid red;
  list-style: none;
  position: absolute;
  right: 0;
  width: 20%;
  min-width: 240px;
`;

export const MobileMenu = styled.div`
  display: flex;
  ${media.greaterThan('large')`display: none;`}
`;

export const MobileMenuButton = styled(IoListCircleSharp)`
  ${({ theme }) => css`
    margin-top: 2rem;
    height: 7rem;
    width: 7rem;
    color: ${theme.colors.primary};

    &:hover {
      cursor: pointer;
    }
  `}
`;
