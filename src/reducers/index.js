import { combineReducers } from "redux";
import { topic, topicList } from "./topic";

// 需要放到store的state注册到这里
const rootReducer = combineReducers({
  topic,
  topicList
});

export default rootReducer;
