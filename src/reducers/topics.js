import { handleActions } from 'redux-actions';

const initState = {
  fetching: false,
  data: []
};

export const topics = handleActions(
  {
    requestTopics: (state, action) => ({
      ...state,
      fetching: true
    }),
    receiveTopics: (state, action) => ({
      ...state,
      fetching: false,
      data: action.payload
    })
  },
  initState
);
