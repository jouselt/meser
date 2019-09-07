import { LOGIN, DASHBOARD } from '../actions/types';

const initialState = {
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      }
    case DASHBOARD:
      return {
        ...state,
        totalization: action.payload
      }
    default:
      return state;
  }
}