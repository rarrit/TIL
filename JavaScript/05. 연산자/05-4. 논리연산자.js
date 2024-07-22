// 논리연산자
// && : 모두 참이면 참을 반환
// || : 하나만 참이면 반환
// !  : 값을 반대로 바꿈 

// 1. 논리곱 연산자 : 두 값이 true여야 true 반환 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 2. 논리합 연산자 : 두 값중 하나만 True인 경우 true 반환
console.log(true || true); // true
console.log(true || false); // false
console.log(false || true); // false
console.log(false || false); // false

// 3. 논리부정 연산자 : 값을 반대로 바꿈
console.log(!true); // false
let a = true;
console.log(a); // true
console.log(!a); // false