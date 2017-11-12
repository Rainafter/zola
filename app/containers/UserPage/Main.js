import React from 'react';
import Users from '../../components/Users';
import FilterPanel from '../../components/FilterPanel';

class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FilterPanel />
        <Users />
      </div>
    );
  }
}

export default Main;
