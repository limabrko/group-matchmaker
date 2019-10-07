import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCog} from '@fortawesome/free-solid-svg-icons';

import ParticipantModel from '../models/Participant';

function Participant(props) {
  const {
    data,
    onShowEdit,
    onDelete,
    onDeleteDifferentGroup
  } = props;

  return (
    <div className="participant">
      <div className="inner">
        <div className="name">
          {data.name}
        </div>
        <div>
          <button type="button" className="btn btn-sm btn-block" onClick={() => onShowEdit(data)}>
            {
              data.differentGroup.length > 0 ? <span className="badge badge-pill badge-danger">{data.differentGroup.length}</span> : null
            }
            <FontAwesomeIcon icon={faCog} />
          </button>
          <button type="button" className="btn btn-sm btn-close" onClick={() => onDelete(data)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
}

Participant.propTypes = {
  onShowEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(ParticipantModel).isRequired
};

export default Participant;
