import { combineReducers } from "redux";
import { getTopicList } from "./topic";

// 需要放到store的state注册到这里
const rootReducer = combineReducers({
  getTopicList
});

export default rootReducer;
