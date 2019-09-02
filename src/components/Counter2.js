import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  sayaciBirArttir,
  sayaciBirAzalt,
  sayaciIkiArttir
} from '../redux/actions/counterActions';

console.log('jjj');

class Counter2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>

        <button onClick={() => this.props.dispatch(sayaciBirArttir())}>
          +1
        </button>
        <button onClick={() => this.props.dispatch(sayaciBirAzalt())}>
          -1
        </button>
        <button onClick={() => this.props.dispatch(sayaciIkiArttir())}>
          +2
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  };
};

export default connect(mapStateToProps)(Counter2);
