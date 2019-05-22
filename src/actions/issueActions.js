import ApiService from '../services/ApiService';
import { FETCH_ISSUES } from '../actions/types';
import api from '../api';


export const fetchIssues = (token, repoName) => dispatch => {
  if (!token) return;
  const response = ApiService.apiCall(`${api.repos}/${repoName}/issues`, 'GET', token);

  return response.then(issues => {
    console.log(issues)
    dispatch({
      type: FETCH_ISSUES,
      payload: issues.body
    })
  }).catch(error => {
    console.log(error)
    ApiService.handleCommonError(response);
  })
}