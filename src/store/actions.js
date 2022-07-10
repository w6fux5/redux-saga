import * as types from './actionTypes';

export const loadUserStart = () => ({
  type: types.userActionTypes.LOAD_USER_START,
});

export const loadUserSuccess = (users) => ({
  type: types.userActionTypes.LOAD_USER_SUCCESS,
  payload: users,
});

export const loadUserError = (error) => ({
  type: types.userActionTypes.LOAD_USER_ERROR,
  payload: error,
});

export const createUserStart = ({ formValue, navigate }) => ({
  type: types.userActionTypes.CREATE_USER_START,
  payload: { formValue, navigate },
});

export const createUserSuccess = (user) => ({
  type: types.userActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserError = (error) => ({
  type: types.userActionTypes.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (userID) => ({
  type: types.userActionTypes.DELETE_USER_START,
  payload: userID,
});

export const deleteUserSuccess = (userID) => ({
  type: types.userActionTypes.DELETE_USER_SUCCESS,
  payload: userID,
});

export const deleteUserError = (error) => ({
  type: types.userActionTypes.DELETE_USER_ERROR,
  payload: error,
});

export const updateUserStart = ({ userID, userInfo, navigate }) => ({
  type: types.userActionTypes.UPDATE_USER_START,
  payload: { userID, userInfo, navigate },
});

export const updateUserSuccess = () => ({
  type: types.userActionTypes.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.userActionTypes.UPDATE_USER_ERROR,
  payload: error,
});
