import { KeyboardEvent } from 'react';

type BrazilState = {
  [uf: string]: string;
};

export const BRAZIL_STATES: BrazilState = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins'
};

export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum ErrorType {
  IS_ALREADY_AUTHENTICATED = 'is-already-authenticated'
}

//KeyPress
const removeSpecialCharacters = function (event: KeyboardEvent) {
  const specialCharacters = '!@#$%^&*()+=[]\\\';,/{}|":<>?';
  const foundAt = specialCharacters.indexOf(event.key);

  if (foundAt !== -1) return false;

  return true;
};

export const onlyNumbers = function (event: KeyboardEvent) {
  if (removeSpecialCharacters(event)) {
    //Evitar que sejam digitados caracteres especiais
    //teclas permitidas na ordem de código(Keycode) abaixo (tab,delete,backspace,setas direita e esquerda)
    const teclasPermitidas = [8, 9, 37, 39, 46];
    //Se quiser adicionar vírgula como separador decimal adicionar o keycode '188' no array
    //Adicionando os numeros de 0 a 9 do teclado alfanumerico
    let x;
    for (x = 48; x <= 57; x++) {
      teclasPermitidas.push(x);
    }
    //adicionando os numeros de 0 a 9 do teclado numerico
    for (x = 96; x <= 105; x++) {
      teclasPermitidas.push(x);
    }
    //Pega a tecla digitada dentro do input
    // const codigoTecla = window.event ? event.keyCode : event.which;
    //Verifica se a tecla digitada é permitida
    console.log(event.key);
    // if ($.inArray(codigoTecla, teclasPermitidas) !== -1) {
    //   return true;
    // }
    //return false;
  }
  // return false;
};
