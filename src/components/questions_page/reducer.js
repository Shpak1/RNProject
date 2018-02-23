import { types } from './constants';

const initialState = {
  errorMessage: '',
  questionsList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.QUESTIONS_LIST.REQUEST: {
      return {
        ...state,
        errorMessage: '',
      };
    }
    case types.QUESTIONS_LIST.SUCCESS: {
      return {
        ...state,
        questionsList: action.questionsTitles,
        errorMessage: '',
      };
    }
    case types.QUESTIONS_LIST.FAILURE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    default:
      return state;
  }
}
