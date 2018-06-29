import { reqPost } from '../util/request';

const postReply = reqPost('http://localhost:3001/api/reply');


class ReplyAPI {
  static submitReply = (token, tid, r_content, handler) => {
    let body = {
      tid,
      r_content
    };
    postReply(token, body, handler);
  };
}

export default ReplyAPI;
