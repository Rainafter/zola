
import { createSelector } from 'reselect';

const selectUserDomain = () => (state) => state.get('user');

const selectSelectedCategory = () => createSelector(
  selectUserDomain(),
  (userState) => userState.get('selectedCatetory')
);

const selectSortType = () => createSelector(
  selectUserDomain(),
  (userState) => userState.get('sortType')
);


export {
  selectSelectedCategory,
  selectSortType,
};
