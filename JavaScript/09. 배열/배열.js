// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"]; // 0: 사과, 1:바나나, 2: 오렌지
console.log("fruits =>", fruits); // ["사과", "바나나", "오렌지"]
console.log("fruits length =>", fruits.length); // 3

// 1-2. 크기 저정
let numbers = new Array(5); // 5개의 빈 배열 생성 
console.log("numbers =>", numbers); // ["","","","",""]
console.log("numbers length =>", numbers.length); // 5

// 2. 요소 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"