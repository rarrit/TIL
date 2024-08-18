// [2] rootReducer 생성
import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// [2-1] rootReducer 생성 및 컴파인리듀서에 모듈을 넣어줌
const rootReducer = combineReducers({
  todos: todos,
})

// [2-2] store 생성하여 createStore에 rootReducer를 넣어줌 
const store = createStore(rootReducer);


// [2-3] 내보내! [3]은 Main.jsx에 연결해야함
export default store;