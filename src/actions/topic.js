import { createAction } from 'redux-actions';
import { fetchTopicList } from '../api/topic';

export const requestTopicList = createAction('requestTopicList');
export const receiveTopicList = createAction('receiveTopicList');

export const getTopicList = dispatch => {
  dispatch(requestTopicList());
  return fetchTopicList(json => dispatch(receiveTopicList(json.topics)));
};
