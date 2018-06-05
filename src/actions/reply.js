import { createAction } from 'redux-actions';
import { sendReply } from '../api/reply';

export const postReply = createAction('postReply');


export const submitReply = (token, tid, r_content, dispatch) => {
  return sendReply(token, tid, r_content, json => dispatch(postReply(json)));
};
