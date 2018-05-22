import { handleActions } from 'redux-actions';

const topicListState = {
  fetching: false,
  topics: []
};

export const topicList = handleActions(
  {
    requestTopicList: (state, action) => ({
      ...state,
      fetching: true
    }),
    receiveTopicList: (state, action) => ({
      ...state,
      fetching: false,
      topics: action.payload
    })
  },
  topicListState
);

const topicState = {
  fetching: false,
  item: {}
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
      item: action.payload
    })
  },
  topicState
);
