// 변수, 상수
// 변수란? 모든 프로그래밍 언어는 기억하고 싶은 값을 메모리에 저장하고 읽어서 재사용하는 변수라는 매커니즘을 사용한다.
// 변수를 사용하지 않는다면, 10 + 20 + 30 = 60라는 코드를 작성을 했을 때, 이 계산을 변수로 관리하지 않으면 재사용할 때 마다 작성해줘야하는 불편함이 있다.

// [변수의 5가지 주요 개념]
// #01 변수 이름 : 저장된 값의 고유 이름
// #02 변수 값 : 변수의 저장된 값
// #03 변수 할당 : 변수에 값을 저장하는 행위
// #04 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// #05 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
/*
** 01. var
** 함수 재선언 가능
** 함수 재할당 가능
*/ 
var myVar = "Hello World 01";
var myVar1 = "test 1"; // 재선언 가능
myVar = "GoodBye 01"; // 재할당 가능
console.log(myVar); // Hello World 01

/*
** 02. let (ES6)
** 함수 재선언 불가
** 함수 재할당 가능
*/ 
let myLet = "Hello World 02";
// let myLet = "test 2"; 재선언 불가능
myLet = "GoodBye 02"; // 재할당 가능
console.log("myLet =>", myLet); // Hello World 02

/*
** 03. const (ES6)
** 함수 재선언 불가
** 함수 재할당 불가
*/ 
const myConst = "Hello Wrold 03";
// const myConst = "test 3"; 재선언 불가능
// myConst = "GoodBye 03" 재할당 불가능
console.log("myConst =>", myConst); // Hello World 03