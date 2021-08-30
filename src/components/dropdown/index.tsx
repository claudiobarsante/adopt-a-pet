import Select from 'react-select';
import React, { useState } from 'react';
type Content = {
  text: string;
  value: string;
};

type Props = {
  data: Content[];
  type: string;
};

type Option = {
  value: string;
  label: string;
};

const DropDown = ({ data }: Props) => {
  const [valSelect, setValSelect] = useState(null);

  const handleChangeSelect = (e: Option | null) => {
    //get item text
    // const index = e.nativeEvent.target.selectedIndex;
    // const text = e.nativeEvent.target[index].text;
    console.log('e ', e);
    // setValSelect({ optionValue: e.target.value, optionText: text });
  };

  const options: Option[] = data.map((item: Content) => {
    return {
      value: item.value,
      label: item.text
    };
  });

  return (
    <>
      {/* <p>Selected value = {valSelect.optionValue}</p>
      <p>Corresponding text = {valSelect.optionText}</p> */}
      <Select
        instanceId="custom-select"
        options={options}
        onChange={(e) => handleChangeSelect(e)}
        placeholder="Selecione"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#58bcda'
          }
        })}
      />
    </>
  );
};

export default DropDown;
