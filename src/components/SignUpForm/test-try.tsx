import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '.';

const getAddressInfo = jest.fn();

describe('<SignUpForm/>', () => {
  it('should render SignUpForm component', () => {
    render(<SignUpForm />);

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
