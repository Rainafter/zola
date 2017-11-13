import {
  SET_CATEGORY,
  SET_SORT,
} from './constants';

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function setSort(value) {
  return {
    type: SET_SORT,
    value,
  };
}
