import styled, { css, DefaultTheme } from 'styled-components';
import Image from 'next/image';
import { ButtonProps } from '.';
import media from 'styled-media-query';

type ContainerProps = {
  hasIcon: boolean;
} & ButtonProps;

const containerModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      color: ${theme.colors.white};
      margin-left: 1.5rem;
      height: 2.5rem;
      width: 2.5rem;
    }

    ${media.lessThan('small')`
      svg{
        display:none;
      }
    `}
  `
};
export const Container = styled.button<ContainerProps>`
  ${({ theme, backgroundColor, textColor, size, hasIcon }) => css`
     {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      height: ${theme.button[size]};
      width: 100%;

      background: ${theme.colors[backgroundColor]};
      border-radius: 5rem;
      border: 0;
      color: ${theme.colors[textColor]};
      font-size: ${theme.font.sizes.large};

      ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xsmall};
    `}
      font-weight: ${theme.font.normal};

      padding: ${theme.spacings.medium};
      text-align: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      ${hasIcon && containerModifiers.withIcon(theme)}
    }
  `}
`;
