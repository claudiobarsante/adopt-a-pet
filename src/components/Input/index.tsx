import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
// -- Styles
import * as S from './styles';
import { ErrorMessage, useField } from 'formik';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({ name, label, icon: Icon, ...rest }: Props) => {
  const [field, meta] = useField(name);

  console.log('field', field, 'meta', meta);

  const error = meta.touched && meta.error ? true : false;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <S.Container isErrored={error}>
        {Icon && <Icon size={24} />}

        <input {...field} {...rest} />
      </S.Container>
      <ErrorMessage name={field.name} />
    </>
  );
};

export default Input;
