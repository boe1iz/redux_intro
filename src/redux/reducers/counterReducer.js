import * as actionTypes from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.BIR_ARTTIR:
      return (newState = state + action.payload);
    case actionTypes.BIR_AZALT:
      return (newState = state + action.payload);
    case actionTypes.IKI_ARTTIR:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;
