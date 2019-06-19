import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledButton } from '../ButtonComponent';
import { StyledInput } from '../SearchBarComponent'

const ResultButton = styled(StyledButton)`
  width: 120px;
`;

const StyledResult = styled.div`
  width: 80%;
  margin: 0 auto;
  .panel-container {
    background: #FFFFFF;
    min-height: 120px;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
    overflow: auto;
    margin-bottom: 30px;
    ul {
      cursor: pointer;
      padding: 0;
      margin: 0;
      display: table;
      background-color: #FFFFFF;
    }
    .panel-list {
      border-top: 1px solid #E5E5E5;
    }
    .panel-list-bottom {
      border-bottom: 1px solid #E5E5E5;
    }
    li {
      text-align: left;
      display: table-cell;
      vertical-align: middle;
      .grey-light-bg {
        color: $black-jf;
      }
    }
    .result-panel-list {
      vertical-align: middle;
      font-size: 14px;
      overflow: auto;
      width: 100%;
      &.header-font {
        font-size: 12px;
        color: $grey-dark;
      }
      li {
        &:first-child {
          width: 40%;
        }
        &:nth-of-type(2) {
          width: 20%;
          border-left: 1px solid #E5E5E5;
          text-align: center;
        }
        &:nth-of-type(3) {
          width: 20%;
          border-left: 1px solid #E5E5E5;
          text-align: center;
        }
        &:nth-of-type(4) {
          width: 20%;
          border-left: 1px solid #E5E5E5;
          text-align: center;
        }
      }
    }
    .result-header {
      li {
        &:first-child {
          padding: 0 10px 5px 10px;
          height: 100%;
        }
        
      }
      height: 100px;
      .winner {
        background: #66f791;
      }
    }
    .venue-name {
      display: block;
    }
    .venue-description {
      display: block;
      font-size: 11px;
    }
  }
  .venue-option {
    display: block;
    width: 100%;
    height: 40px;
  }
  .venue-option > input {
    visibility: hidden;
    position: absolute;
  }
  .venue-option > input + div {
    cursor: pointer;
  }
  .venue-option > input:checked + div{
    background: #C7EA46;
    color: #FFFFFF;
    font-size: 16px;
    height: 100%;
  }
  .selected-venue {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NameInput = styled(StyledInput)`
  width: 80%;
`;

class SearchResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [
        {
          name: '',
          selected: null
        }
      ],
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.results !== this.props.results) {
      const result = this.state.participants.map(user => ({
        ...user, selected: null
      }));
  
      this.setState({
        participants: result
      });
    }
  }

  updateParticipant = (key, userIndex) => (e) => {
    const newParticipants = [...this.state.participants]
    newParticipants[userIndex] = {
      ...newParticipants[userIndex],
      [key]: e.target.value
    }
    this.setState({ participants: newParticipants });
  }

  get votes() {
    return this.props.results.reduce((hash, venue, index) => {
      hash[venue.name] = this.state.participants.filter((user) => user.selected == index).length
      return hash
    }, {});
  } 

  get maxVote() {
    return Math.max(...Object.values(this.votes));
  }

  addParticipants = () => {
    this.setState({
      participants: [
        ...this.state.participants,
        { name: "", selected: null },
      ],
    });
  }

  render() {
    return (
      <StyledResult>
        <div className="panel-container">
          <ul className="result-panel-list result-header panel-list-bottom">
            <li>Participants</li>
            { this.props.results.map((venue, venueIndex) => {
              const vote = this.votes[venue.name]
              const className = vote > 0 && vote === this.maxVote ? "winner" : ""
              return (
                <li className={className} key={`venue-${venueIndex}`}>
                  <span className="venue-name">{venue.name}</span>
                  <span className="venue-description">{venue.description}</span>
                </li>
              )
            })}
          </ul>
          { this.state.participants.map((user, userIndex) => {
            return (
              <ul
                className="result-panel-list panel-list-bottom"
                key={`user-${userIndex}`}>
                <li>
                  <NameInput onChange={this.updateParticipant('name', userIndex)} placeholder="Type here"/>
                </li>
                { this.props.results.map((venue, venueIndex) => {
                  const selectedClass = user.selected == venueIndex ? 'selected-venue' : '';
                  return (
                    <li key={`user-venue-${userIndex}${venueIndex}`}>
                      <label className="venue-option">
                        {user.name &&
                          <input
                            type="radio"
                            name={`${user.name}-${userIndex}`}
                            value={venueIndex}
                            checked={user.selected == venueIndex}
                            onChange={this.updateParticipant('selected', userIndex)}/>
                        }
                        { selectedClass && <div className={selectedClass}>&#10003;</div> }
                      </label>
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </div>

        <ResultButton onClick={this.addParticipants} disabled={this.props.results.length < 1}>Add Participant</ResultButton>
      </StyledResult>
    )
  }
}

export default SearchResultComponent;
