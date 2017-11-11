import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './constants';
const initialState = fromJS({
  user: {},
  status: '',
});
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', action.user)
        .set('status', 'Authorized');
    case LOGIN_ERROR:
      return state.set('status', 'Unauthorized');
    case CLEAR_LOGIN_ERROR:
      return state.set('status', '');
    default:
      return state;
  }
}

export default loginReducer;
