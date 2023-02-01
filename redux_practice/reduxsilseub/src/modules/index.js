import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


// 스토어를 만들 때는 리듀서 하나만 사용
// 기존에 만들었던 리듀서를 하나로 합쳐줌
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer; 
