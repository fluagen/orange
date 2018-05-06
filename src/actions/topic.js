import {createActions} from 'redux-actions';

const requestTopicList = createAction("requestTopicList");
const receiveTopicList = createAction("receiveTopicList");

export const getTopicList = () => (dispatch) => ({
  dispatch(requestTopicList);
  return fetch("http://localhost:3001/api/topics").then(response => response.json()).then(json => {
    receiveTopicList({"topics": json.topics})
  })
});
