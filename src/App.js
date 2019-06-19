import React from 'react';

import styled from 'styled-components';

import fetchRecommendedPlaces from './utils/fetchRecommendedPlaces'; 

import SearchBarComponent from './components/SearchBarComponent';
import SearchResultComponent from './components/SearchResultComponent';
import HorizontalNavigation from './components/HorizontalNavigation';

const AppContainer = styled.div`
  width: 100%;
  background: #FDFDFD;
  .result-container {
    margin-top: 50px;
  }
  .search-bar-container {
    margin-top: 30px;
  }
`;

const App = () => {
  const [results, setResults] = React.useState([])

  const searchVenue = async (searchText) => {
    setResults(await fetchRecommendedPlaces(searchText))
  };

  return (
    <AppContainer>
      <HorizontalNavigation />
      <div className="search-bar-container">
        <SearchBarComponent performSearch={searchVenue}/>
      </div>

      <div className="result-container">
        <SearchResultComponent results={results}/>
      </div>
    </AppContainer>
  );
}

export default App;
