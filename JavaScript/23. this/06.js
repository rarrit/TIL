// [bind 메서드]
// -> this를 bind하는 메서드
// call, apply 는 바로 호출되는 반면에 즉시 호출하지는 않는다.
// 넘겨받은 this 및 인수들을 바탕으로 새로운 함수를 반환하는 메서드라고 보면 된다.

// 목적
// - 함수의 this를 미리 적용함
// - 부분 적용 함수 ! !

// 예시
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // this => window 객체

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9


// [name 프로퍼티]
// bind - 'bound' 라는 접두어
// 1. ind 메서드를 적용해서 새로 만든 함수는 name 프로퍼티에 ‘bound’ 라는 접두어가 붙습니다(추적하기가 쉽죠!)
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);

// func와 bindFunc의 name 프로퍼티의 차이를 살펴보세요!
console.log(func.name); // func
console.log(bindFunc.name); // bound func

// 2. 상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기
//    2-1. 내부함수
//      1. 메서드의 내부함수에서 메서드의 this를 그대로 사용하기 위한 방법이에요
//      (이전에는 내부함수에 this를 전달하기 위해 self를 썼었던 것 기억 나시나요?)
//      2. self 등의 변수를 활용한 우회법보다 call, apply, bind를 사용하면 깔끔하게 처리 가능하기 때문에 이렇게 이용하는게 더 낫겠어요 🙂
var obj = {
  outer: function () {
    console.log(this); // obj
    var innerFunc = function () {
      console.log(this);
    };

    // call을 이용해서 즉시실행하면서 this를 넘겨주었습니다
    innerFunc.call(this); // obj
  }
};
obj.outer();

// 정~ 말 많이 쓰이는 방법
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    }.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
    innerFunc();
  }
};
obj.outer();

// [화살표 함수의 예외사항]
// 1. 화살표 함수는 실행 컨텍스트 생성 시, this를 바인딩하는 과정이 제외된다고 했었죠!
// 2. 이 함수 내부에는 this의 할당과정(바인딩 과정)이 아에 없으며, 접근코자 하면 스코프체인상 가장 가까운 this에 접근하게 됨
// 3. this우회, call, apply, bind보다 편리한 방법
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  }
};
obj.outer();
