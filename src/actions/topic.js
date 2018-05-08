import { createAction } from 'redux-actions';
import { fetchTopicList } from '../apis/topic';

export const requestTopicList = createAction('requestTopicList');
export const receiveTopicList = createAction('receiveTopicList');
