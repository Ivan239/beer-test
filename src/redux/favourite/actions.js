import {ADD_BEER, DELETE_BEER, LOAD_FAV} from './types';

export const loadCart = (favourites) => ({
  type: LOAD_FAV,
  payload: favourites,
});

export const deleteBeer = (beerId) => ({
  type: DELETE_BEER,
  payload: beerId,
});

export const addBeer = (newBeer) => ({
  type: ADD_BEER,
  payload: newBeer,
});
