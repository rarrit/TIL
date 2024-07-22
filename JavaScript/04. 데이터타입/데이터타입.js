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

// 2-3. 문자열 자르기 (substr, slice)
// substr 시작위치 ~ 어디까지
// slice 시작위치 ~ 끝위치
let str3 = "Hello, World";
console.log(str3.substr(7, 5)); // World
console.log(str3.slice(7, 12)); // World

// 2-4. 문자열 검색
let str4 = "Hello, World";
console.log(str4.search("World")); // 6 : 월드가 시작되는 지점

// 2-5. 문자열 대체 (replace)
let str5 = "Hello, World";
let result01 = str5.replace("World", "JavaScript");
console.log(result01); // "Hello, JavaScript"

// 2-6. 문자열 변환
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02); // ["apple", "banana", "kiwi"]

// 3. 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;
console.log(bool1); // true
console.log(bool2); // false
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean

// 4. undefined
// undefined : 값이 할당되지 않음
// un : not, define : 정의하다
let x;
console.log(x); // undefined

// 5. Null
// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// 개발자가 의도적으로 값이 없다는걸 명시하기 위해 사용함
let y = null;
console.log(y); // null

// 6. object(객체) : key-value pair
let person = {
  name      : 'kim',
  age       : 20,
  isMarried : false
}
console.log(typeof person); // object

// 7. array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!!
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

