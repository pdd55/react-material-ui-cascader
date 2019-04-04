import React from 'react';
import PropTypes from 'prop-types';

export default class Topic extends React.Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
    }

    render() {
      return (
        <div>
          {this.props.match.params.topicId}
        </div>
      );
    }
}
