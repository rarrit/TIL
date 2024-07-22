// 객체
// Key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있음

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
  name   : '김민규',
  age    : 940104,
  gender : '남자'
}

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name   = name;
  this.age    = age;
  this.gender = gender;
}
let person1 = new Person("김민규", "30살", "남자");
let person2 = new Person("김민순", "20살", "여자");

// 2. 접근하는 방법
console.log("1", person.name);   // 1 김민규
console.log("2", person.age);    // 2 940104
console.log("3", person.gender); // 3 남자

// 객체 메소드(객체가 가진 여러가지 기능 : Object. ~~)
// 3-1. Object.key() : key를 가져오는 메소드
let keys = Object.keys(person);
console.log("keys =>", keys); // ["name", "age", "gender"]

// 3-2. values
let values = Object.values(person);
console.log("values =>", values); // ["김민규", 940104 , "남자"]

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries); // [["name", "age", "gender"],["김민규", 940104 , "남자"]]

// 3-4. assign
// 객체 복사
let newPerson = [];
Object.assign(newPerson, person);
console.log("newPerson =>", newPerson); // {name: "홍길동", age: 940104, gender: "남자"}

Object.assign(newPerson, person, {gender: "여자"});
console.log("newPerson =>", newPerson); // {name: "홍길동", age: 940104, gender: "여자"}

// 3-5. 객체비교
let person01 = {
  name   : '김민규',
  age    : 940104,
  gender : '남자'
}
let person02 = {
  name   : '김민규',
  age    : 940104,
  gender : '남자'
}
let str01 = "aaa";
let str02 = "aaa";

// person01 === person02
// false : 객체는 데이터 타입 크기가 큼, 메모리에 저장할 때 별도의 공간에 저장함
console.log("answer =>", person01 === person02); 

// str01 === str02
// true : 직접 주소에 저장하기에 괜찮음
console.log("answer =>", str01 === str02); 

// 3-6. 객체 병합
let person001 = {
  name   : '김민규',
  age    : 940104,
}
let person002 = {
  gender : '남자',
}
// ... : spread operator
let perfactPerson = {...person001, ...person002};
console.log(perfactPerson); // {name: "홍길동", age: 940104, gender: "남자"}
