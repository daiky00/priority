import { FETCH_REPOS } from './types';
import ApiService from '../services/ApiService';
import history from '../services/history';
import api from '../api';

export const fetchRepos = (token) => dispatch => {
  if (!token) return;
  const response = ApiService.apiCall(`${api.user}/repos`, 'GET', token);

  return response.then(repos => {
    if(repos.status === 200)  {
      history.push(`/dashboard/${token}`);
      dispatch({
        type: FETCH_REPOS,
        payload: repos.body
      })
    } else {
      dispatch({
        type: FETCH_REPOS,
        message: repos.body.message
      })
    }
   
    console.log(repos)

  }).catch(error => {
    console.log(error)
    ApiService.handleCommonError(response);
  })
}