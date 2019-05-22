import { FETCH_ISSUES } from './types';


export const fetchIssues = () => dispatch => {
  return fetch('https://api.github.com')
  .then(response => response.json)
  .then(issues => dispatch({
    type: FETCH_ISSUES,
    payload: issues
  }))
}