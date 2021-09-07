import { render, screen } from '@testing-library/react';
import ActiveLink from '.';

describe('<ActiveLink/>', () => {
  it('should render the link', () => {
    render(<ActiveLink href="/test" name="test_link" />);

    expect(screen.getByText('test_link')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /test_link/i })).toHaveAttribute(
      'href',
      '/test'
    );
    screen.logTestingPlaygroundURL();
  });
});
