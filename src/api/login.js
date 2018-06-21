import { requestPost } from "../util/request";

const signin = requestPost("http://localhost:3001/signin");

export const requestLogin = (loginId, passwd, handler) => {
  let body = JSON.stringify({
    loginid: loginId,
    passwd: passwd
  });
  signin(body, handler);
}
