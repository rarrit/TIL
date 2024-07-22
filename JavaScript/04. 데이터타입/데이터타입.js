// # 데이터 타입
// runtime : run 하는 타임
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때 데이터 타입이 결정된다.
// java : String a = "abc";
// const a = "abc";
// 데이터타입을 확인하는 방법 typeof 변수명

// 1. 숫자 타입
// 1-1. 정수
const num1 = 10;
console.log(num1); // 10
console.log(typeof num1) // number

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2) // number

// 1-3. 지수형(Exp)
let num3 = 2.5e5; // 2.5x10^5
console.log(num3); // 250000

// 1-4. NaN
let num4 = "hello" / 2;
console.log(num4); // NaN(Not a Number) : 숫자가 아님

// 1-5. Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // number

// 1-6. Infinity
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // number

// 2. 문자 : string(문자열 = 문자의 나열)
// '' = "" 작은따옴표,큰따옴표로 합쳐야 문자열이 됨
let str = "Hello World!";
console.log(str); // Hello World
console.log(typeof str); // string

// 2-1. 문자열 확인하기
console.log(str.length); // 12 : 띄어쓰기 포함 문자열의 길이

// 2-2. 문자열 결합하기
let str1 = "Hello, ";
let str2 = "World";
let result = str1.concat(str2);
console.log(result); // "Hello, World"

// 2-3. 문자열 자르기
let str3 = "Hello, World";
console.log(str3.substr(7, 5))