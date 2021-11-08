import styled, { css } from 'styled-components';

type PictureProps = {
  isActive: boolean;
};
export const StyledLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semiBold};
    &:hover {
      text-shadow: 0px 0px 0.1px black;
      cursor: pointer;
    }
  `}
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;
export const Picture = styled.picture<PictureProps>`
  visibility: hidden;
  ${(props) =>
    props.isActive &&
    css`
      visibility: visible;
    `}
`;
