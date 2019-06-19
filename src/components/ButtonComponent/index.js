import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  background-color: #524CAF;
  color: #FFFFFF;
  padding: 10px;
  width: 100px;
  &:hover {
    opacity: 0.75;
  }
`

const ButtonComponent = ({onClickHandler, className, text}) => {
  return (
    <div className="button-div">
      <StyledButton
        className={className}
        onClick={onClickHandler}>
        {text} 
      </StyledButton>
    </div>
  )
};

export default ButtonComponent;
