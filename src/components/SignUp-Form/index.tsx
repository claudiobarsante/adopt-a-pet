import React, { FormEvent, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { toast, Slide } from 'react-toastify';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
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

type GetInfoParams = {
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

  // -- Functions
  const handleSubmit = async (values: SignUpInfo) => {
    signUp(values);
  };

  const handleGetInfo = useCallback(
    async ({ setFieldValue, value, event }: GetInfoParams) => {
      event.preventDefault();

      try {
        const response = await getAddressInfo(value);
        const { bairro, localidade, uf } = response.data;

        setFieldValue('code', uf, false);
        setFieldValue('neighborhood', bairro, false);
        setFieldValue('city', localidade, false);
        setFieldValue('state', BRAZIL_STATES[uf], false);
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
    },
    []
  );

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
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              icon={AiOutlineUser}
              maxLength={50}
              label="email"
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={AiOutlineUser}
              maxLength={50}
              label="Senha"
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              icon={AiOutlineUser}
              maxLength={50}
              label="Apelido"
            />
            <Input
              name="phone"
              type="text"
              placeholder="Telefone"
              icon={AiOutlineUser}
              maxLength={50}
              label="Telefone"
            />

            <Input
              name="zipcode"
              type="number"
              placeholder="Cep"
              icon={AiOutlineUser}
              maxLength={50}
              label="Cep"
            />

            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              icon={AiOutlineUser}
              maxLength={10}
              label="Cidade"
            />

            <Input
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              icon={AiOutlineUser}
              maxLength={50}
              label="Bairro"
            />

            <Input
              name="state"
              type="text"
              placeholder="Estado"
              icon={AiOutlineUser}
              maxLength={50}
              label="Estado"
            />
            <Input
              name="code"
              type="text"
              placeholder="UF"
              icon={AiOutlineUser}
              maxLength={50}
              label="UF"
            />
            <button
              onClick={(event) =>
                handleGetInfo({ setFieldValue, value: values.zipcode, event })
              }
            >
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
