// 단축 속성명 : Property shorthand
const name = "nbc";
const newAge = "30";

// key - value 가 같으면 생략 가능하다.
const obj = {
  name, // 변수명과 value값이 같으면 단축할 수 잇다. 
  age : newAge,
}

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(...arr); // 1, 2, 3

let newArr = [...arr, 4];
console.log(arr); // 123
console.log(newArr); // [1, 2, 3, 4]

// 객체에서의 전개 구문
let user = {
  name: 'nbc',
  age : 30,
}

let user2 = { ...user }
console.log(user); // { name: 'nbc', age : 30,}
console.log(user2); // { name: 'nbc', age : 30,}

// 나머지 매개변수 (Rest parameter)
function exampleFunc (a, b, c, ...args) { // args : 추가적으로 들어올 수 있음
  console.log(a, b, c);
  console.log(...args);
}
exampleFunc(1, 2, 3 , 4, 5, 6, 7); // 1, 2, 3 [4, 5, 6, 7]

// 탬플릿 리터럴(Template Literal)
// 멀티라인을 지원함, '', ""은 한 줄로만 표현해야함
const testValue = "안녕하세요.";
console.log(`
  Hello World !!! 
  ${testValue} :)
`); // 자바스크립트 코드가 들어갈 수 있음

