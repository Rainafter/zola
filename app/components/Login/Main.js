import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import TextInput from '../common/TextInput';
import { LoginInputWrapper, TextInputWrapper, LoginButton } from './StyledComponents';
import { isValidEmail, isValidPassword } from '../../utils/helpers';
import LoginError from './LoginError';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      emailWarning: '',
      passwordWarning: '',
    };
  }

  onLoginSubmit = (evt) => {
    evt.preventDefault();
    evt.persist();
    const { email, password } = evt.target;
    // const { history } = this.props;
    this.clearLoginError();
    // sets in motion saga which does the actual pinging of DB
    const emailWarning = (!isValidEmail(email.value)) ? 'Invalid Email' : '';
    const passwordWarning = (!isValidPassword(password.value)) ? 'Invalid Password. ( * At least one none-alphaNumeric character and more than 10 characters ) ' : '';
    this.setEmailWarningMessage(emailWarning);
    this.setPasswordWarningMessage(passwordWarning);
    if (isValidEmail(email.value) && isValidPassword(password.value)) {
      // Normally dispatch saga call here with email and password, but in this demo, just check againest test@zola.com/zola#frontend
      if (this.checkAuthetication(email.value, password.value)) {
        localStorage.setItem('token', Math.floor(Math.random() * 99999999999999));
        this.props.dispatchLoginSuccess();
      } else {
        this.props.dispatchLoginError();
      }
    }
  }

  // Clear the login error for a fresh start
  onLoginInput = () => this.clearLoginError();
  setEmailWarningMessage = (message) => this.setState({ emailWarning: message });
  setPasswordWarningMessage = (message) => this.setState({ passwordWarning: message });
  // Clear the global login status
  clearLoginError = () => !!this.props.loginStatus.length && this.props.dispatchClearLoginError();
  checkAuthetication = (email, pwd) => {
    const emailOK = (email === 'test@zola.com');
    const pwdOK = (pwd === 'zola#frontend');  // 'zola#frontend'
    if (emailOK && pwdOK) return true;
    return false;
  }
  render() {
    const emailWarning = this.state.emailWarning || this.props.emailWarning;
    const passwordWarning = this.state.passwordWarning || this.props.passwordWarning;
    const { loginStatus } = this.props;
    return (
      <LoginInputWrapper>
        <form onSubmit={this.onLoginSubmit}>
          <TextInputWrapper>
            <TextInput
              name="email"
              placeholder="Email"
              onTextChange={this.onLoginInput}
              defaultValue={localStorage.getItem('email')}
              required
              warningMessage={emailWarning}
            />
          </TextInputWrapper>
          <TextInputWrapper>
            <TextInput
              name="password"
              type="password"
              placeholder="Password"
              onTextChange={this.onLoginInput}
              defaultValue={localStorage.getItem('password')}
              required
              warningMessage={passwordWarning}
            />
          </TextInputWrapper>
          <LoginButton type="submit">Submit</LoginButton>
          { (loginStatus === 'Unauthorized') && <LoginError />}
          { (loginStatus === 'Authorized') && <Redirect to="/user" /> }
        </form>
      </LoginInputWrapper>
    );
  }
}

Main.propTypes = {
  loginStatus: PropTypes.string.isRequired,
  emailWarning: PropTypes.string,
  passwordWarning: PropTypes.string,
  dispatchClearLoginError: PropTypes.func.isRequired,
  dispatchLoginSuccess: PropTypes.func,
  dispatchLoginError: PropTypes.func,
};

export default Main;
