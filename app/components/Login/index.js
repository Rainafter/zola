import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Main from './Main';
import { selectLoginStatus } from '../../containers/LoginPage/selectors';
import { loginSuccess, loginError, clearLoginError } from '../../containers/LoginPage/actions';
import { getUser } from '../../containers/App/actions';


const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginSuccess: () => dispatch(loginSuccess({ name: 'ZOLA CLIENT' })),
  dispatchLoginError: () => dispatch(loginError()),
  dispatchClearLoginError: () => dispatch(clearLoginError()),
  dispatchGetUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
