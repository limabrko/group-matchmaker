import React from 'react';
import Modal from 'react-modal';

import Participant from './Participant';
import DifferentGroupInput from './DifferentGroupInput';
import GroupsTable from './GroupsTable';
import utils from '../helpers/utils';

class GroupMatchmaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupTotal: 4,
      newParticipantName: '',
      participants: [],
      showModal: false,
      ModalComp: null,
      groups: []
    };

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.createGroups = this.createGroups.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onShowDifferentGroup = this.onShowDifferentGroup.bind(this);
    this.onAddDifferentGroup = this.onAddDifferentGroup.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  onKeyPressed(evt) {
    if(evt.key === 'Enter') {
      this.addParticipant();
    }
  }

  onAddDifferentGroup(participantData, differentGroupParticipant) {
    participantData.differentGroup.push(differentGroupParticipant);
    differentGroupParticipant.differentGroup.push(participantData);

    this.setState({
      showModal: false,
      ModalComp: null
    });
  }

  addParticipant() {
    const {participants, newParticipantName} = this.state;

    if(!newParticipantName) {
      return;
    }

    const newParticipant = {
      name: newParticipantName,
      differentGroup: [],
      group: null
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

    this.setState({
      groups: utils.createGroups(participants, parseInt(groupTotal, 10))
    });
  }

  onShowDifferentGroup(participantData) {
    const {participants} = this.state;

    const ModalComp = (
      <DifferentGroupInput 
        participants={participants} 
        participantData={participantData} 
        onAddDifferentGroup={this.onAddDifferentGroup}
        />
    );
    this.setState({
      showModal: true,
      ModalComp
    });
  }

  renderParticipantsList() {
    const {participants} = this.state;

    if(!participants.length) {
      return <h3>등록된 팀이 없습니다.</h3>
    }

    return participants.map((participant, i) => (
      <Participant 
        data={participant} 
        key={participant.name} 
        onShowDifferentGroup={this.onShowDifferentGroup}
        index={i} 
        />
      ));
  }

  render() {
    const {
      newParticipantName,
      groupTotal,
      showModal,
      ModalComp,
      groups
    } = this.state;

    return (
      <div className="group-matchmaker">
        <div className="participant-control">
          <input 
              className="input-add"
              placeholder="팀명을 입력하세요"
              onChange={(evt) => this.setState({newParticipantName: evt.currentTarget.value})}
              onKeyPress={this.onKeyPressed}
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
        <GroupsTable groupsData={groups} />
        <Modal
          ariaHideApp={false}
          isOpen={showModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          {ModalComp ? ModalComp : null}
        </Modal>
      </div>
    );
  }
}

export default GroupMatchmaker;
