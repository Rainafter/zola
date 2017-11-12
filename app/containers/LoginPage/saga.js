import { call, put, select, fork } from 'redux-saga/effects'; //  takeLatest, take, cancel,
import request from 'utils/request';
// import { LOCATION_CHANGE } from 'react-router-redux';

// import { GET_USER } from '../App/constants';
import { selectUsers } from '../App/selectors';
import { getUserSuccess, getUserFail } from '../App/actions';
import mockData from '../../components/Users/mockData';

const buildAPIEndpoint = 'https://api.zola.com';

export function* getUser() {
  const user = yield select(selectUsers());
  const requestURL = `${buildAPIEndpoint}/?user=${user}`;
  try {
    const data = yield call(request, requestURL); // TODO: add in local storage cookie token check later
    yield put(getUserSuccess(data));
  } catch (err) {
    // console.log('~~~~~~~~~~-> getUser -> mockData');
    yield put(getUserFail(mockData));  // Because there's no real endpoint to hit, so ajax call goes to fail with our mockData
  }
}

export default function* UserData() {
  yield fork(getUser);
  // const watcher = yield takeLatest(GET_USER, getUser);
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}
