import { FETCH_ISSUES } from '../actions/types';


const initialState = {
  issues: [],
  issue: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
     return state;
  }
}  