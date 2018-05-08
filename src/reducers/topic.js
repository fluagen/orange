import { handleActions } from "redux-actions";

const topicList = {
  fetching: false,
  topics: []
};

export const getTopicList = handleActions(
  {
    requestTopicList: (state, action) => ({
      ...state,
      fetching: true
    }),
    receiveTopicList: (state, action) => ({
      ...state,
      fetching: false,
      topics: action.payload.topics
    })
  },
  topicList
);
