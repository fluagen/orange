import { createAction } from 'redux-actions';
import { getTopics } from '../api/topic';
import { fetchRequest } from '../util/request';

export const requestTopics = createAction('requestTopics');
export const receiveTopics = createAction('receiveTopics');

// export const getTopics = dispatch => {
//   dispatch(requestTopics());
//   return fetchTopics(data => dispatch(receiveTopics(data)));
// };

export const fetchTopics = fetchRequest(getTopics, requestTopics, receiveTopics);
