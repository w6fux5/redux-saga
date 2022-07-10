import * as types from './actionTypes';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userActionTypes.LOAD_USER_START:
      return {
        isLoading: true,
        users: [],
        error: null,
      };

    case types.userActionTypes.LOAD_USER_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
        error: null,
      };

    case types.userActionTypes.LOAD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const createUserInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const createUserReducer = (state = createUserInitialState, action) => {
  switch (action.type) {
    case types.userActionTypes.CREATE_USER_START:
      return {
        isLoading: true,
        data: null,
        error: null,
      };

    case types.userActionTypes.CREATE_USER_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case types.userActionTypes.CREATE_USER_ERROR:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

const deleteUserInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const deleteUserReducer = (state = deleteUserInitialState, action) => {
  switch (action.type) {
    case types.userActionTypes.DELETE_USER_START:
      return {
        isLoading: true,
        data: null,
        error: null,
      };

    case types.userActionTypes.DELETE_USER_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case types.userActionTypes.DELETE_USER_ERROR:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const updateUserInitialState = {
  isLoading: false,
  error: null,
};

export const updateUserReducer = (state = updateUserInitialState, action) => {
  switch (action.type) {
    case types.userActionTypes.UPDATE_USER_START:
      return {
        isLoading: true,
        error: null,
      };

    case types.userActionTypes.UPDATE_USER_SUCCESS:
      return {
        isLoading: false,
        error: null,
      };

    case types.userActionTypes.UPDATE_USER_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
