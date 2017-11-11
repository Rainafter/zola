import { fromJS } from 'immutable';
import {
  SET_CATEGORY,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  selectedCatetory: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return state.set('selectedCatetory', action.category);
    default:
      return state;
  }
}

export default userReducer;
