import React from 'react';
import PropTypes from 'prop-types';

import DifferentGroupList from './DifferentGroupList';

import ParticipantModel from '../models/Participant';

class EditParticipant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editData: props.participantData.clone()
    };

    this.onChange = this.onChange.bind(this);
    this.onProceed = this.onProceed.bind(this);
    this.onDeleteDifferentGroupPart = this.onDeleteDifferentGroupPart.bind(this);
  }

  onDeleteDifferentGroupPart(differentGroupPart) {
    const {editData} = this.state;
    const index = editData.differentGroup.indexOf(differentGroupPart);

    editData.differentGroup.splice(index, 1);
    this.setState({
      editData
    });
  }

  onChange(evt) {
    const {participants} = this.props;
    const {editData} = this.state;

    const selectedParticipant = participants.find((participant) => participant.name === evt.currentTarget.value);
    editData.differentGroup.push(selectedParticipant);

    this.setState({
      editData
    });
  }

  onProceed() {
    const {
      participants,
      onEdit,
      participantData
    } = this.props;
    const {editData} = this.state;

    if(!editData.name) {
      alert('참가자명을 입력하세요.');
      return;
    }

    const hasSameName = participants.some((participant) => participantData.name !== editData.name && participant.name.toLowerCase() === editData.name.toLowerCase());

    if(hasSameName) {
      alert('같은 이름 팀이 있습니다.');
      return;
    }

    onEdit(participantData, editData);
  }

  render() {
    const {
      participants,
      participantData,
      onCancel
    } = this.props;
    const {
      editData,
      value
    } = this.state;

    const availableParticipants = participants.filter((participant) => {
      const isAlreadyInDifferent = editData.differentGroup.some((differentGroupPart) => differentGroupPart.name === participant.name);

      return !isAlreadyInDifferent && participantData.name !== participant.name;
    });

    return (
      <div className="edit-participant-container">
        <div className="inner">
          <div className="modal-title">
            {`${participantData.name} 편집`}
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="participant_name">참가자명</label>
              <input
                type="text"
                className="form-control"
                id="participant_name"
                placeholder="그룹수"
                onChange={(evt) => this.setState({editData: {...editData, name: evt.currentTarget.value}})}
                value={editData.name}
              />

            </div>
            <div className="form-group col-md-6">
              <label htmlFor="participant_name">같은 그룹에 아닌 참가자</label>
              <select className="form-control" value={value} onChange={this.onChange}>
                <option>선택하세요</option>
                {availableParticipants.map((participant) => (<option value={participant.name} key={participant.name}>{participant.name}</option>))}
              </select>
              <div>
                <DifferentGroupList differenteGroupParts={editData.differentGroup} onDelete={this.onDeleteDifferentGroupPart} />
              </div>
            </div>
          </div>
          <div className="form-group modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>취소</button>
            <button type="button" className="btn btn-success" onClick={this.onProceed}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}

EditParticipant.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
  participantData: PropTypes.instanceOf(ParticipantModel).isRequired,
  onCancel: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default EditParticipant;
