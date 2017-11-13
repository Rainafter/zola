import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedCategory, selectSortType } from '../../containers/UserPage/selectors';
import { selectUsers } from '../../containers/App/selectors';

import Main from './Main';

const mapStateToProps = createStructuredSelector({
  selectedCatetory: selectSelectedCategory(),
  users: selectUsers(),
  sortType: selectSortType(),
});


export default connect(mapStateToProps, null)(Main);
