/*
 * (1) 클로저의 개념(정의)
 * 클로저에 대한 정의
 * : A closure is the combination of a function and the lexical environment within which that function was declared(클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합니다.) - MDN

 * 함수가 선언된 렉시컬 환경
 * 아래 코드를 보면서, 결국 console.log(x)가 어떤 값을 출력하게 될지 생각해보시길 바래요!
*/

// 전역 스코프
const x1 = 1;

function outerFunc() {
  // outerFunc 스코프
  const x1 = 10;
  function innerFunc() {
    // x1은 어디서 참조함??
    // 함수가 선언된 렉시컬 환경 !
    // 함수가 선언될 당시의 외부 변수 등의 정보 !
    // x1는 innerFunc에 없기에 상위 스코프에서 변수를 찾음
    console.log(x1); // 10
  }
  innerFunc();
}

outerFunc();

/*
 * 흐름을 살펴볼까요?
 * innerFunc() 내부의 console.log(x)에서 참조하고 있는 x 값은
 * 먼저 스코프 내부에서 x 값을 찾습니다.
 * 없는 경우 scope chain에 의해 바로 바깥쪽 scope를 찾습니다.
 * 실행컨텍스트에서 배웠던 outer를 찾는 것임을 잊지 마세요!
 * outer는 해당 실행컨텍스트의 생성시점의 LexicalEnvironment를 갖고 있습니다.
 * 그래서 10에 먼저 접근하고, console.log(x)는 10이 출력되는 것이죠.
 * 만약 아래와 같다면, innerFunc()에서 출력하는 x값은 어떻게 될까요?
 * ❗
 * 둘 다 1이 나옵니다.
 * outerFunc와, innerFunc는 서로 다른 scope를 가지고 있습니다. 따라서 변수를 공유할 수 없어요!
*/

// innerFunc()에서는 outerFunc()의 x2에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문
const x2 = 1;

// [렉시컬 스코프]
// innerFunc를 호출했지만 전혀 다른 스코프를 가지고있음
// 즉 어디서 "호출"이 아니라, 어디서 "정의"했는지가 중요함
// `외부 렉시컬 환경에 대한 참조값` => outer: 함수가 호출되는 시점이아니라 정의(평가)되는 시점
function outerFunc() {
  const x2 = 10;
  innerFunc(); // 1
}

// InnerFunc, outerFunc는 서로 다른 scope를 가지고 있음
function innerFunc() {
  // innerFunc의 x2는 전역 스코프의 x2를 가져옴
  console.log(x2); // 1
}

outerFunc();

/*
 * 위 예시처럼 innerFunc 함수를 outerFunc 함수의 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근할 수는 없어요!! 
 * Lexical Scope가 뭔지 더 살펴보기로 합시다.
*/
/*
 * 1. [렉시컬 스코프]
 *    - JS엔진은 함수를 어디서 ‘호출했는지’가 아니라 함수를 어디에 ‘정의했는지’에 따라 상위 스코프를 결정하거든요 👀
 *    - 다시 말하면, “외부 렉시컬 환경에 대한 참조”에 저장할 참조값, 
 *      즉, 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다.이것이 바로 렉시컬 스코프다.
*/

const x3 = 1;

function foo() {
  const x3 = 10;
  bar();
}

function bar() {
  console.log(x3);
}

foo(); // 1
bar(); // 1


/*
 * 2. 정의된 환경에 대한 정보를 저장하는 곳: outer
 *    - 위에서 본 예제처럼 함수가 정의된 환경(위치)과 호출된 환경(위치)은 다를 수 있어요.따라서 호출되는 환경과는 상관없이 정의된 환경에 대한 정보를 LexicalEnvironment > outer에 기억한답니다.
*/
const x4 = 1;

function foo() {
  const x4 = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 여기보세요 여기!
// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 저장하여
// 기억한다.
function bar() {
  console.log(x4);
}

foo();
bar();

/*
 * 3. 클로저와 렉시컬 환경(LexicalEnvironment)
 * 3-1. 외부 함수보다 중접 함수가 더 오래 유지되는 경우, 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 (여전히) 참조할 수 있다. 
 *    ← 위 개념에서 중첩 함수가 바로 클로저에요 ! 여전히라는 말을 반드시 기억해주세요
 *    - outer 함수를 호출하면 중첩 함수 inner를 반환(return)해요.
 *    - 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스탭에서 팝되어 제거된다(역할을 다 했으니깐)
 *    - inner 함수는 런타임에 평가된다.
 *    - inner함수가 innerFunc에 전달되었는데, 이는 outer 함수의 렉시컬환경을 (여전히) 참조하고 있다.
 *    - [!] 즉, outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거되지만 outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다
*/

const x5 = 1;

// 1
function outer() {
  const x5 = 10;
  const inner = function () {
    console.log(x5);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();

/*
 * 3-2. 어떻게 가능할까요? (feat. 똑똑한 가비지 컬렉터)
 *     - 안쓰는 것만 가져가요! outer 함수의 렉시컬 환경은 참조하는 곳이 있으니 놔둘게욥!
 *    (출처 : https://kr.123rf.com/photo_48150163_가비지-컬렉터-테마-이미지-1-eps10-벡터-일러스트-레이-션입니다.html)
 *     - 클로저와 아닌 것을 구분해봅시다 🐿
*/

function foo() {
  const x = 1;
  const y = 2;

  // 일반적으로 클로저라고 하지 않아요.
  function bar() {
    const z = 3;

    //상위 스코프의 식별자를 참조하지 않기 때문이죠.
    console.log(z);
  }

  return bar;
}

const bar = foo();
bar();


function foo() {
  const x = 1;

  // bar 함수는 클로저였지만 곧바로 소멸한다.
  // 외부로 나가서 따로 호출되는게 아니라, 선언 후 바로
  // 실행 + 소멸
  // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
  function bar() {
    debugger;
    //상위 스코프의 식별자를 참조한다.
    console.log(x);
  }
  bar();
}

foo();

function foo() {
  const x = 1;
  const y = 2;

  // 클로저의 예
  // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며
  // 상위 스코프의 식별자를 참조한다.
  function bar() {
    debugger;
    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();