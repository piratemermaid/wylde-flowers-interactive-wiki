import React from 'react';
import { Textarea } from '@chakra-ui/react';

export default function Notes() {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Take notes here"
        height="auto"
        rows={30}
      />
    </>
  );
}
