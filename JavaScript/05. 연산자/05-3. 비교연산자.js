// 비교 연산자 ( --> true 또는 false 를 반환하는 연산자 )

// 1. 일치 연산자 ( === )
// 타입까지 일치해야 true를 반환하는 연산자
// 숫자 2가 숫자 2랑 같음? 응!
console.log(2 === 2); // true
console.log("2" === 2); // false : 타입이 다름!
console.log(2 === "2"); // false : 타입이 다르다구!

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
// 숫자 2가 숫자 2랑 다르니? 아니!
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true

// 3. 작다 연산자
console.log(2 < 3); // true
console.log(2 <= 3) // true
console.log(4 <= 3) // false



