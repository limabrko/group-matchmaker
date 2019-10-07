import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function DifferentGroupList(props) {
  const {
    differenteGroupParts,
    onDelete
  } = props;

  return (
    <ul className="different-group-list list-unstyled">
      {
          differenteGroupParts.map((differentGroupPart) => (
            <li key={differentGroupPart.name}>
              <span>{differentGroupPart.name}</span>
              <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(differentGroupPart)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))
        }
    </ul>
  );
}

DifferentGroupList.propTypes = {
  differenteGroupParts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DifferentGroupList;
