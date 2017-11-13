import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Main from './Main';
import { setCategory, setSort } from '../../containers/UserPage/actions';
import { selectUsers } from '../../containers/App/selectors';

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCategory: (value) => dispatch(setCategory(value)),
  dispatchSetSort: (value) => dispatch(setSort(value)),
});

const mapStateToProps = () => createStructuredSelector({
  users: selectUsers(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
