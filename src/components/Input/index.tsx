import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ErrorMessage } from 'formik';
// -- Styles
import * as S from './styles';
//import { onlyNumbers } from 'helpers/utils';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isUpperCase?: boolean;
  errors: string | undefined;
  touched: boolean | undefined;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}

const Input = ({
  name,
  label,
  icon: Icon,
  isUpperCase = false,
  errors,
  touched,
  ...rest
}: Props) => {
  const error = touched && errors ? true : false;

  return (
    <S.ComponentContainer>
      <label htmlFor={name}>{label}</label>
      <S.InputContainer isErrored={error} isUpperCase={isUpperCase}>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </S.InputContainer>
      <S.ErrorContainer isErrored={error}>
        <ErrorMessage name={name} />
      </S.ErrorContainer>
    </S.ComponentContainer>
  );
};

export default Input;
