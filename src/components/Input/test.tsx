import { render, screen } from '@testing-library/react';
import Input from '.';
import { AiOutlineUser } from 'react-icons/ai';
import { useField, ErrorMessage } from 'formik';
import { mocked } from 'ts-jest/utils'; // -- yarn add ts-jest -D

const mockMeta = {
  touched: false,
  error: '',
  value: '',
  name: 'test',
  onChange: jest.fn(),
  onBlur: jest.fn()
};

const mockField = {
  name: 'test',
  value: '',
  touched: false,
  initialTouched: false
};

const mockHelpers = {
  setValue: jest.fn(),
  setTouched: jest.fn(),
  setError: jest.fn()
};

// // jest.mock('formik', () => {
// //   return {
// //     useField() {
// //       return [mockField, mockMeta];
// //     }
// //   };
// // });

// jest.mock('formik', () => ({
//   useField: jest
//     .fn()
//     .mockReturnValue([
//       mockMeta,
//       mockField,
//       { setValue: jest.fn(), setTouched: jest.fn(), setError: jest.fn() }
//     ]),
//   useFormikContext: jest
//     .fn()
//     .mockReturnValue({ isValidating: false, setFieldValue: () => {} })
// }));

const fieldMock = {};
const metaMock = {};
const helperMock = {};
//jest.mock('formik');
jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useField: jest.fn(() => {
    return [mockField, mockMeta, mockHelpers];
  })
}));

// jest.mock('formik', () => ({
//   ...jest.requireActual('formik'),
//   useFormikContext: jest
//     .fn()
//     .mockReturnValue({ isValidating: false, setFieldValue: () => {} })
// }));

// jest.mock('formik', () => {
//   return {
//     useField() {
//       return [mockField, mockMeta, mockHelpers];
//     }
//   };
// });

const mockComponent = () => <ErrorMessage name="test" />;
jest.mock('formik', () => () => mockComponent);

describe('<Input />', () => {
  it('should render the input', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: ''
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'test'
    };
    const useFiledMocked = mocked(useField);
    //  useFiledMocked.mockReturnValueOnce([mockField, mockMeta]);
    //useField.mockReturnValue([mockField, mockMeta]);
    render(
      <Input
        name="test"
        type="text"
        placeholder="Test"
        icon={AiOutlineUser}
        label="Test_label"
      />
    );

    expect(screen.getByRole('input', { name: /test/i })).toHaveAttribute(
      'type',
      'text'
    );
  });
});
