import React from 'react';
import styled from 'styled-components';



import SearchBarComponent from './components/SearchBarComponent';
import SearchResultComponent from './components/SearchResultComponent';

function App() {
  return (
    <div className="App">
      <SearchBarComponent />

      <div className="result-container">
        <SearchResultComponent />
      </div>
    </div>
  );
}

export default App;
