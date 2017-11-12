import React, { PropTypes } from 'react';
import mockData from './mockData';
import User from './User';
// import { sortByName } from '../../utils/helpers';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [], // category: '' age: '', name: '', priority: '', checked: false
    };
  }
  componentWillMount() {
    this.populateUser();
  }
  populateUser() {
    const users = mockData.map((item) => {
      return { category: item.category, age: item.age, name: item.name, priority: item.priority, checked: false };
    });
    this.setState({ users });
  }
  render() {
    const { users } = this.state;
    const { selectedCatetory } = this.props;
    return (
      <div>
        { users.map(
          (item, index) => {
            return (item.category === selectedCatetory) && <User key={`${item.name}-${index}`} target={item} />;
          }
        )}
      </div>
    );
  }
}

Main.propTypes = {
  selectedCatetory: PropTypes.string,
};

export default Main;
