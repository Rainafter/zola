/*
 * UserPage
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import Main from './Main';

const withConnect = connect(null, null);
const withReducer = injectReducer({ key: 'user', reducer });


export default compose(
  withReducer,
  withConnect,
)(Main);
