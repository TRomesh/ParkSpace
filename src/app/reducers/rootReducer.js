import {combineReducers} from 'redux';
import users from './userReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  users,
  courses
});

export default rootReducer;
