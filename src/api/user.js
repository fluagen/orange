import { reqPost } from '../util/request';

const login = requestPost('http://localhost:3001/signin');

export const requestLogin = (loginId,passwd, handler) => {
  let body = JSON.stringify({
    loginid: loginId,
    passwd: passwd
  });
  login(body, handler);
}
