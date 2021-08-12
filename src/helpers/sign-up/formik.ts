import * as yup from 'yup';
import { SignUpInfo } from 'api/services/authService';
export const INITIAL_VALUES: SignUpInfo = {
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

export const SignUpSchema = yup.object().shape({
  nickname: yup
    .string()
    .required('Apelido é um campo obrigatório')
    .max(18, 'Tamanho máxio permitido 18 caracteres'),
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
    //  .required('Por favor informe a cidade')
    // .min(5, 'Tamanho mínimo de 5')
    .max(50, 'Tamanho máxio permitido 100 caracteres'),
  state: yup
    .string()
    .required('Por favor informe o Estado')
    .max(50, 'Tamanho máxio permitido 50 caracteres'),
  code: yup.string().required('Por favor informe a UF').max(2)
});
