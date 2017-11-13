import React, { PropTypes } from 'react';
import mockData from './mockData';
import User from './User';
import { sortByName, sortByPriority } from '../../utils/helpers';
import { Row } from '../common/Grid';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [], // category: '' age: '', name: '', priority: ''
    };
  }
  componentWillMount() {
    this.setState({ users: mockData });
  }
  componentWillReceiveProps(nextProps) {
    const { sortType } = nextProps;
    const { users } = this.state;
    if (sortType === 'Z - A') {
      users.sort(sortByName).reverse();
    } else if (sortType === 'A - Z') {
      users.sort(sortByName);
    } else if (sortType === 'Priority') {
      users.sort(sortByPriority);
    }
  }
  render() {
    const { users } = this.state;
    const { selectedCatetory } = this.props;
    return (
      <Row>
        { users.map(
          (item, index) => {
            return (item.category === selectedCatetory) && <User key={`${item.name}-${index}`} target={item} />;
          }
        )}
      </Row>
    );
  }
}

Main.propTypes = {
  selectedCatetory: PropTypes.string,
  sortType: PropTypes.string,
};

export default Main;
