// [this]
// 어떤 상황에선 a이기도하고 b이기도하고 다양한 상황에서 다른 값을 가지는 this 를 파헤쳐보자!
// 상황에 따라 달라지는 this는 실행 컨텍스트가 생성될 때 결졍된다.
// 이 말을 this를 bind한다라고도 한다. 

// 전역 공간에서의 this
// - 전역 공간에서 this는 전역 객체를 가리킨다.
// - 런타임 환경에 따라 this는 window(브라우저 환경) 또는 global(node 환경) 를 각각 가리킴
// 런타임 환경?
// 여러분들이 javascript로 만들어놓은 프로그램이 구동중인 환경을 말하죠. 우리는 node 파일이름.js로 vscode 상에서 구동하고 있으니 node 환경이라고 할 수 있구요. html 파일 안에 숨겨놓아서 크롬브라우저 등에서 연다고 한다면 브라우저 환경이라고 할 수 있겠네요.
// 즉 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저

console.log(this);
// Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window); // true

// 노드 환경에서의 this
// 터미널에서 console.log(this) 를 검새하면 => global 로 노출됌
// this === global // true

// 즉 전역 환경에서 this -> 노드(global 객체), 브라우저(window 객체)


// 메서드 vs 함수
// 함수와 메서드, 상당히 비슷해 보이지만 엄연한 차이가 존재합니다. 기준은 독립성이다. => 함수명();
// 그러나 메서드는 자신을 호출한 대상 객체에 대한 동작을 수행해요. 다음과 같이요. => 객체.메서드명();

// 함수 : this => 전역 객체
// 메서드 : this => 호출의 주체


// this의 할당
// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
var func = function (x) {
  console.log(this, x);
};
func(1); // Window { ... } 1

// CASE2 : 메서드
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미하죠?
var obj = {
  method: func,
};
obj.method(2); // { method: f } 2

// 함수로서의 호출과 메서드로서의 호출 구분 기준 : . []
// 아래 예시도 같아요! 점(.)으로 호출하든, 대괄호([])로 호출하든 결과는 같습니다 😉
var obj = {
  method: function (x) { console.log(this, x) }
};
obj.method(1); // { method: f } 1
obj['method'](2); // { method: f } 2


// - 함수로서 호출할 때 그 함수 내부에서의 this
//     - 함수 내부에서의 this
//         - 어떤 함수를 함수로서 호출할 경우, this는 지정되지 않아요(호출 주체가 알 수 없으니까요)
//         - 실행컨텍스트를 활성화할 당시 this가 지정되지 않은 경우, this는 전역 객체를 의미하죠
//         - 따라서, 함수로서 **‘독립적으로’ 호출할 때**는 **`this는 항상 전역객체를 가리킨다`**는 것을 주의하길 바래요 👍
// 함수는 메서드 안에 있어도 this 는무조건 전역 객체
var obj1 = {
  outer: function () { // (1) 실행 
    console.log(this); // (1-1) 호출 : obj.1
    var innerFunc = function () {
      console.log(this); // (2-1) 함수로서의 호출 : 전역 객체
    }
    innerFunc(); // (2) 실행

    var obj2 = {
      innerMethod: innerFunc // (3-1) 메서드로서의 호출 : innerMethod
    };
    obj2.innerMethod(); // (3) 실행
  }
};
obj1.outer();