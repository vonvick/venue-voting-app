import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../ButtonComponent';

const StyledInputContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  .button-item {
    margin: 0 auto;
    width: 30%;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  .input-container {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  margin: 0.5rem;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display: table-cell;
  width: 100%;
`;

const InputComponent = ({ performSearch }) => {
  const [searchText, setSearchText] = useState('');

  const trackEnterKey = (e) => {
    if (e.key === 'Enter') {
      performSearch(searchText);
    }
  };

  return (
    <StyledInputContainer>
      <div className="input-container">
        <StyledInput
          value={searchText}
          type="text"
          onKeyPress={trackEnterKey}
          onChange={(e) => setSearchText(e.target.value)}/>
      </div>
      <ButtonComponent className="button-item" onClickHandler={() => { performSearch(searchText) }} text="search"/>
    </StyledInputContainer>
  );
};

export default InputComponent;
