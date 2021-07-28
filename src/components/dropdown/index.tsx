type Content = {
  text: string;
  value: string;
};

type Props = {
  data: Content[];
  type: string;
};
const DropDown = ({ data, type }: Props) => {
  return (
    <select>
      {data &&
        data.map((item: Content) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
    </select>
  );
};

export default DropDown;
