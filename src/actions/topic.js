import { createAction } from 'redux-actions';
import { fetchTopicList, fetchTopic } from '../api/topic';

export const requestTopicList = createAction('requestTopicList');
export const receiveTopicList = createAction('receiveTopicList');

export const getTopicList = dispatch => {
  dispatch(requestTopicList());
  return fetchTopicList(json => dispatch(receiveTopicList(json)));
};

export const requestTopic = createAction('requestTopic');
export const receiveTopic = createAction('receiveTopic');

export const getTopic = (tid, dispatch) => {
  dispatch(requestTopic());
  return fetchTopic(tid, json => dispatch(receiveTopic(json)));
};

export const requestSubmitReply = createAction('requestSubmitReply');
export const receiveSubmitReply = createAction('receiveSubmitReply');



export const submitReply = (token, tid) => (r_content, dispatch) =>{
  dispatch(requestSubmitReply());
  return fetchTopic(token, json => dispatch(receiveSubmitReply(json)));
}
