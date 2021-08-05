import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useRouter } from 'next/dist/client/router';

// -- Context
import { useAuth } from 'context/auth';
// -- Services
import { SignUpInfo } from 'api/services/authService';
// -- Components
import SignUpForm from 'components/Sign-Up-Form';
// -- Helpers
import { INITIAL_VALUES, SignUpSchema } from 'helpers/sign-up/formik';

import * as yup from 'yup';
import React, { FormEvent, useCallback } from 'react';
import Input from 'components/Input';

import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { getAddressInfo } from 'api/services/viaCepService';
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

  const handleGetInfo = useCallback(async (value: string, event: FormEvent) => {
    event.preventDefault();
    console.log('value', value);
    const response = await getAddressInfo(value);
    const { bairro, localidade, uf } = response.data;

    console.log('response', response);
    //const parsedResponse = JSON.parse(response.data);
    //console.log('parsedResponse', parsedResponse);
    // if (cityInput.current) {
    //   cityInput.current.value = localidade;
    // }
  }, []);

  return (
    <>
      <h1>Cadastro</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SignUpSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({}) => (
          <Form>
            <Input
              name="zipcode"
              type="text"
              placeholder="Cep"
              // error={!!errors.zipcode === touched.zipcode}
              icon={AiOutlineUser}
              maxLength={50}
              label="Cep"
              // inputRef={null}
              //onChange={handleChange('zipcode')}
            />

            <Input
              name="city"
              // inputRef={null}
              type="text"
              placeholder="Cidade"
              //error={!!errors.city}
              icon={AiOutlineUser}
              maxLength={10}
              label="Cidade"
              // onChange={handleChange('city')}
            />

            {/* <button onClick={(event) => handleGetInfo(values.zipcode, event)}>
              get it{' '}
            </button> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
