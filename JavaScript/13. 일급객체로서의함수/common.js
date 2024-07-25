// 일급 객체란?
// 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가르킨다 = 다른 객체랑 일반적으로 같다.
// 객체는 매개변수로 전달받을 수 있고 리턴문으로 출력이 되고 모든 연산이 가능하다.

// 일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
const sayHello = function () {
  console.log("Hello !");
}

// 2. 함수를 인자로 다른 함수에 전달할 수 있다.
// 2-1. 콜백함수 : 매개변수로서 쓰이는 함수
// 2-2. 고차함수 : 수를 인자로 받거나 return하는 함수
function callFunction(func) {
  // 매개변수로 받은 변수가 사실, 함수다.
  func();
}

callFunction(sayHello); // "Hello"

// 3. 함수를 반환할 수 있다.
function createAdder(num) {
  return function (x) {
    return x + num;
  }
}
const addFive = createAdder(5); // addFive가 createAdder 함수가되어 매개변수 5를 받음
console.log(addFive(10)); // x = 10 

// 4. 객체안의 함수를 할당할 수 있음
const person = {
  name: 'John',
  age: 31,
  isMarried: true,
  sayHello: function () {
    console.log(`hello, my name is ${this.name}`); // 화살표 함수의 경우 호이스팅이 안되어서 undefined 됌
  }
}
person.sayHello(); // hello, my name is John

// 5. 배열의 요소로 함수를 할당할 수 있음
const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  }
]
console.log(myArr[0](1, 3)); // 4
console.log(myArr[1](10, 7)); // 17

// 6. 여러개의 함수
function multiplyBy(num) {
  return function (x) {
    return x * num;
  }
}
function add(x, y) {
  return x + y;
}
const multiplyByTwo = multiplyBy(2); // num = 2
const multiplyByThree = multiplyBy(3); // 3 * 2 = 6

console.log(multiplyByTwo(10)); // 20
console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log('result =>', ${ result }); // 40

//