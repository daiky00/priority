import { FETCH_ISSUES } from '../actions/types';


const initialState = {
  issues: [],
  issue: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ISSUES:
    return {
      ...state,
      items: action.payload,
    }
    default:
     return state;
  }
}  