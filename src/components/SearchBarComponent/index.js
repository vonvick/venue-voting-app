import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../ButtonComponent';

const StyledInput = styled.input`
  padding: 0.75rem;
  margin: 0.5rem;
  border: 1px solid #;
  border-radius: 4px;
`;

const InputComponent = () => {
  const [searchText, setSearchText] = useState('');

  const searchVenue = () => {
    console.log(searchText)
  };
  return (
    <div>
      <StyledInput
        value={searchText}
        onChange={() => setSearchText(searchText)}/>
      <ButtonComponent onClickHandler={searchVenue} text="search"/>
    </div>
  );
};

export default InputComponent;
