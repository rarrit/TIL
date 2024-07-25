// [호이스팅] = 개념: recode
// 변수정보 수집을 마쳤더라도 아직 실행 컨텍스트가 관여할 코드는 실행 전의 상태다. (JS엔진은 코드 실행 전 이미 모든 변수정보를 알 고 있는것 )
// 변수 정보 수집 과정을 이해하기 쉽게 설명한 ‘가상 개념’ 이다.
// 가상개념은 실제론 그렇지 않아도 사람들이 이해하기 쉬운 말로 풀어 표현했다는 걸 의미함.

// 호이스팅은 끌어올리다는 뜻이긴함
// 즉 식별정보를 맨 위로 끌어올리는걸로 이해할 수 있음

// [호이스팅 규칙]
// action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
// action point 2 : 결과 예상하기
// action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

// 예시 [1]
// <적용전>
function a() {
  var x = 1;
  console.log(x); // 1
  var x;
  console.log(x); // undefined 인줄 알았으나 1
  var x = 2;
  console.log(x); // 2
}
a(1);


// <매개변수 적용>
function a() {
  var x = 1;
  console.log(x); // 1
  var x;
  console.log(x); // undefined 인줄 알았으나 1
  var x = 2;
  console.log(x); // 2
}
a(1);

// <호이스팅 적용>
function a() {
  var x;
  console.log(x); // undefined
  var x;
  console.log(x); // undefined
  var x;
  console.log(x); // undefined

  x = 1;
  console.log(x); // 1
  console.log(x); // 1
  x = 2;
  console.log(x); // 2
}
a(1);

// 예시 [2]
// <적용 전 - 내가 예상함>
function a() {
  console.log(b); // undefined
  var b = 'bbb';
  console.log(b); // 'bbb'
  function b() { }
  console.log(b); // 'bbb'
}
a();
// <적용 후>
function a() {
  console.log(b); // b(){} 하지만 변수 var에서 let 으로 변경하면 Identifier 'b' has already been declared 노출
  var b = 'bbb';
  console.log(b); // 'bbb'
  function b() { }
  console.log(b); // 'bbb'
}
a();

// 예시 [3]
// <적용 전과 후 정답 맞춤>
function a() {
  var b; // 변수 선언부 호이스팅
  var b = function b() { } // 함수 선언은 전체를 호이스팅

  console.log(b); // b(){}
  b = 'bbb'; // 변수의 할당부는 원래 자리에

  console.log(b); // 'bbb'
  console.log(b); // 'bbb'
}
a();
