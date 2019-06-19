import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  height: 70px;
  background-color: '#FFFFFF';
  padding: 10px;
  width: 100%;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  display: flex;
` 

const HorizontalNavigation = (className, ) => (
  <StyledNavigation>
    <div className="logo-container">
      <h4>VENUE VOTING APP</h4>
    </div>
  </StyledNavigation>
);

export default HorizontalNavigation;
