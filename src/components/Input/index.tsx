import React, { useCallback, useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { useFormikContext } from 'formik';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;

  error: string | undefined;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({ name, label, error, icon: Icon, ...rest }: Props) => {
  const { handleChange, errors } = useFormikContext();
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
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleChange(name)}
          {...rest}
        />

        {/* <input onFocus={handleOnFocus} onBlur={handleInputBlur} {...rest} /> */}
      </S.Container>
    </>
  );
};

export default Input;
