import React, { FormEvent, useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';

import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';

import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import { useAuth } from 'context/auth';
//Services
import { SignUpInfo } from 'api/services/authService';
import Input from 'components/Input';
import Test from 'components/Input/test';

const SignUpSchema = yup.object().shape({
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
  const router = useRouter();
  const { signUp } = useAuth();

  const handleSubmit = async ({
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

  const INITIAL_VALUES = {
    nickname: '',
    password: '',
    email: '',
    confirmPassword: '',
    phone: '',
    zipcode: '',
    neighborhood: '',
    city: '',
    state: '',
    code: ''
  };
  const handleGetInfo = (value: string, event: FormEvent) => {
    event.preventDefault();
    console.log('value', value);
  };

  return (
    <>
      <h1>Cadastro</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SignUpSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <Form>
            <Input
              name="nickname"
              type="text"
              placeholder="Apelido"
              error={props.errors.nickname}
              icon={AiOutlineUser}
              maxLength={50}
            />
            <button
              onClick={(event) => handleGetInfo(props.values.nickname, event)}
            >
              get it{' '}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
function qwe(nickname: string, qwe: any): void {
  throw new Error('Function not implemented.');
}
