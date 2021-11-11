import { ButtonHTMLAttributes } from 'react';
//import Image from 'next/image';
import * as S from './styles';
import { themeApp } from 'styles/theme';
//could use type rather than interface because it's not overwriting or extending
// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   backgroundColor: keyof typeof themeApp.colors;
//   textColor: keyof typeof themeApp.colors;
//   size: keyof typeof themeApp.button;
// }
//type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  backgroundColor: keyof typeof themeApp.colors;
  children: React.ReactNode;
  size: keyof typeof themeApp.button;
  textColor: keyof typeof themeApp.colors;
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  backgroundColor,
  textColor,
  size,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      hasIcon={!!icon}
      {...props}
    >
      {children}
      {icon}
    </S.Container>
  );
};

export default Button;
