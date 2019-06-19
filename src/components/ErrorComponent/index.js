import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  min-height: 200px;
  background-color: '#FFFFFF';
  padding: 10px;
  width: 80%;
  margin: 30px auto;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  display: flex;
` 

const ErrorComponent = () => (
  <StyledError>
      <h2>Oops!... No result for location.</h2>
  </StyledError>
);

export default ErrorComponent;
