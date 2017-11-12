/*
 * UserPage
 *
 * List all the features
 */
import React from 'react';
import Users from '../../components/Users';
import FilterPanel from '../../components/FilterPanel';

class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <FilterPanel />
        <Users />
      </div>
    );
  }
}
export default UserPage;
