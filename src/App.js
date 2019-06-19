import React from 'react';

import styled from 'styled-components';

import fetchRecommendedPlaces from './utils/fetchRecommendedPlaces'; 

import SearchBarComponent from './components/SearchBarComponent';
import SearchResultComponent from './components/SearchResultComponent';

const App = () => {
  const [results, setResults] = React.useState([])

  const searchVenue = async (searchText) => {
    setResults(await fetchRecommendedPlaces(searchText))
  };

  return (
    <div className="App">
      <SearchBarComponent performSearch={searchVenue}/>

      <div className="result-container">
        <SearchResultComponent results={results}/>
      </div>
    </div>
  );
}

export default App;
