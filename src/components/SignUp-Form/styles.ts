import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Container = styled.main`
  margin: 0 30%;
`;

export const EmailContainer = styled.div`
  width: 70%;
`;

export const PasswordContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
`;

export const PhoneContainer = styled.div`
  width: 41%;
`;

export const ZipcodeContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-gap: 2rem;

  justify-items: center;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
`;
export const StyledModal = Modal.styled`
display: flex;
justify-content: center;
align-items: center;
background-color:transparent;
//transition: all 0.3s ease-in-out;
//background-color: var(--background-modal);
height: 20rem;
width: 20rem;


	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem;
	}
`;
