import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Main from './Main';
import { selectLoginStatus } from '../../containers/LoginPage/selectors';
import { loginSuccess, loginError, clearLoginError } from '../../containers/LoginPage/actions';

const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginSuccess: () => dispatch(loginSuccess({ name: 'ZOLA CLIENT' })),
  dispatchLoginError: () => dispatch(loginError('Email/Password does not match our record!')),
  dispatchClearLoginError: () => dispatch(clearLoginError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
