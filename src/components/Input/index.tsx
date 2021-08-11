import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ErrorMessage, useField } from 'formik';
// -- Styles
import * as S from './styles';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  widthRef: number;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({ name, label, icon: Icon, widthRef = 1, ...rest }: Props) => {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error ? true : false;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <S.Container isErrored={error} widthRef={widthRef}>
        {Icon && <Icon size={24} />}
        <input {...field} {...rest} />
      </S.Container>
      <ErrorMessage name={field.name} />
    </>
  );
};

export default Input;
