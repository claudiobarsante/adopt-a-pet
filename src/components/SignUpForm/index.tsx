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
import FormLoading from 'components/FormLoading';

type UserInfoParams = {
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
    async ({ setFieldValue, value, event }: UserInfoParams) => {
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
          data-testid="form"
          initialValues={INITIAL_VALUES}
          validationSchema={SignUpSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            setFieldValue,
            touched,
            values
          }) => (
            <Form>
              <Input
                id="nickname"
                errors={errors.nickname}
                icon={AiOutlineUser}
                label="Como gostaria de ser chamado"
                maxLength={18}
                name="nickname"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Apelido"
                touched={touched.nickname}
                type="text"
              />
              <S.EmailContainer>
                <Input
                  id="email"
                  errors={errors.email}
                  icon={AiOutlineMail}
                  label="E-mail"
                  maxLength={256}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="E-mail"
                  touched={touched.email}
                  type="email"
                />
              </S.EmailContainer>
              <S.PasswordContainer>
                <Input
                  id="password"
                  errors={errors.password}
                  icon={AiFillUnlock}
                  label="Senha"
                  maxLength={50}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Senha"
                  touched={touched.password}
                  type="password"
                />

                <Input
                  id="confirmPassword"
                  errors={errors.confirmPassword}
                  icon={AiOutlineLock}
                  label="Confirme sua senha"
                  maxLength={50}
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Digite novamente"
                  touched={touched.confirmPassword}
                  type="password"
                />
              </S.PasswordContainer>
              <S.PhoneContainer>
                <Input
                  id="phone"
                  errors={errors.phone}
                  icon={AiOutlinePhone}
                  label="Telefone"
                  maxLength={15}
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Telefone"
                  touched={touched.phone}
                  type="text"
                />
              </S.PhoneContainer>
              <S.ZipcodeContainer>
                <Input
                  id="zipcode"
                  errors={errors.zipcode}
                  icon={MdMyLocation}
                  label="Cep"
                  maxLength={8}
                  name="zipcode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Cep"
                  touched={touched.zipcode}
                  type="number"
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
                id="state"
                errors={errors.state}
                icon={GoLocation}
                label="Estado"
                maxLength={50}
                name="state"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Estado"
                touched={touched.state}
                type="text"
              />
              <Input
                id="city"
                errors={errors.city}
                icon={MdLocationCity}
                label="Cidade"
                maxLength={100}
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Cidade"
                touched={touched.city}
                type="text"
              />

              <Input
                id="neighborhood"
                errors={errors.neighborhood}
                icon={BiMapPin}
                label="Bairro"
                maxLength={50}
                name="neighborhood"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Bairro"
                touched={touched.neighborhood}
                type="text"
              />

              <Input
                id="code"
                errors={errors.code}
                icon={BiMapAlt}
                isUpperCase
                label="UF"
                maxLength={2}
                name="code"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="UF"
                touched={touched.code}
                type="text"
              />
              <S.ActionsContainer>
                <Button
                  backgroundColor="pink"
                  textColor="white"
                  size="medium"
                  type="submit"
                  disabled={isLoading}
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
