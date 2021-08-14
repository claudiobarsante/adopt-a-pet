import styled, { css } from 'styled-components';

type InputContainerProps = {
  isErrored: boolean;
};
export const ComponentContainer = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 2rem;

  label {
    display: inline-block;
    margin-bottom: 0.3rem;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;

  // background: var(--color-background-card);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 1rem;
  //border: 2px solid var(--color-background-card);
  color: var(--color-grey-hard);

  height: 5.6rem;
  width: 100%;

  padding: 16px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid var(--color-error);
      transition: border-color 2s, color 2s;
    `}
  //--It selects an element if that element contains any children that have :focus
   &:focus-within {
    border: 2px solid var(--color-light-blue);

    transition: border-color 2s, color 2s;
  }

  svg {
    color: ${(props) => (props.isErrored ? '#c53030' : '#58bcda')};
    margin-right: 1.6rem;
  }

  input {
    background: transparent;
    border: 0;
    color: var(--color-grey-hard);
    font-size: 1.8rem;
    margin: 0.2rem;
    outline: 0;
    width: 100%;

    &::placeholder {
      color: var(--color-grey-hard);
    }
  }
`;

export const ErrorContainer = styled.div<InputContainerProps>`
  color: var(--color-error);
  font-size: 1.5rem;
  height: 1.5rem;
  ${(props) =>
    props.isErrored &&
    css`
     &::before {
    content: '😺 '};
  }
    `}
`;
