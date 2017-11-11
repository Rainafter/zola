import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedCategory } from '../../containers/UserPage/selectors';

import Main from './Main';

const mapStateToProps = createStructuredSelector({
  selectedCatetory: selectSelectedCategory(),
});

export default connect(mapStateToProps, null)(Main);
