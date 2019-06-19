import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../ButtonComponent';

const StyledResult = styled.div`
  width: 80%;
  margin: 0 auto;
  .panel-container {
    overflow: auto;
    ul {
      cursor: pointer;
      padding: 0;
      margin: 0;
      display: table;
      background-color: $white;
    }
    .panel-list {
      border-top: 1px solid $grey-mid;
    }
    .panel-list-bottom {
      border-bottom: 1px solid $grey-mid;
    }
    li {
      text-align: left;
      padding: 10px;
      display: table-cell;
      vertical-align: middle;
      .grey-light-bg {
        color: $black-jf;
      }
    }
    .panel-list {
      vertical-align: middle;
      font-size: 14px;
      overflow: auto;
      &.header-font {
        font-size: 12px;
        color: $grey-dark;
      }
    }
    .result-header {
      height: 100px;
      .winner {
        background: red;
      }
    }
  }
`;

const SearchResultComponent = () => {
  const resultHeader =  [
    { name: 'Mall'},
    { name: 'Office'},
    { name: 'church'}
  ];
  const [participants, setParticipants] = useState([]);

  const updateParticipant = (key, userIndex) => (e) => {
    const newParticipants = [...participants]
    newParticipants[userIndex] = {
      ...newParticipants[userIndex],
      [key]: e.target.value
    }
    setParticipants(newParticipants)
  }

  const votes = resultHeader.reduce((hash, venue, index) => {
    hash[venue.name] = participants.filter((user) => user.selected == index).length
    return hash
  }, {})

  const maxVote = Math.max(...Object.values(votes))

  return (
    <StyledResult>
      <div className="panel-container">
        <ul className="panel-list result-header">
          <li>Participants</li>
          { resultHeader.map((venue) => {
            const vote = votes[venue.name]
            const className = vote > 0 && vote === maxVote ? "winner" : ""
            return (
              <li className={className}>{venue.name}</li>
            )
          })}
        </ul>
        { participants.map((user, userIndex) => {
          return (
            <ul className="panel-list">
              <li><input onChange={updateParticipant('name', userIndex)} placeholder="Type here"/></li>
              { resultHeader.map((venue, venueIndex) => {
                return (
                  <li>
                    {user.name && <input
                      type="radio"
                      name={`${user.name}-${userIndex}`}
                      value={venueIndex}
                      checked={user.selected == venueIndex}
                      onChange={updateParticipant('selected', userIndex)}/>}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>

      <ButtonComponent text="Add Participant" onClickHandler={(e) => {
        setParticipants([...participants, {name: "", selected: null }])
      }}/>
    </StyledResult>
  );
}

export default SearchResultComponent;
