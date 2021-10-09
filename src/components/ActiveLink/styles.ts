import styled, { css } from 'styled-components';

type PictureProps = {
  isActive: boolean;
};
export const StyledLink = styled.a`
  color: var(--color-primary);
  font-size: 1.9rem;
  font-weight: 500;

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
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
export const Picture = styled.picture<PictureProps>`
  visibility: hidden;
  ${(props) =>
    props.isActive &&
    css`
      visibility: visible;
    `}
`;
