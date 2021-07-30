import React, { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import { useAuth } from 'context/auth';
//Services
import { SignUpInfo } from 'api/services/authService';
import Input from 'components/Input';

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail é um campo obrigatório')
    .email('Por favor, informe um e-mail válido'),
  password: yup.string().required('Senha é um campo obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas tem que ser idênticas'),
  phone: yup
    .string()
    .required('Por favor informe um telefone')
    .max(15, 'Tamanho máxio permitido 15 caracteres'),
  neighborhood: yup
    .string()
    .required('Por favor informe o Bairro')
    .max(50, 'Tamanho máxio permitido 50 caracteres'),
  city: yup
    .string()
    .required('Por favor informe a cidade')
    .max(100, 'Tamanho máxio permitido 100 caracteres'),
  state: yup
    .string()
    .required('Por favor informe o Estado')
    .max(50, 'Tamanho máxio permitido 50 caracteres'),
  code: yup.string().required('Por favor informe a UF').max(2)
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpInfo>({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur'
  });
  const router = useRouter();
  const { signUp } = useAuth();

  const submitForm = async ({
    nickname,
    password,
    email,
    confirmPassword,
    phone,
    zipcode,
    neighborhood,
    city,
    state,
    code
  }: SignUpInfo) => {
    signUp({
      nickname,
      password,
      email,
      confirmPassword,
      phone,
      zipcode,
      neighborhood,
      city,
      state,
      code
    });
  };

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          id="email"
          type="text"
          placeholder="E-mail do usuário"
          {...register('email', {
            required: 'Required'
          })}
          error={errors.email?.message}
          icon={AiOutlineUser}
          maxLength={50}
        />
        <ErrorMessage
          name="email"
          errors={errors}
          render={({ message }) => <p id="test-email-error">{message}</p>}
        />
      </form>
    </>
  );
};

export default SignUp;
