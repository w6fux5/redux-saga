import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'redux-saga/effects';

import * as types from './actionTypes';
import {
  loadUserSuccess,
  loadUserError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
} from './actions';
import {
  loadUsersApi,
  createUsersApi,
  deleteUsersApi,
  updateUsersApi,
} from './api';

function* onLoadUserStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    yield delay(500);
    yield put(loadUserSuccess(response.data));
  } catch ({ response }) {
    const msg = response.status === 404 ? response.statusText : response.data;
    yield put(loadUserError(msg));
  }
}

function* onCreateUserStartAsync({ payload }) {
  const { formValue, navigate } = payload || {};
  try {
    const response = yield call(createUsersApi, formValue);
    yield put(createUserSuccess(response.data));
    alert('新增成功');
    navigate('/');
  } catch (error) {
    const { response } = error;
    const msg = response.status === 404 ? response.statusText : response.data;
    yield put(createUserError(msg || error.message));
  }
}

function* onDeleteUserStartAsync(userID) {
  try {
    yield call(deleteUsersApi, userID);
    yield put(deleteUserSuccess(userID));
    yield call(onLoadUserStartAsync);
  } catch (error) {
    const { response } = error;
    const msg = response.status === 404 ? response.statusText : response.data;
    yield put(deleteUserError(msg));
  }
}

function* onUpdateUserStartAsync({ payload }) {
  const { userInfo, navigate } = payload || {};
  try {
    yield call(updateUsersApi, userInfo);
    yield put(updateUserSuccess());
    alert('更新成功');
    navigate('/');
  } catch (error) {
    const { response } = error;
    const msg = response.status === 404 ? response.statusText : response.data;
    yield put(updateUserError(msg));
  }
}

function* onLoadUsersListen() {
  yield takeEvery(types.userActionTypes.LOAD_USER_START, onLoadUserStartAsync);
}

function* onCreateUserListen() {
  yield takeLatest(
    types.userActionTypes.CREATE_USER_START,
    onCreateUserStartAsync,
  );
}

function* onDeleteUserListen() {
  while (true) {
    const { payload: userID } = yield take(
      types.userActionTypes.DELETE_USER_START,
    );
    yield call(onDeleteUserStartAsync, userID);
  }
}

function* onUpdateUserListen() {
  yield takeLatest(
    types.userActionTypes.UPDATE_USER_START,
    onUpdateUserStartAsync,
  );
}

const userSagas = [
  fork(onLoadUsersListen),
  fork(onCreateUserListen),
  fork(onDeleteUserListen),
  fork(onUpdateUserListen),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
