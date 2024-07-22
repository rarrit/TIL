// forEach, map, filter, find

// [forEach]
// 콜백함수 : 매개 변수 자리에 함수를 넣는 것
// 배열의 length 만큼 순회함. 
let numbers = [1,2,3,4,5];
numbers.forEach(item => console.log('item 입니다 =>' + item))

// [map]
// 기존 배열을 가공해서 새로운 배열을 만들어줌
// 항상 원본 배열의 길이만큼 Return 된다.
let newNumbersMap = numbers.map(item => item * 2);
console.log("numbers map =>", newNumbersMap); // [2,4,6,8,10]

// [filter]
// 조건에 맞는 배열을 반환함
let newNumbersFilter = numbers.filter(item => item % 2 === 0);
console.log("numbers filter =>", newNumbersFilter); // [2,4]

// [find]
// 조건에 맞는 첫 번째만 반환한다.
let newNumbersFind = numbers.find(item => item > 3);
console.log("numbers find =>", newNumbersFind); // 4