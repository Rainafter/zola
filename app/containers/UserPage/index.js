/*
 * UserPage
 *
 * List all the features
 */
import React from 'react';
import Users from '../../components/Users/';

class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}
export default UserPage;
