import { render, screen } from '@testing-library/react';
import Input from '.';
import { AiOutlineUser } from 'react-icons/ai';
import { useField, ErrorMessage } from 'formik';
import { mocked } from 'ts-jest/utils'; // -- yarn add ts-jest -D
import { debug } from 'node:console';
import TestRenderer from 'react-test-renderer';
const mockComponent = () => <ErrorMessage name="test" />;
jest.mock('formik', () => () => mockComponent);

describe('<Input />', () => {
  it('should render the input', () => {
    render(
      <Input
        id="test"
        name="test"
        type="text"
        placeholder="Test"
        icon={AiOutlineUser}
        label="Test_label"
        errors="Testing error"
        touched={true}
      />
    );
    const input = screen.getByLabelText('Test_label');
    expect(input).toBeInTheDocument();
    //console.debug(input);
    //   const container = screen.get
    //  console.debug(container);
    // expect(container).toHaveAttribute('width', '100%');
    // expect(input.)
    //console.log(testRenderer.toJSON());
    // const testInstance = testRenderer.root;
    //  expect(testInstance.findByType('label')).toHaveAttribute('htmlFor', 'test');
    //expect(input).toHaveAttribute('type', 'text');
  });

  // it('should render red border on error', () => {
  //   render(
  //     <Input
  //       id="test"
  //       name="test"
  //       type="text"
  //       placeholder="Test"
  //       icon={AiOutlineUser}
  //       label="Test_label"
  //       errors="Testing error"
  //       touched={true}
  //     />
  //   );

  //   const inputContainer = screen.getByTestId('input-container-test');
  //   expect(inputContainer).toHaveStyleRule('border', '2px solid #c53030');
  // });
});
