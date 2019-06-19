import React, { useState } from 'react';

import styled from 'styled-components';

import fetchRecommendedPlaces from './utils/fetchRecommendedPlaces'; 

import SearchBarComponent from './components/SearchBarComponent';
import SearchResultComponent from './components/SearchResultComponent';
import HorizontalNavigation from './components/HorizontalNavigation';
import ErrorComponent from './components/ErrorComponent';

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
  const [results, setResults] = useState([])
  const [error, setError] = useState(false)

  const searchVenue = async (searchText) => {
    try {
      const result = await fetchRecommendedPlaces(searchText);
      setResults(result);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <AppContainer>
      <HorizontalNavigation />
      <div className="search-bar-container">
        <SearchBarComponent performSearch={searchVenue}/>
      </div>

      { !error && <div className="result-container">
          <SearchResultComponent results={results}/>
        </div>
      }
      { error && <div className="">
          <ErrorComponent />
        </div>
      }
    </AppContainer>
  );
}

export default App;
