import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6.5rem;
  width: 16rem;

  background: var(--color-primary);
  border-radius: 5rem;
  border: 0;
  color: var(--color-button-text);
  font-size: 1.8rem;
  font-weight: 400;
  //letter-spacing: 0.2rem;
  //margin-top: 10.4rem;
  padding: 3rem;
  text-align: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
