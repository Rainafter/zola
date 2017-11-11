/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectLoginDomain = () => (state) => state.get('login');

const selectLoginStatus = () => createSelector(
  selectLoginDomain(),
  (loginState) => loginState.get('status')
);

export {
  selectLoginStatus,
};
