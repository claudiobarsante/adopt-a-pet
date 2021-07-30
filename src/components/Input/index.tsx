import React, { useCallback, useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({ error, icon: Icon, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.Container isErrored={!!error} isFocused={isFocused}>
      {Icon && <Icon size={24} />}
      <input onFocus={handleOnFocus} onBlur={handleInputBlur} {...rest} />
    </S.Container>
  );
};

export default Input;
