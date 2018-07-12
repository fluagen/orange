import { createAction } from 'redux-actions';
import { getTopic } from '../api/topic';
import {fetchRequest} from '../util/request';

export const requestTopic = createAction('requestTopic');
export const receiveTopic = createAction('receiveTopic');

// export const getTopic = (tid, dispatch) => {
//   dispatch(requestTopic());
//   return fetchTopic(tid, json => dispatch(receiveTopic(json)));
// };

export const requestSubmitReply = createAction('requestSubmitReply');
export const receiveSubmitReply = createAction('receiveSubmitReply');

export const submitReply = (token, tid) => (r_content, dispatch) => {
  dispatch(requestSubmitReply());
  return fetchTopic(token, json => dispatch(receiveSubmitReply(json)));
};

// export const fetchTopic = (tid, dispatch) => {
//   const f = function(){
//     console.log('aaa');
//   };
//   dispatch(fetchRequest(getTopic(tid), requestTopic, receiveTopic)());
// }

export const fetchTopic = (tid) => fetchRequest(getTopic(tid), requestTopic, receiveTopic);
