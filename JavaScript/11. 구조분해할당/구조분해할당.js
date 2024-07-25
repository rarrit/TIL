// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성을 떼어내서 변수에 담는 행위


// 1. 배열의 경우
// value1 = 1
// value2 = "new"
let [value1, value2] = [1, "New"];
console.log("1", value1); // 1
console.log("2", value2); // "new"

let arr = ["val1", "val2", "val3"];
let [a, b, c, d] = arr;  // d 에 값이 있으면 ? 그 값이 들어옴 : undefined

console.log("a", a); // val1
console.log("b", b); // val2
console.log("c", c); // val3
console.log("d", d); // undefined


// 2. 객체인 경우
// key가 중요함
let user = {
  name: 'abc',
  age: 30,
}
let { name, age } = user;
console.log(name); // string: 'abc'
console.log(user); // number:  30


// 새로운 이름으로 할당하는 방법
let { name: newName, age: newAge } = user;
console.log(newName); // 'abc'
console.log(newAge); // 30
/*
let {
  name: newName,
  age: newAge,
} = user = {
  name : 'abc',
  age  : 30,
}
*/

//