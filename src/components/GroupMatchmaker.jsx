import React from 'react';
import Modal from 'react-modal';

import Participant from './Participant';
import EditParticipant from './EditParticipant';
import GroupsTable from './GroupsTable';
import utils from '../helpers/utils';

import ParticipantModel from '../models/Participant';

class GroupMatchmaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupTotal: 4,
      participantsPerGroup: 0,
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
    this.onShowEdit = this.onShowEdit.bind(this);
    this.onAddDifferentGroup = this.onAddDifferentGroup.bind(this);
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.deleteDifferentGroup = this.deleteDifferentGroup.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onKeyPressed(evt) {
    if(evt.key === 'Enter') {
      this.addParticipant();
    }
  }

  onEdit(originalData, newEditData) {
    const {participants} = this.state;

    originalData.differentGroup.forEach((participant) => participant.removeDifferentGroup(originalData));
    newEditData.differentGroup.forEach((participant) => participant.addDifferentGroup(newEditData));

    const index = participants.indexOf(originalData);
    participants.splice(index, 1, newEditData);

    this.setState({
      participants,
      showModal: false,
      ModalComp: null
    });
  }

  onShowEdit(participantData) {
    const {participants} = this.state;

    const ModalComp = (
      <EditParticipant
        participants={participants}
        participantData={participantData}
        onCancel={this.closeModal}
        onEdit={this.onEdit}
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

  setParticipantsPerGroup(value) {
    const participantsPerGroup = parseInt(value, 10);
    const {participants} = this.state;

    const groupTotal = participantsPerGroup > 0 ? Math.ceil(participants.length / participantsPerGroup) : 0;

    this.setState({
      groupTotal,
      participantsPerGroup
    });
  }

  setGroupTotal(value) {
    const groupTotal = parseInt(value, 10);
    const {participants} = this.state;

    const participantsPerGroup = groupTotal > 0 ? Math.ceil(participants.length / groupTotal) : 0;

    this.setState({
      groupTotal,
      participantsPerGroup
    });
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

  closeModal() {
    this.setState({
      showModal: false,
      ModalComp: null
    });
  }

  addParticipant() {
    const {participants, newParticipantName, groupTotal} = this.state;

    if(!newParticipantName) {
      return;
    }

    const hasSameName = participants.some((participant) => participant.name.toLowerCase() === newParticipantName.toLowerCase());

    if(hasSameName) {
      alert('같은 이름 팀이 있습니다.');
      return;
    }

    const newParticipant = new ParticipantModel(newParticipantName);
    const participantsPerGroup = Math.ceil((participants.length + 1) / groupTotal);

    this.setState({
      newParticipantName: '',
      participants: [...participants, newParticipant],
      participantsPerGroup
    });
  }

  createGroups() {
    const {
      participants,
      groupTotal
    } = this.state;

    if(groupTotal > participants.length) {
      alert('The number of participants must be equal or higher than groups');
      return;
    }

    this.setState({
      groups: utils.createGroups(participants, parseInt(groupTotal, 10))
    });
  }

  deleteParticipant(participantData) {
    const {participants} = this.state;
    participants.forEach((participant) => participant.removeDifferentGroup(participantData));
    const newParticipants = participants.filter((participant) => participantData !== participant);

    this.setState({
      participants: newParticipants
    });
  }

  renderParticipantsList() {
    const {participants} = this.state;

    if(!participants.length) {
      return <div className="participant-container text-center"><h2>등록된 참가자이 없습니다.</h2></div>;
    }

    return (
      <div className="participant-container">
        <h2>
          참가자
          <small>{` (${participants.length})`}</small>
        </h2>
        <div className="participant-list">
          {
            participants.map((participant, i) => (
              <Participant
                data={participant}
                key={participant.name}
                onShowEdit={this.onShowEdit}
                onDelete={this.deleteParticipant}
                onDeleteDifferentGroup={this.deleteDifferentGroup}
                index={i}
              />
            ))
          }
        </div>
      </div>
    );
  }

  render() {
    const {
      newParticipantName,
      groupTotal,
      showModal,
      ModalComp,
      groups,
      participantsPerGroup
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
        { this.renderParticipantsList() }
        <div className="group-controls">
          <div className="form-row justify-content-center">
            <div className="form-group col-md-2">
              <label htmlFor="group_total">그룹수</label>
              <input
                type="number"
                className="form-control"
                id="group_total"
                placeholder="그룹수"
                onChange={(evt) => this.setGroupTotal(evt.currentTarget.value)}
                value={groupTotal}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="participants_per_group">그룹의 참가자수</label>
              <input
                type="number"
                className="form-control"
                id="participants_per_group"
                placeholder="그룹수"
                onChange={(evt) => this.setParticipantsPerGroup(evt.currentTarget.value)}
                value={participantsPerGroup}
              />
            </div>
            <div className="form-group wrap-btn-create">
              <button type="button" className="btn btn-success btn-lg" onClick={this.createGroups}>그룹 생성</button>
            </div>
          </div>
        </div>
        <GroupsTable groupsData={groups} />
        <Modal
          ariaHideApp={false}
          isOpen={showModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {ModalComp || null}
        </Modal>
      </div>
    );
  }
}

export default GroupMatchmaker;
