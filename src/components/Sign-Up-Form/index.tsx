import { SignUpInfo } from 'api/services/authService';
import { getAddressInfo } from 'api/services/viaCepService';
import Input from 'components/Input';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

const SignUpForm = () => {
  const {
    handleChange,
    errors,
    values,
    touched
  } = useFormikContext<SignUpInfo>();

  const cityInput = useRef<HTMLInputElement>(null);
  const neighborhoodInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);
  const codeInput = useRef<HTMLInputElement>(null);

  const handleGetInfo = useCallback(async (value: string, event: FormEvent) => {
    event.preventDefault();
    console.log('value', value);
    const response = await getAddressInfo(value);
    const { bairro, localidade, uf } = response.data;

    console.log('response', response);
    //const parsedResponse = JSON.parse(response.data);
    //console.log('parsedResponse', parsedResponse);
    if (cityInput.current) {
      cityInput.current.value = localidade;
    }
  }, []);

  console.log('city ', touched.city);
  return (
    <Form>
      <Input
        name="zipcode"
        type="text"
        placeholder="Cep"
        error={!!errors.zipcode === touched.zipcode}
        icon={AiOutlineUser}
        maxLength={50}
        label="Cep"
        inputRef={null}
        onChange={handleChange('zipcode')}
      />
      <ErrorMessage name="zipcode" />
      <Input
        name="city"
        inputRef={cityInput}
        type="text"
        placeholder="Cidade"
        error={!!errors.city === touched.city}
        icon={AiOutlineUser}
        maxLength={10}
        label="Cidade"
        onChange={handleChange('city')}
      />
      <ErrorMessage name="city" />

      {/* <Input
      name="neighborhood"
      type="text"
      placeholder="Bairro"
      error={props.errors.neighborhood}
      icon={AiOutlineUser}
      maxLength={50}
      label="Bairro"
    />

    <Input
      name="state"
      type="text"
      placeholder="Estado"
      error={props.errors.state}
      icon={AiOutlineUser}
      maxLength={50}
      label="Estado"
    />
    <Input
      name="code"
      type="text"
      placeholder="UF"
      error={props.errors.code}
      icon={AiOutlineUser}
      maxLength={50}
      label="UF"
    /> */}
      <button onClick={(event) => handleGetInfo(values.zipcode, event)}>
        get it{' '}
      </button>
      {/* <button type="reset" onClick={Formik.resetForm}>
      Reset
    </button> */}
    </Form>
  );
};

export default SignUpForm;
