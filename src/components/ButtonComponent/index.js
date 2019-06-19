import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #524CAF;
  border-radius: 3px;
  color: #FFFFFF;
  padding: 10px;
  width: 100px;
  &:hover {
    opacity: 0.75;
  }
  cursor: pointer;
`

const ButtonComponent = ({onClickHandler, className, text}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClickHandler}>
      {text} 
    </StyledButton>
  )
};

export default ButtonComponent;
