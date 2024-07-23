// 함수 = function(기능)
// input, output 을 가지고 있는 단위
// 기능을 묶어 재사용 가능하게 한다.


// 1. 함수 선언문
// 함수 호이스팅 가능하다.
// 두개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
funcName01(1,2); // 3
function funcName01(x, y){
  return x + y;  
}
funcName01(1,2); // 3

// 2. 함수 표현식
// 함수 호이스팅이 불가능하다.
funcName02(1,2); // funcName02 is not defined
const funcName02 = function (x,y) {
  return x + y;
}
funcName02(1,2); // 3

// 3. 화살표 함수 (ES6 신 문법)
// 함수 호이스팅이 불가능하다.
// 매개변수가 한 개일 때 소괄호를 생략 가능하다.
// 단일 표현식일 때 return 이 생략 가능하다.
const funcName03 = (x,y) => x + y;
console.log(10,20);