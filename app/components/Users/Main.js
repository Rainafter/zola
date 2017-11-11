import React, { PropTypes } from 'react';
import mockData from './mockData';
import User from './User';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],  // {name: cat3, checked: false}
    };
  }
  componentWillMount() {
    this.populateUser();
  }
  populateUser() {
    const users = [];
    mockData.map((item) => {
      users.push({ name: item.category, checked: false });
      return users;
    });
    this.setState({ users });
  }
  render() {
    return (
      <div>
        { mockData.map(
          (item, index) => {
            return <User key={`${item.name}-${index}`} target={item} />;
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
