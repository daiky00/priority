import { combineReducers } from 'redux';
import repoReducer from './repoReducer';
import issueReducer from './issueReducer';

export default combineReducers({
  repos: repoReducer,
  issues: issueReducer
})