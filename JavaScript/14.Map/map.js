// Map
// JS -> 객체, 배열 : 많고, 다양하고, 복잡한 프로그램을 만들어옴
// 그럼에도, 현실세계 반영하기는 좀 많이 어려웠다..!
// Map, Set 추가적인 자료구조가 등장함

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리함 > 기존의 객체 또는 배열보다


// 1. Map
// - key / value
// - key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// - map은 키가 정렬된 순서로 저장되기 때문이다.
//   > 검색, 삭제, 제거, 여부 확인


// 반복 ... !! -> Method : keys, values, entries
const myMap = new Map();
myMap.set('one', 1); // set
myMap.set('two', 2); // set
myMap.set('three', 3); // set

console.log(myMap.keys()); // {'one', 'two', 'three'}
console.log(myMap.values()); // {1, 2, 3}
console.log(myMap.entries()); // {['one',1], ['two', 2], ['three', 3]}

// keys
for(const key of myMap.keys()){
  console.log(key);
  // one
  // two
  // three
}

// values
for(const value of myMap.values()){
  console.log(value);
  // 1
  // 2
  // 3
}

// entries
for(const entry of myMap.entries()){
  console.log(entry);
  // [one',1]
  // ['two', 2]
  // ['three', 3]
}

console.log(myMap.size); // map의 사이즈 길이 : 3
console.log(myMap.has("two1")); // key 기반 검색 : false
