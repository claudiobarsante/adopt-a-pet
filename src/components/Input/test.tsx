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
// jest.mock('formik', () => ({
//   ...jest.requireActual('formik'),
//   useField: jest.fn(() => {
//     return [fieldMock, metaMock, helperMock];
//   })
// }));

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: jest
    .fn()
    .mockReturnValue({ isValidating: false, setFieldValue: () => {} })
}));

const mockComponent = () => <ErrorMessage name="test" />;
jest.mock('formik', () => () => mockComponent);

describe('<Input />', () => {
  it('should render the input', () => {
    const useFiledMocked = mocked(useField);
    useFiledMocked.mockReturnValueOnce([
      mockMeta,
      mockField,
      { setValue: jest.fn(), setTouched: jest.fn(), setError: jest.fn() }
    ]);
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
