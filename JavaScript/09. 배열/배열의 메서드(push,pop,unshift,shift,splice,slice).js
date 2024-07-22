// 3. 배열 메소드
// 3-1. push : 배열 맨 끝에 요소를 추가함
fruits.push("키위");
console.log("fruits push =>", fruits); // ["사과", "바나나", "오렌지", "키위"]

// 3-2. pop : 배열 맨 끝에 요소를 제거함
fruits.pop();
console.log("fruits pop =>", fruits); // ["사과", "바나나", "오렌지"]

// 3-3. unshift : 배열 맨 앞 요소를 추가함
fruits.unshift("키위");
console.log("fruits unshift =>", fruits); // ["키위", "사과", "바나나", "오렌지"]

// 3-3. shift : 배열 맨 앞 요소를 제거함
fruits.shift("키위");
console.log("fruits shift =>", fruits); // ["사과", "바나나", "오렌지"]

// 3-4. splice : 위치를 지정해서 요소를 제거함 
fruits.splice(1, 1, "포도"); // 1~1 요소를 삭제하고 "포도"로 변경해줘.
console.log("fruits splice =>", fruits); // ["사과", "포도", "오렌지"]

// 3-5. slice : 시작요소 부터 마지막 요소 !전!까지 반환해서 배열로 만들어줘
let fruitsSlice = fruits.slice(1,2); // 1: 포도부터 2: 오렌지 전까지 반환해서 배열로 만들어줘
console.log("fruits slice =>", fruitsSlice); // ["포도"]