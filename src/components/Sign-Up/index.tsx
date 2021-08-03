import { getAddressInfo } from 'api/services/viaCepService';
import Input from 'components/Input';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import React, { FormEvent, useCallback, useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
const SignUpForm = () => {
  const { handleChange, errors, values, setFieldValue } = useFormikContext();
  const [teste, setTeste] = useState('');
  const handleGetInfo = useCallback(async (value: string, event: FormEvent) => {
    event.preventDefault();
    console.log('value', value);
    const response = await getAddressInfo(value);
    console.log('response', response);
    setTeste('foi');
  }, []);

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
        // onChange={handleChange('zipcode')}
      />
      <Input
        name="city"
        type="text"
        placeholder="Cidade"
        error={''}
        icon={AiOutlineUser}
        maxLength={50}
        label="Cidade"
        value={teste}
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
