// for, while이 뭐다? "~ 동안" 즉 반복문이다.
// 프로그래밍에 핵심적인 문법임

// [for 문]
// for(초기값; 초건식; 증감식)
// let = i (초기값) : i 라는 변수는 0부터 시작할거야!
// i<10    (조건식) : i라는 변수가 10에 도달하기 전까지 계속할거야!
// i++     (증감식) : i라는 변수가 한 사이클이 돌고 나면 1을 더할꺼야!
for(let i = 0; i < 10; i++){
  console.log("for문이 돌아가고 있음 =>", i);
}

// 배열과 for문은 짝궁이다.
const arr = ["one","two","three","four","five"];
for(let i = 0; i < arr.length; i++){
  console.log(i);
  console.log("arr 길이만큼 실행함 =>", arr[i])
}

// 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시
const arr2 = [0,1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i <= arr2.length; i++){
  if(i % 2 === 0 && i > 0) console.log(i + "는 2의 배수임");
}

// [for ~ in 문]
// 객체의 속성을 출력하는 문법
let person = {
  name: 'John',
  age : 30,
  gender : "male",
}
//  
for(let key in person) {
  console.log(key + ":" + person[key])
}

// [while 문]
// while(조건){메인로직}
let i = 0;
while(i < 10) {  
  console.log("while => ", i);
  i ++;
}

// while 문을 활용해서 3초과 100미만의 숫자 중 5의 배수인 것만 출력해라.
let x = 3;
while(x < 100){  
  if(x % 5 === 0 && x >= 5) console.log("5의 배수에요!", x);
  x ++;
}

// [do ~ while 문]
// do 실행 후 while 을 실행함
let z = 0;
do{
  console.log(i);
  i ++; // 증감이 없으면 무한 루프에 빠짐 
}while(i > 10);

// [for문 break]
// 특정 조건일 경우 반복문을 중지하고 바깥으로 나가버림
for(let i = 0; i <= 10; i++){
  if(i === 5) {
    break;
  }
  console.log(i);
}

// [for문 continue] 
// 반복문이 실행되면서, 특정 조건에서 반복문은 스킵함
for(let i = 0; i <= 10; i++){
  if(i === 5) {
    continue;
  }
  console.log(i);
}