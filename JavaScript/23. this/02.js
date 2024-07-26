// 메서드의 내부 함수에서의 this 우회
// his에 대해서 이해는 하겠지만… 사용자 입장에서. 즉, 개발자 입장에서 이게 쉽게 받아들여지시나요? 그렇지 않죠? 
// 그렇기 때문에 우회할 수 있는 방법을 우리는 찾아볼 수 있습니다.


// 1. 변수를 활용한 방법
//    - 내부 스코프에 이미 존재하는 this를 별도의 변수에 할당하는 방법
var obj1 = {
  outer: function () {
    console.log(this); // (1) outer

    // AS-IS
    var innerFunc1 = function () {
      console.log(this); // (2) 전역객체
    }
    innerFunc1(); // 여기서 호출하면 무조건 잃어버림

    // TO-BE
    var self = this; // 스코프 안에 있는 this => outer를 가리킴
    var innerFunc2 = function () {
      console.log(self); // (3) outer
    };
    innerFunc2();
  }
};

// 메서드 호출 부분
obj1.outer();

// 2. 화살표 함수(=this를 바인딩하지 않는 함수)
//    - ES6에서 처음 도입된 화살표 함수는, 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 없습니다
//    (따라서, this는 이전의 값-상위값-이 유지돼요 / ES6에서는 함수 내부에서 this가 전역객체를 바라보는 문제 때문에 화살표함수를 도입했어요!)

// 일반 함수와 화살표 함수의 가장 큰 차이점은 무엇인가요? 라고 물으면 여러분은 무엇이라고 답해야 할까요?
// > this binding 여부가 가장 적절한 답입니다 😉

var obj = {
  outer: function () {
    console.log('?', this); // outer
    var innerFunc = () => {
      console.log(this); // 일반 함수였다면 전역 객체였지만, outer를 바라보고 있음 
    };
    innerFunc();
  }
}
obj.outer();