import React, { useCallback, useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

// -- Styles
import * as S from './styles';
import { ErrorMessage, Field, useField } from 'formik';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  //inputRef: any;
  // error: boolean;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({
  name,
  label,
  // error,
  // inputRef,
  icon: Icon,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const [field, meta] = useField(name);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // const handleOnBlur = useCallback(() => {
  //   setIsFocused(false);
  // }, []);
  function handleBlur(e) {
    field.onBlur(e);

    console.log('passei');
  }

  console.log('field', field, 'meta', meta);

  const error = meta.touched && meta.error ? true : false;
  console.log('error', meta.touched, meta.error);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <S.Container isErrored={error} isFocused={isFocused}>
        {Icon && <Icon size={24} />}

        <input
          //ref={inputRef}
          onFocus={handleOnFocus}
          // onBlur={(e) => handleBlur(e)}
          {...field}
          {...rest}
        />
      </S.Container>
      <ErrorMessage name={field.name} />
    </>
  );
};

export default Input;
