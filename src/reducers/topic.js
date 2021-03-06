import { handleActions } from 'redux-actions';

const initState = {
  fetching: false,
  data: {}
};

export const topic = handleActions(
  {
    requestTopic: (state, action) => ({
      ...state,
      fetching: true
    }),
    receiveTopic: (state, action) => ({
      ...state,
      fetching: false,
      data: action.payload
    })
  },
  initState
);
