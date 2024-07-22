// 문(if, else if, switch ~~)

// 조건문 - if, ese if, else, switch
// 자바스크립트에서 특정 조건이 달성될 때 하위의 로직을 실행할 수 있는 조건문이 있다.

// 조건문 - if 문
let x = 10;
if(x > 0) console.log("x는 양수입니다."); // true  - "x는 양수입니다."
if(x < 0) console.log("x는 음수입니다."); // false - 실행안됌

let y = "hello world";
if(y.length >= 5) console.log(y); // true - "hello world"

// 조건문 - if/else 문
let z = 10;
if(z > 0) console.log("z는 양수입니다."); // true - "z는 양수입니다."
else console.log("z는 음수입니다."); // false- 실행안됌

// 조건문 - if/else if/else 문
let a = 10;
if(a > 20) console.log("a는 20보다 큽니다."); // false
else if(a < 10) console.log("a는 10보다 작습니다."); // false
else console.log("a는 10보다 같거나 크고 20보다 작습니다."); // true - 실행

// 조건문 - switch 문
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "토끼";
switch (fruit) {
  case "사과" :
    console.log("사과입니다.");
    break;
  case "바나나" :
    console.log("바나나입니다.");
    break; 
  case "키위" :
    console.log("키위입니다.");
    break;
  default :
    console.log("과일 아닌거같은데?");
    break;
}

// 조건문의 중첩
// 너무 중첩되면 가독성과 유지보수가 어렵기에, 꼭 필요한 경우에 사용하도록 한다.
let age = 20;
let gender = "여성";

if(age >= 18){
  if(gender === "여성") {
    console.log("성인 여성입니다.");
  }else{
    console.log("성인 남성입니다.");
  }
}else{
  if(gender === "여성") {
    console.log("미성년 여성입니다.");
  }else{
    console.log("미성년 남성입니다.");
  }
}

// 조건부 실행 (&&: and 조건)
let v = 10;
(v > 0) && console.log("v는 양수입니다.");

// 조건부 실행 (||: or 조건)
// xx값은 선언 후 값을 할당하지 않음. 즉 undefined임
// zz는 xx가 undefined 면 우측의 값을 실행해줘 라는 뜻임 
let xx;
let zz = xx || 20;
console.log(xx); // 20

// falsy한 값, truthy한 값
if(0) { 
  console.log("0: hello");
}
if("") { 
  console.log("'': hello");
}
if(null) {
  console.log("null: hello");
}
if(undefined) { 
  console.log("undefined: hello");
}
if(NaN) { 
  console.log("NaN: hello");
}
if(false) {
  console.log("false: hello");
}