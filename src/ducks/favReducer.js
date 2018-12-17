import axios from 'axios';

const GET_FAVORITES = 'GET_FAVORITES';
const DELETE_FAV = 'DELETE_FAV';
const UPDATE_NAME = 'UPDATE_NAME';

export function getFavorites() {
  return {
    type: GET_FAVORITES,
    payload: axios.get('/api/people')
  };
};

export function deleteFav(id) {
  return {
    type: GET_FAVORITES,
    payload: axios.delete(`/api/people/${id}`)
  };
};

export function updateName() {
  return {
    type: GET_FAVORITES,
    payload: axios.get()
  };
};

const initialState = {
  favorites: []
};

export default function favReducer(state=initialState, action) {
  switch(action.type) {
    case `${GET_FAVORITES}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data
      };
    case `${DELETE_FAV}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data
      };
    case `${UPDATE_NAME}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data
      };
    default:
      return state;
  };
};