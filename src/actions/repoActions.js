import { FETCH_REPOS } from './types';
import ApiService from '../services/ApiService';
import history from '../services/history';
import api from '../api';

export const fetchRepos = (token) => dispatch => {
  if (!token) return;
  const response = ApiService.apiCall(api.repos, 'GET', token);
  return response.then(repos => {
    console.log(repos.body)
     dispatch({
      type: FETCH_REPOS,
      payload: repos.body
    })
    history.push(`/dashboard/${token}`);
  }).catch(error => {
    console.log(error)
    ApiService.handleCommonError(response);
  })
}