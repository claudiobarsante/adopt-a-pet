import { getAddressInfo } from 'api/services/viaCepService';
import Input from 'components/Input';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

const SignUpForm = () => {
  const { handleChange, errors, values, setFieldValue } = useFormikContext();

  const handleGetInfo = useCallback(async (value: string, event: FormEvent) => {
    event.preventDefault();
    console.log('value', value);
    const response = await getAddressInfo(value);
    if (teste.current) {
      teste.current.value = 'aaaaa';
    }
  }, []);

  const teste = useRef<HTMLInputElement>(null);

  return (
    <Form>
      <Input
        name="zipcode"
        type="text"
        placeholder="Cep"
        error={'error'}
        icon={AiOutlineUser}
        maxLength={50}
        label="Cep"
        inputRef={null}
        onChange={handleChange('zipcode')}
      />
      <Input
        name="city"
        inputRef={teste}
        type="text"
        placeholder="Cidade"
        error={''}
        icon={AiOutlineUser}
        maxLength={50}
        label="Cidade"
        onChange={handleChange('city')}
      />
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
      name="city"
      type="text"
      placeholder="Cidade"
      error={props.errors.city}
      icon={AiOutlineUser}
      maxLength={50}
      label="Cidade"
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
