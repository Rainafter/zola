/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */


import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import Main from './Main';

const withConnect = connect(null, null);
const withSaga = injectSaga({ key: 'login', saga });
const withReducer = injectReducer({ key: 'login', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Main);
