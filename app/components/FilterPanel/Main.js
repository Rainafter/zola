import React, { PropTypes } from 'react';
import mockData from '../Users/mockData';
import Radio from '../common/Radio';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],  // cat1, cat2, cat3
      selectedIdx: 0,  // 0, 1, 2
    };
  }
  componentWillMount() {
    this.populateCategory(mockData);
    this.props.dispatchSetCategory(mockData[0].category);
  }
  populateCategory = () => {
    const categories = [];
    mockData.map((item) => {
      if (categories.indexOf(item.category) === -1) categories.push(item.category);
      return categories;
    });
    this.setState({ categories });
  }
  toggleCheckBox = (e) => {
    const { categories } = this.state;
    this.setState({
      selectedIdx: categories.indexOf(e.target.value),
    });
    this.props.dispatchSetCategory(e.target.value); // set reducer selectedCatetory = 'cat1' or 'cat2' or 'cat3' to filter display of users
  }
  render() {
    const { categories, selectedIdx } = this.state;
    return (
      <div>
        {
          categories.map((cat, index) => {
            return <Radio name="category" value={cat} onClick={this.toggleCheckBox} index={index} checked={selectedIdx === index} />;
          })
        }
      </div>
    );
  }
}

Main.propTypes = {
  dispatchSetCategory: PropTypes.func,
};

export default Main;
