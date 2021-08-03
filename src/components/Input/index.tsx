import React, { useCallback, useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

// -- Styles
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  inputRef: any;
  error: string | undefined;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({
  name,
  label,
  error,
  inputRef,
  icon: Icon,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <S.Container isErrored={!!error} isFocused={isFocused}>
        {Icon && <Icon size={24} />}

        <input
          ref={inputRef}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...rest}
        />
      </S.Container>
    </>
  );
};

export default Input;
