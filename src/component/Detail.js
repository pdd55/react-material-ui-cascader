import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from './Counter';
import { handleNumInc, handleNumDec } from '../actions';

// ownProps
const mapStateToProps = (state) => ({
  num: state,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(handleNumInc()),
  onDecrement: () => dispatch(handleNumDec()),
});

class Home extends React.Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }

  render() {
    console.log(this.props);
    const { num, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <a>去detail</a>
        <Counter
          value={num}
          onIncrement={onIncrement}
          onDecrement={onDecrement} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
