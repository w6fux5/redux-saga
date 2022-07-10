import { combineReducers } from 'redux';

import {
  userReducer,
  createUserReducer,
  deleteUserReducer,
  updateUserReducer,
} from './reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  createUser: createUserReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
});
