import {combineReducers} from 'redux';
import users from './users';
import currentUser from './currentUser';
import search from './search';
import sort from './sort';
import page from './page';

const reducers = combineReducers({
  users,
  currentUser,
  search,
  sort,
  page
});

export default reducers;