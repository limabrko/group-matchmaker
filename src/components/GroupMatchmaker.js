import React from 'react';

import Participant from './Participant';
import utils from '../helpers/utils';

class GroupMatchmaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupTotal: 4,
      newParticipantName: '',
      participants: []
    };

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.createGroups = this.createGroups.bind(this);
  }

  onKeyPressed(evt) {
    if(evt.key === 'Enter') {
      this.addParticipant();
    }
  }

  addParticipant() {
    const {participants, newParticipantName} = this.state;

    if(!newParticipantName) {
      return;
    }

    const newParticipant = {
      name: newParticipantName,
      differentGroup: []
    };

    this.setState({
      newParticipantName: '',
      participants: [...participants, newParticipant]
    });
  }

  createGroups() {
    const {
      participants,
      groupTotal
    } = this.state;

    console.log(utils.createGroups(participants, parseInt(groupTotal, 10)));
  }

  renderParticipantsList() {
    const {participants} = this.state;

    if(!participants.length) {
      return <h3>등록된 팀이 없습니다.</h3>
    }

    return participants.map((participant, i) => <Participant data={participant} key={participant.name} index={i} />);
  }

  render() {
    const {
      newParticipantName,
      groupTotal
    } = this.state;

    return (
      <div className="group-matchmaker">
        <div className="participant-control">
          <input 
              className="input-add"
              placeholder="팀명을 입력하세요"
              onChange={(evt) => this.setState({newParticipantName: evt.currentTarget.value})}
              onKeyDown={this.onKeyPressed}
              value={newParticipantName}
              type="text"
              />
          <div>
            <button onClick={this.addParticipant}>팀 추가</button>
          </div>
        </div>
        <div className="participant-list">
          { this.renderParticipantsList() }
        </div>
        <div>
        <input 
            placeholder="그룹수"
            onChange={(evt) => this.setState({groupTotal: evt.currentTarget.value})}
            value={groupTotal}
            type="number"
            />
          <button onClick={this.createGroups}>그룹 생성</button>
        </div>
      </div>
    );
  }
}

export default GroupMatchmaker;
