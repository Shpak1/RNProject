import { types } from './constants';

const initialState = {
  errorMessage: '',
  userData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN.REQUEST: {
      return {
        ...state,
        errorMessage: '',
      };
    }
    case types.LOGIN.SUCCESS: {
      return {
        ...state,
        userName: action.userName,
        errorMessage: '',
      };
    }
    case types.LOGIN.FAILURE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case types.LOGOUT.REQUEST: {
      return {
        ...state,
        errorMessage: '',
      };
    }
    case types.LOGOUT.SUCCESS: {
      return initialState;
    }
    case types.LOGOUT.FAILURE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    default:
      return state;
  }
}
