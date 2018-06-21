import { createAction } from 'redux-actions';
import { requestLogin } from '../api/login';

export const fetchLogin = (loginId, passwd, handler) =>{
  requestLogin(loginId, passwd, handler);
}
