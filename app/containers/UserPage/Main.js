import React, { PropTypes } from 'react';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],  // {name: cat3, checked: false}
    };
  }
  render() {
    return (
      <div>
         User Page
      </div>
    );
  }
}

Main.propTypes = {
  selectedCatetory: PropTypes.string,
};

export default Main;
