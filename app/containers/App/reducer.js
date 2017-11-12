import { fromJS } from 'immutable';
import {
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  usersData: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return state.set('usersData', fromJS(action.value));
    case GET_USER_FAIL:
      return state.set('usersData', fromJS(action.value)); // Note: Set state same as GET_USER_SUCCESS only because there's no real endpoint, so using this event to use mockData
    default:
      return state;
  }
}

export default appReducer;
