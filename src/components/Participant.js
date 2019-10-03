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
    const {name} = this.state;
    const {data} = this.props;

    return (
      <div className="participant">
        <div className="inner">
          {name}
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
