import { createAction } from 'redux-actions';
import { fetchTopics } from '../api/topic';


export const requestTopics = createAction('requestTopics');
export const receiveTopics = createAction('receiveTopics');

export const getTopics = dispatch => {
  dispatch(requestTopics());
  return fetchTopics(data => dispatch(receiveTopics(data)));
};
