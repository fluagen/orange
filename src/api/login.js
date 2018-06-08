import { reqPost } from '../util/request';

const postSignin = requestPost('http://localhost:3001/signin');

export const sendReply = (loginid,passwd) => {
  let body = JSON.stringify({
    loginid: loginid,
    passwd: passwd
  });
  postSignin(body, handler);
};
