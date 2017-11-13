import { fromJS } from 'immutable';
import {
  SET_CATEGORY,
  SET_SORT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  selectedCatetory: '',
  sortType: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return state.set('selectedCatetory', action.category);
    case SET_SORT:
      return state.set('sortType', action.value);
    default:
      return state;
  }
}

export default userReducer;
