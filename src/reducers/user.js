import { handleActions } from 'redux-actions';

// 登陆返回结果
const loginState = () => ({});

export const loginResponse = handleActions(
  {
    requestLogin: (state, action) => ({
      ...state,
      fetching: true
    }),
    receiveLogin: (state, action) => ({
      ...state,
      fetching: false,
      data: action.payload
    })
  },
  loginState
);
