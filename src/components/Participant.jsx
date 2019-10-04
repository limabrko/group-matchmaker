import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class Participant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.data.name
    };

    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange() {
    const {id} = this.state;
    let {name} = this.state;

    if(!name) {
      name = `팀${this.props.index + 1}`;
      this.setState({
        name
      });
    }

    this.props.onNameChange(id, name);
  }

  render() {
    const {
      data,
      onShowDifferentGroup,
      onDelete,
      onDeleteDifferentGroup
    } = this.props;

    return (
      <div className="participant">
        <div className="inner">
          <div className="name">
            {data.name}
          </div>
          <ul>
            {
              data.differentGroup.map((differentGroupPart) => (
                <li key={differentGroupPart.name}>
                  <div>{differentGroupPart.name}</div>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => onDeleteDifferentGroup(data, differentGroupPart)}>끊다</button>
                </li>
              ))
            }
          </ul>
          <div>
            <button type="button" className="btn btn-sm btn-block" onClick={() => onShowDifferentGroup(data)}>차단 추가</button>
            <button type="button" className="btn btn-sm btn-close" onClick={() => onDelete(data)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Participant.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string
  })
};

export default Participant;
