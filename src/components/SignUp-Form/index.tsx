import React, { FormEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import { toast, Slide } from 'react-toastify';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillUnlock,
  AiOutlineLock,
  AiOutlinePhone
} from 'react-icons/ai';
import { MdMyLocation, MdLocationCity } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BiMapPin, BiMapAlt } from 'react-icons/bi';
// -- Services
import { SignUpInfo } from 'api/services/authService';
import { getAddressInfo } from 'api/services/viaCepService';
// -- Components
import Input from 'components/Input';
// -- Hooks
import { useAuth } from 'context/auth';
// -- Helpers
import { BRAZIL_STATES } from 'helpers/utils';
import { INITIAL_VALUES, SignUpSchema } from 'helpers/sign-up/formik';
import * as S from './styles';
import Button from 'components/Button';
import { useLoading } from 'context/loading';
import FormLoading from 'components/Form-Loading';

type InfoParams = {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => void;
  value: string;
  event: FormEvent;
};
const SignUpForm = () => {
  const { signUp } = useAuth();
  const { isLoading } = useLoading();

  console.log('isLoading', isLoading);
  // -- Functions
  const handleSubmit = async (values: SignUpInfo) => {
    signUp(values);
  };

  const handleGetInfo = useCallback(
    async ({ setFieldValue, value, event }: InfoParams) => {
      event.preventDefault();

      try {
        const response = await getAddressInfo(value);
        const { bairro, localidade, uf } = response.data;

        setFieldValue('code', uf, false);
        setFieldValue('neighborhood', bairro, false);
        setFieldValue('city', localidade, false);
        setFieldValue('state', BRAZIL_STATES[uf], false);
      } catch (error) {
        console.log('error ', error);
        const MESSAGE =
          ' 🔴 Ocorreu um erro ao tentar buscar as informações do seu cep, você pode tentar novamente em alguns instantes ou se preferir preencher manualmente';
        toast(MESSAGE, {
          autoClose: 6000,
          transition: Slide
        });
      }
    },
    []
  );
  //Todo: make input type verifications and improve error messages
  //Todo2:make Modal transition more smooth
  return (
    <>
      <h1>Cadastro</h1>
      <S.Container>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={SignUpSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Input
                name="nickname"
                type="text"
                placeholder="Apelido"
                icon={AiOutlineUser}
                maxLength={18}
                label="Como gostaria de ser chamado"
              />
              <S.EmailContainer>
                <Input
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  icon={AiOutlineMail}
                  maxLength={256}
                  label="E-mail"
                />
              </S.EmailContainer>
              <S.PasswordContainer>
                <Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  icon={AiFillUnlock}
                  maxLength={50}
                  label="Senha"
                />

                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Digite novamente"
                  icon={AiOutlineLock}
                  maxLength={50}
                  label="Confirme sua senha"
                />
              </S.PasswordContainer>
              <S.PhoneContainer>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Telefone"
                  icon={AiOutlinePhone}
                  maxLength={15}
                  label="Telefone"
                />
              </S.PhoneContainer>
              <S.ZipcodeContainer>
                <Input
                  name="zipcode"
                  type="number"
                  placeholder="Cep"
                  icon={MdMyLocation}
                  maxLength={8}
                  label="Cep"
                />
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  size="small"
                  onClick={(event) =>
                    handleGetInfo({
                      setFieldValue,
                      value: values.zipcode,
                      event
                    })
                  }
                >
                  Buscar informações adicionais do endereço
                </Button>
              </S.ZipcodeContainer>
              <Input
                name="state"
                type="text"
                placeholder="Estado"
                icon={GoLocation}
                maxLength={50}
                label="Estado"
              />
              <Input
                name="city"
                type="text"
                placeholder="Cidade"
                icon={MdLocationCity}
                maxLength={100}
                label="Cidade"
              />

              <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                icon={BiMapPin}
                maxLength={50}
                label="Bairro"
              />

              <Input
                name="code"
                type="text"
                placeholder="UF"
                icon={BiMapAlt}
                maxLength={2}
                label="UF"
                isUpperCase
              />
              <S.ActionsContainer>
                <Button
                  backgroundColor="pink"
                  textColor="white"
                  size="medium"
                  type="submit"
                >
                  {isLoading ? <FormLoading /> : <span>Cadastrar</span>}
                </Button>
                <Button
                  backgroundColor="yellow"
                  textColor="white"
                  size="medium"
                  type="reset"
                >
                  Limpar
                </Button>
              </S.ActionsContainer>
            </Form>
          )}
        </Formik>
      </S.Container>
    </>
  );
};

export default SignUpForm;
