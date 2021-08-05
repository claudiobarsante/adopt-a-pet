import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
// -- Styles
import * as S from './styles';
import { ErrorMessage, useField } from 'formik';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  inputRef: any;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({ name, label, inputRef, icon: Icon, ...rest }: Props) => {
  const [field, meta] = useField(name);

  console.log('field', field, 'meta', meta);

  const error = meta.touched && meta.error ? true : false;
  console.log('error', meta.touched, meta.error);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <S.Container isErrored={error}>
        {Icon && <Icon size={24} />}

        <input ref={inputRef} {...field} {...rest} />
      </S.Container>
      <ErrorMessage name={field.name} />
    </>
  );
};

export default Input;
