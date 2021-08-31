import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  h1 {
    font-size: 9rem;
    font-weight: 400;
  }

  h2 {
    font-size: 6rem;
  }

  p {
    margin-top: 4rem;
    font-size: 4rem;
    color: var(--color-light-grey);
  }

  button {
    width: 30%;
    margin-top: 5rem;
  }

  svg {
    margin-left: 1.5rem;
  }
`;

export const Picture = styled.picture``;
