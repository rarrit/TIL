// undefined, Null
// 둘 다 없음을 의미함

// undefined는 개발자가 직접 지정하는 경우는 거의 없음
// 값이 있어야하는데, 왜 없지? 자바스크립트: undefined ㅅㄱ
// undefined 는 '없다'를 명시적으로 표현하지 말자! 개발자들이 헷갈림!! null 쓰자.
// undefined 예시) 변수의 값이 지정되지 않은 경우
let a;
console.log(a); // undefined : 데이터 주소에 메모리가 없음

let b = { a: 1 };
console.log(b.a); // 1
console.log(b.b); // 존재하지 않은 속성에 접근
// console.log(b); // 오류 발생

let c = function () { };
let d = c(); // undefined : 리턴하는 값이 없는 함수일 경우


// [null]
// null 은 개발자가 없다고 명시해주는 편임
// typeof null 하면 object 인것은 자바스크립트 자체 버그이니 조심하자!
let n = null;
console.log(typeof n); // object : 버그임 버그 

// 동등연산자 : 타입까지는 일치하지 않아도 됌!
console.log(n == undefined); // 둘 다 없음을 의미해서 true
console.log(n == null); // null = null 이므로 true

// 일치연산자 : 타입까지 일치해야 됌!
console.log(n === undefined); // false
console.log(n === null); // null = null 이므로 true