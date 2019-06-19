import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../ButtonComponent';

const StyledInput = styled.input`
  padding: 0.75rem;
  margin: 0.5rem;
  border: 1px solid #;
  border-radius: 4px;
`;

const InputComponent = ({ performSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <StyledInput
        value={searchText}
        type="text"
        onChange={(e) => setSearchText(e.target.value)}/>
      <ButtonComponent onClickHandler={() => { performSearch(searchText) }} text="search"/>
    </div>
  );
};

export default InputComponent;
