import * as actionTypes from './actionTypes';

export const sayaciBirArttir = () => ({
  type: actionTypes.BIR_ARTTIR,
  payload: 1
});

export const sayaciBirAzalt = () => ({
  type: actionTypes.BIR_AZALT,
  payload: -1
});

export const sayaciIkiArttir = () => ({
  type: actionTypes.IKI_ARTTIR,
  payload: 2
});
