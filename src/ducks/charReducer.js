import axios from 'axios';

const GET_CHARACTERS = 'GET_CHARACTERS';
const ADD_FAV = 'ADD_FAV';
const GET_SINGLE = 'GET_SINGLE';

export function getSingle(id) {
  return {
    type: GET_SINGLE,
    payload: axios.get(`/api/chars/${id}`)
  };
};

export function getChars() {
  return {
    type: GET_CHARACTERS,
    payload: axios.get('/api/chars')
  };
};

export function addFav(char) {
  return {
    type: ADD_FAV,
    payload: axios.post(`/api/people`, char)
  };
};

const initialState = {
  characters: [],
  char: {}
};

export default function favReducer(state=initialState, action) {
  switch(action.type) {
    case `${GET_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        characters: action.payload.data
      };
    case `${GET_SINGLE}_FULFILLED`:
      return {
        ...state,
        char: action.payload.data
      };
    case `${ADD_FAV}_FULFILLED`:
      return {
        ...state
      };
    default:
      return state;
  };
};