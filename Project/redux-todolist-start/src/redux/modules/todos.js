// [4] Action value

// [4-3] Add Todo 생성
const ADD_TODO = "ADD_TODO";

// [4-4] action creator 만들어서 export (컴포넌트에서 사용할 수 있도록 해야함)
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload, // 인풋
  }
}

// [4-1] state init 생성
const initialState = [
  {
    id: 1,
    title: "react를 배워보자"
  },
  {
    id: 2,
    title: "redux를 배워보자"
  }
]

/*
 * [1] 리듀서 생성하자. const todos = () => {}
 * [4-2] todos에 두개의 인자값인 state, action 이 들어감
 *    - state는 initialState 기본 값 설정
 *    - switch type에 맞춰 실행
*/
const todos = (state = initialState, action) => {
  switch (action.type) {
    // [4-5] ADD_TODO일 경우 기존 배열에서 input값(Payload)추가.
    case ADD_TODO:
      return [...state, action.payload]
  
    default:
      return state;
  }
}

export default todos;