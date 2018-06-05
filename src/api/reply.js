import { reqPost } from '../util/request';

const postReply = reqPost('http://localhost:3001/api/reply');

export const sendReply = (token, tid, r_content, handler) => {
  let body = {
    tid,
    r_content
  };
  postReply(token, body, handler);
};
