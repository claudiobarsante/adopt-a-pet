import styled from 'styled-components';
import Image from 'next/image';

type ButtonProps = {
  backgroundColor: 'black' | 'blue' | 'pink' | 'yellow' | 'purple';
  textColor: 'white' | 'black' | 'blue' | 'pink' | 'yellow' | 'purple';
  size: 'small' | 'medium' | 'large';
};

const colorMaps = {
  black: '--color-primary',
  blue: '--color-light-blue',
  pink: '--color-pink',
  purple: '--color-purple',
  white: '--color-default-button-text',
  yellow: '--color-mustard'
};

const sizeMaps = {
  small: 5.6,
  medium: 6.7,
  large: 8.5
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: ${(props) => sizeMaps[props.size]}rem;
  width: 100%;

  background: var(${(props) => colorMaps[props.backgroundColor]});
  border-radius: 5rem;
  border: 0;
  color: var(${(props) => colorMaps[props.textColor]});
  font-size: 1.8rem;
  font-weight: 400;
  //letter-spacing: 0.2rem;
  //margin-top: 10.4rem;
  padding: 3rem;
  text-align: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
