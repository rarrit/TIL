// [콜백 함수의 제어권]
// 1. 호출 시점에 대한 제어권을 갖는다.

var count = 0;
// timer를 선언했지만 timer 의 제어권은 setInterval이 가져 수행함.
var timer = setInterval(function () {
  console.log(count);
  if (++count > 4) clearInterval(timer); // count가 4보다 클 경우 clearInterval로 timer의 함수를 종료함
}, 300);

var count1 = 0;
var cbFunc = function () {
  console.log(count1);
  if (++count1 > 4) clearInterval(timer1);
};
var timer1 = setInterval(cbFunc, 300); // 매개변수로 콜백함수를 넣어줬을 땐 제어권은 setInterval 에게 있음
// cbFunc(); // 직접 호출 할 경우 주체가 cbFunc로 한번만 수행함
/* 표를 통해 알아보자.
code                      | 호출 주체      | 제어권
cbFunc();                 | 사용자         | 사용자
setInterval(cbFunc, 300); | setInterval   | setInterval
*/


// 2. 인자에 대한 제어권을 갖는 예시
// map 함수 : 배열에 대한 메서드
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index); // 10 0 , 20 1 ,30 2
  return currentValue + 5;
});
console.log(newArr); // [15, 25, 35]

// 위와 비교했을 때 Index, currentValue는 사람이 이해할 수 있는 변수명일 뿐
// 컴퓨터 입장에선 매개변수의 위치마다 이해하는 것이 다름.
// 즉 map메서드의 콜백함수 인자는 콜백함수가 제어권을 가지고 있음 (귀속됌)
var newArr2 = [10, 20, 30].map(function (index, currentValue) {
  console.log(currentValue, index); // 10 0 , 20 1 ,30 2
  return currentValue + 5;
});
console.log(newArr2); // [5, 6, 7] 매개변수 명이 달라져도 수행하는 위치가 다름