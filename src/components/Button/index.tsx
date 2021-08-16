import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

//could use type rather than interface because it's not overwriting or extending
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: 'black' | 'blue' | 'pink' | 'yellow' | 'purple';
  textColor: 'white' | 'black' | 'blue' | 'pink' | 'yellow' | 'purple';
  size: 'small' | 'medium' | 'large';
}
//type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  backgroundColor,
  textColor,
  size,
  children,
  ...rest
}: Props) => (
  <S.Container
    backgroundColor={backgroundColor}
    textColor={textColor}
    size={size}
    {...rest}
  >
    {children}
  </S.Container>
);

export default Button;
