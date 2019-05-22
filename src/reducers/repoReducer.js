import { FETCH_REPOS } from '../actions/types';


const initialState = {
  repos: [],
  repo: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}  