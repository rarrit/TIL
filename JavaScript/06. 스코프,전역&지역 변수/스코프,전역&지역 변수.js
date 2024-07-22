// 스코프 : 영역 {}

// 전역 변수
let x = 10; // 전역 변수 : 모든 영역에서 참조할 수 있는 값
function printX(){
  console.log(x); // 10
}
console.log(x); // 10
printX(); // 10


// 지역 변수
function printY(){
  let y = 10; // 지역 변수 : 함수 내부에서만 의미가 있음
}
console.log(y); // y is not defined