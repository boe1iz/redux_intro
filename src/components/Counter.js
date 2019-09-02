import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  sayaciBirArttir,
  sayaciBirAzalt,
  sayaciIkiArttir
} from '../redux/actions/counterActions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.sayaciBirArttir}>+1</button>
        <button onClick={this.props.sayaciBirAzalt}>-1</button>
        <button onClick={this.props.sayaciIkiArttir}>+2</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sayaciBirArttir: () => dispatch(sayaciBirArttir()),
    sayaciBirAzalt: () => dispatch(sayaciBirAzalt()),
    sayaciIkiArttir: () => dispatch(sayaciIkiArttir())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
