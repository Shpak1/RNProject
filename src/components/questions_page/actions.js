/* @flow */
import { types } from './constants';

export const questionsRequest = () =>
  ({ type: types.QUESTIONS_LIST.REQUEST });

export const requestSuccess = (questionsList: Object) => {
  const questionsTitles = questionsList.items.map(item => {
    return item.title;
  })
  return {
    type: types.QUESTIONS_LIST.SUCCESS,
    questionsTitles: {
      questionsTitles,
    },
  };
};

export const requestFailure = (error: Object) =>
  ({ type: types.QUESTIONS_LIST.FAILURE, message: error.message });

