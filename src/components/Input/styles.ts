import styled, { css } from 'styled-components';

type ContainerProps = {
  isErrored: boolean;
  widthRef: number;
};

export const Container = styled.div<ContainerProps>`
  /**
  if props.widthRef = 1 then width = 100%
  if props.widthRef = 2 then width = 50%
  if props.widthRef = 3 then width = 30%
  ...
  */
  width: ${(props) =>
    100 / props.widthRef + '%'};//setting in percentage the width of the input
  height: 5.6rem;
  background: var(--color-grey);
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  padding: 16px;
  color: var(--color-grey-hard);

  display: flex;
  align-items: center;
  margin-top: 1.9rem;

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid var(--color-error);
      transition: border-color 2s, color 2s;
    `}
   //--It selects an element if that element contains any children that have :focus
   &:focus-within {
    border: 1px solid var(--color-mustard);
    transition: border-color 2s, color 2s;

    svg{
      color: var(--color-mustard);
    }
   }

  input {
    background: transparent;
    border: 0;
    outline: 0;
    color: var(--color-grey-hard);
    font-size: 1.8rem;
    margin: 0.2rem;

    &::placeholder {
      color: var(--color-grey-hard);
    }


  svg {
    margin-right: 1.6rem;
   // color: var(--color-mustard);
  }
`;
