import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1437px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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
    width: 50%;
    margin-top: 5rem;
  }

  @media screen and (min-width: 1824px) {
    button {
      width: 30%;
    }
  }

  svg {
    margin-left: 1.5rem;
  }
`;

export const Picture = styled.picture`
  min-width: 668px;
`;
