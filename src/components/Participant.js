import React from 'react';
import PropTypes from 'prop-types';

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
    let name = this.state.name;

    if(!name) {
      name = `팀${this.props.index + 1}`;
      this.setState({
        name
      });
    }

    this.props.onNameChange(id, name);
  }

  render() {
    const {data, onShowDifferentGroup} = this.props;

    return (
      <div className="participant">
        <div className="inner">
          <div className="name">
            {data.name}
          </div>
          <ul>
            {data.differentGroup.map((differentGroupPart) => <li key={differentGroupPart.name}>{differentGroupPart.name}</li>)}
          </ul>
          <div>
            <button onClick={() => onShowDifferentGroup(data)}>차단팀 추가</button>
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
