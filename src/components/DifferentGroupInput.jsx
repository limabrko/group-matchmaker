import React from 'react';
import PropTypes from 'prop-types';

class DifferentGroupInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    const {
      participants,
      participantData,
      onAddDifferentGroup
    } = this.props;

    const selectedParticipant = participants.find((participant) => participant.name === evt.currentTarget.value);

    onAddDifferentGroup(participantData, selectedParticipant);
  }

  render() {
    const {
      participants,
      participantData
    } = this.props;
    const {value} = this.state;

    const availableParticipants = participants.filter((participant) => {
      const isAlreadyInDifferent = participantData.differentGroup.some((differentGroupPart) => differentGroupPart.name === participant.name);

      return !isAlreadyInDifferent && participantData.name !== participant.name;
    });

    return (
      <div className="list-different-group">
        <select value={value} onChange={this.onChange}>
          <option>선택하세요</option>
          {availableParticipants.map((participant) => (<option value={participant.name} key={participant.name}>{participant.name}</option>))}
        </select>
      </div>
    );
  }
}

DifferentGroupInput.propTypes = {
  participants: PropTypes.array,
  participantData: PropTypes.object,
  onAddDifferentGroup: PropTypes.func
};

export default DifferentGroupInput;
