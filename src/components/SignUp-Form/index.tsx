import { SignUpInfo } from 'api/services/authService';
import { getAddressInfo } from 'api/services/viaCepService';
import Input from 'components/Input';
import { BRAZIL_STATES } from 'helpers/utils';
import { Formik, Form } from 'formik';
import React, { FormEvent, useCallback, useRef } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/dist/client/router';
import { useAuth } from 'context/auth';
import { INITIAL_VALUES, SignUpSchema } from 'helpers/sign-up/formik';
import { toast, Slide } from 'react-toastify';

const SignUpForm = () => {
  const router = useRouter();
  const { signUp } = useAuth();
  // -- refs
  const cityInput = useRef<HTMLInputElement>(null);
  const neighborhoodInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);
  const codeInput = useRef<HTMLInputElement>(null);

  // -- Functions
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

  const handleGetInfo = useCallback(async (value: string, event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await getAddressInfo(value);
      const { bairro, localidade, uf } = response.data;

      // setFieldValue('city', '123');
      if (codeInput.current) codeInput.current.value = uf;
      if (neighborhoodInput.current) neighborhoodInput.current.value = bairro;
      if (cityInput.current) cityInput.current.value = localidade;
      if (stateInput.current) stateInput.current.value = BRAZIL_STATES[uf];
    } catch (error) {
      // todo: why Toast is not working ?
      toast('Wow so easy!');
      console.log('error ', error);
      const MESSAGE =
        'Ocorreu um erro ao tentar buscar as informações do seu cep';
      toast.error(`sddfsdfd`, {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        transition: Slide
      });
    }
  }, []);

  return (
    <>
      <h1>Cadastro</h1>
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
              maxLength={50}
              label="Apelido"
              inputRef={null}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              icon={AiOutlineUser}
              maxLength={50}
              label="email"
              inputRef={null}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={AiOutlineUser}
              maxLength={50}
              label="Senha"
              inputRef={null}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              icon={AiOutlineUser}
              maxLength={50}
              label="Apelido"
              inputRef={null}
            />
            <Input
              name="phone"
              type="text"
              placeholder="Telefone"
              icon={AiOutlineUser}
              maxLength={50}
              label="Telefone"
              inputRef={null}
            />

            <Input
              name="zipcode"
              type="number"
              placeholder="Cep"
              icon={AiOutlineUser}
              maxLength={50}
              label="Cep"
              inputRef={null}
            />

            <Input
              name="city"
              inputRef={cityInput}
              type="text"
              placeholder="Cidade"
              icon={AiOutlineUser}
              maxLength={10}
              label="Cidade"
            />

            <Input
              name="neighborhood"
              inputRef={neighborhoodInput}
              type="text"
              placeholder="Bairro"
              icon={AiOutlineUser}
              maxLength={50}
              label="Bairro"
            />

            <Input
              inputRef={stateInput}
              name="state"
              type="text"
              placeholder="Estado"
              icon={AiOutlineUser}
              maxLength={50}
              label="Estado"
            />
            <Input
              name="code"
              inputRef={codeInput}
              type="text"
              placeholder="UF"
              icon={AiOutlineUser}
              maxLength={50}
              label="UF"
            />
            <button onClick={(event) => handleGetInfo(values.zipcode, event)}>
              get it{' '}
            </button>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
