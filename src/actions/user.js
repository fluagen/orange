import { createAction } from 'redux-actions';
import { requestLogin } from '../api/user';

export const requestLogin = createAction('requestLogin');
export const receiveLogin = createAction('receiveLogin');

export const fetchLogin = (loginId, passwd, handler) => {
  requestLogin(loginId, passwd, handler);
};
