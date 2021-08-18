export const getErrorMessage = (message: string, email: string): string => {
  let errorMessage = '';

  if (message.includes('is already taken')) {
    errorMessage = `O ${email} já se encontra registrado nessa plataforma. Se você já é cadastrado faça seu login`;
  }

  return errorMessage;
};
