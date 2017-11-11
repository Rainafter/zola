/**
 * Asynchronously loads the component for LoginPage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/common/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
