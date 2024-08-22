let hooks = [], // 상태 저장할 훅 배열 초기화
  currentHook = 0; // 현재 훅의 인덱스 초기화

// 훅을 배열로 관리하게 되므로써 hook이 실행될 때마다 순서대로 배열로 관리할 수 있게 됨
const useState = (initialValue) => {
  // [5] 현재 인덱스의 훅이 undefined면 initialValue로 초기화 해줌
  hooks[currentHook] = hooks[currentHook] || initialValue;
  // [6] 현재 훅의 인덱스를 넣어줌
  const hookIndex = currentHook;
  const setState = (newState) => {
    // [7] setState 실행 시 해당 인덱스 값을 업데이트해줌
    hooks[hookIndex] = newState;
  };
  // [8] 현재 인덱스의 상태 값과 setState 함수를 반환하고 currentHook을 증가시켜줌
  return [hooks[currentHook++], setState];
};
  

const MyReact = {
  render(Component) {
    const Comp = Component(); // [1] 컴포넌트를 실행, 컴포넌트 상태 초기화
    Comp.render(); // [2] 메서드 실행
    currentHook = 0; // [3] 다음 렌더링을 위해 0으로 초기화해줌
    return Comp; // [3] Comp 객체를 반환 (click,type,noop,render 포함)
  },
};


function ExampleComponent() {
  const [count, setCount] = useState(0); // [4] count = _val 처음엔 0, setCount는 _val 업데이트 함
  const [text, setText] = useState("foo"); // [5] text = _val 처음엔 'foo', setText는 _val 업데이트 함

  return {
    click: () => setCount(count + 1), // count를 증가하는 click 메서드
    type: (text) => setText(text), // text를 업데이트하는 type 메서드
    noop: () => setCount(count), // 현재 count 메서드
    render: () => console.log("render", { count, text }), // 현재 상태를 console을 통해 출력 하는 메서드드
  };
}

/*
 * 1. MyReact.render가 실행되면서 ExampleComponent가 실행.
 * 2. ExampleComponent 내부에서 useState(0)과 useState("foo")가 실행되어 count와 text가 초기화됨.
 * 3. render 메서드가 실행되어 초기 상태 { count: 0, text: "foo" }가 콘솔에 출력됨.
 * 4. MyReact.render는 컴포넌트 객체를 반환하고, 이 객체는 App 변수에 할당됨.
 */
let App = MyReact.render(ExampleComponent); 

// App.click() 실행 : count 증가
App.click(); // count 1증가하며 _val은 1로 변경됨

/*
 * 1. 다시 MyReact.render가 실행됨
 * 2. ExampleComponent가 실행되면서 useState(0)이 실행되지만, _val이 이미 존재하므로 초기화되지 않고 현재 값(1)을 반환함.
 * 3. render 메서드가 실행되어 업데이트된 상태 { count: 1, text: "foo" }가 콘솔에 출력됨.
 */
App = MyReact.render(ExampleComponent); 

// App.type('bar") 실행 : text 변경됨 _val은 'bar'으로 바뀜
App.type("bar");
App = MyReact.render(ExampleComponent);