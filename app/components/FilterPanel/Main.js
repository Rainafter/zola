import React, { PropTypes } from 'react';
import 'react-select/dist/react-select.css';
import Radio from '../common/Radio';
import { sortTypes } from './DataConfig';
import { StyledSelect, Inline } from './StyledComponents';
import mockData from '../Users/mockData';
// import { sortByName } from '../../utils/helpers';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],  // cat1, cat2, cat3
      selectCategoryIdx: 0,  // 0, 1, 2
      selectSort: '',
      users: [], // original data
    };
  }
  componentWillMount() {
    this.setState({ users: mockData }, () => {
      this.populateCategory();
      this.props.dispatchSetCategory(this.state.users[0].category);
    });
  }
  onSelect = (e) => {
    this.setState({ selectSort: e });
  }
  populateCategory = () => {
    const { users } = this.state;
    const categories = [];
    users.map((item) => {
      if (categories.indexOf(item.category) === -1) categories.push(item.category);
      return categories;
    });
    this.setState({ categories });
  }
  toggleCheckBox = (e) => {
    const { categories } = this.state;
    this.setState({
      selectCategoryIdx: categories.indexOf(e.target.value),
    });
    this.props.dispatchSetCategory(e.target.value); // set reducer selectedCatetory = 'cat1' or 'cat2' or 'cat3' to filter display of users
  }
  render() {
    const { categories, selectCategoryIdx, selectSort } = this.state;
    // console.log('render~~~~~~~~~~>this.props', this.props);
    return (
      <div>
        {
          categories.map((cat, index) => {
            return <Radio name="category" value={cat} onChange={this.toggleCheckBox} index={index} checked={selectCategoryIdx === index} />;
          })
        }
        <Inline>
          <StyledSelect
            name="sort"
            placeholder="Feature - No sort"
            className="select-style"
            value={selectSort}
            options={sortTypes}
            onChange={this.onSelect}
            autosize
          />
        </Inline>
      </div>
    );
  }
}

Main.propTypes = {
  dispatchSetCategory: PropTypes.func,
};

export default Main;
