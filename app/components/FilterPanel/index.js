import { connect } from 'react-redux';
import Main from './Main';
import { setCategory } from '../../containers/UserPage/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCategory: (value) => dispatch(setCategory(value)),
});

export default connect(null, mapDispatchToProps)(Main);
