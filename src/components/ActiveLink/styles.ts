import styled from 'styled-components';

export const StyledLink = styled.a`
  color: var(--color-primary);
  font-size: 1.7rem;
  font-weight: 600;

  &:hover {
    text-shadow: 0px 0px 0.1px black;
    cursor: pointer;
  }

  /* &:active::after {
    content: '';
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background: var(--color-primary;
  } */
`;
