import { combineReducers } from 'redux';
import authReducer from '../components/login_page/reducer';
import questionReducer from '../components/questions_page/reducer';

export default combineReducers({
  auth: authReducer,
  questionsList: questionReducer,
});
