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
      participants: [
        {
          name: 'Test',
          differentGroup: []
        },
        {
          name: 'Test2',
          differentGroup: []
        }
      ],
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
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.deleteDifferentGroup = this.deleteDifferentGroup.bind(this);
  }

  onKeyPressed(evt) {
    if(evt.key === 'Enter') {
      this.addParticipant();
    }
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

    const hasSameName = participants.some((participant) => participant.name.toLowerCase() === newParticipantName.toLowerCase());

    if(hasSameName) {
      alert('같은 이름 팀이 있습니다.');
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

  closeModal() {
    this.setState({showModal: false});
  }

  deleteDifferentGroup(participantData, differentGroupPart) {
    const {groups} = this.state;
    const index1 = participantData.differentGroup.indexOf(differentGroupPart);
    const index2 = differentGroupPart.differentGroup.indexOf(participantData);
    participantData.differentGroup.splice(index1, 1);
    differentGroupPart.differentGroup.splice(index2, 1);

    this.setState({
      groups
    });
  }

  deleteParticipant(participantData) {
    const {participants} = this.state;
    const newParticipants = participants.filter((participant) => participantData !== participant);

    this.setState({
      participants: newParticipants
    });
  }

  renderParticipantsList() {
    const {participants} = this.state;

    if(!participants.length) {
      return <h3>등록된 참가자이 없습니다.</h3>;
    }

    return participants.map((participant, i) => (
      <Participant
        data={participant}
        key={participant.name}
        onShowDifferentGroup={this.onShowDifferentGroup}
        onDelete={this.deleteParticipant}
        onDeleteDifferentGroup={this.deleteDifferentGroup}
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
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                placeholder="참가자명을 입력하세요"
                onChange={(evt) => this.setState({newParticipantName: evt.currentTarget.value})}
                onKeyPress={this.onKeyPressed}
                value={newParticipantName}
                type="text"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={this.addParticipant}>참가자 추가</button>
              </div>
            </div>
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
          <button type="button" onClick={this.createGroups}>그룹 생성</button>
        </div>
        <GroupsTable groupsData={groups} />
        <Modal
          ariaHideApp={false}
          isOpen={showModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          {ModalComp || null}
        </Modal>
      </div>
    );
  }
}

export default GroupMatchmaker;
