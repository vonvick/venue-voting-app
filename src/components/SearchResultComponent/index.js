import React, { Component } from 'react';
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

class SearchResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
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
          <ul className="panel-list result-header">
            <li>Participants</li>
            { this.props.results.map((venue) => {
              const vote = this.votes[venue.name]
              const className = vote > 0 && vote === this.maxVote ? "winner" : ""
              return (
                <li className={className}>{venue.name}</li>
              )
            })}
          </ul>
          { this.state.participants.map((user, userIndex) => {
            return (
              <ul className="panel-list">
                <li><input onChange={this.updateParticipant('name', userIndex)} placeholder="Type here"/></li>
                { this.props.results.map((venue, venueIndex) => {
                  return (
                    <li>
                      {user.name && <input
                        type="radio"
                        name={`${user.name}-${userIndex}`}
                        value={venueIndex}
                        checked={user.selected == venueIndex}
                        onChange={this.updateParticipant('selected', userIndex)}/>}
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </div>

        <ButtonComponent text="Add Participant" onClickHandler={this.addParticipants}/>
      </StyledResult>
    )
  }
}

export default SearchResultComponent;
