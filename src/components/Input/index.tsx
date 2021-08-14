import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField, ErrorMessage } from 'formik';
// -- Styles
import * as S from './styles';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isUpperCase?: boolean;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({
  name,
  label,
  icon: Icon,
  isUpperCase = false,
  ...rest
}: Props) => {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error ? true : false;

  return (
    <S.ComponentContainer>
      <label htmlFor={name}>{label}</label>
      <S.InputContainer isErrored={error} isUpperCase={isUpperCase}>
        {Icon && <Icon size={24} />}
        <input {...field} {...rest} />
      </S.InputContainer>
      <S.ErrorContainer isErrored={error}>
        <ErrorMessage name={field.name} />
      </S.ErrorContainer>
    </S.ComponentContainer>
  );
};

export default Input;
