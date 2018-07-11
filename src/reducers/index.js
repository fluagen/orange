import { combineReducers } from 'redux';
import { topic } from './topic';
import { topics } from './topics';

// 需要放到store的state注册到这里
const rootReducer = combineReducers({
  topic,
  topics
});

export default rootReducer;
