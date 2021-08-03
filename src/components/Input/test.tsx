import { useForm, useController, UseControllerProps } from 'react-hook-form';

type Props = {
  name: string;
};
const Test = ({ name }: Props) => {
  const { control, register } = useForm();
  // const {
  //   field: { ref },
  //   fieldState: { invalid, isTouched, isDirty },
  //   formState: { touchedFields, dirtyFields }
  // } = useController({
  //   name,
  //   control,
  //   rules: { required: true },
  //   defaultValue: ''
  // });
  const { field: input } = useController({ name: `${name}` });
  return <input {...input} />;
};

export default Test;
