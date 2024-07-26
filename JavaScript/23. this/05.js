// [명시적 this 바인딩]
// 자동으로 부여되는 상황별 this의 규칙을 깨고 this에 별도의 값을 저장하는 방법입니다.
// 크게, **`call / apply / bind`**에 대해 알아보겠습니다.

var funcfunc = function (a, b, c) {
  console.log(this, a, b, c);
}
functfunc(); // 글로벌,a,b,c
funcfunc.call({ x: 1 }, 4, 5, 6); // x는 1 => {x : 1} 4 5 6 출력

// call 메서드
// 1. 호출 주체인 함수를 즉시 실행하는 명령어에요.
// 2. call명령어를 사용하여, 첫 번째 매개변수에 this로 binding할 객체를 넣어주면 **명시적으로 binding**할 수 있어요. 쉽죠?
// 3. 예시를 통해 확인해봅시다.

var obj = {
  a: 1, // property
  method: function (x, y) { // property
    console.log(this.a, x, y);
  }
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// apply 메서드
// 1. call 메서드와 완전히 동일해요! 다만, this에 binding할 객체는 똑같이 넣어주고 나머지 부분만 배열 형태로 넘겨줍니다.
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

// call, apply 동일한 역할을 하며, 문법만 다름



// call / apply 메서드 활용
// 객체에는 배열 메서드를 직접 적용할 수 없어요.
// 유사배열객체에는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있어요.
// 1. 유사배열객체에 배열 메서드를 적용
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
Array.prototype.push.call(obj, 'd');
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

// 2. Array.from (ES6)
// 사실, call/apply를 통해 this binding을 하는 것이 아니라 객체 → 배열로의 형 변환 만을 위해서도 
// 쓸 수 있지만 원래 의도와는 거리가 먼 방법이라 할 수 있습니다.
// 유사배열
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);

// 3. 생성자 내부에서 다른 생성자를 호출 (공통, 반복 제거)
// Student, Employee 모두 Person입니다. name과 gender 속성 모두 필요하죠. 
// 그러니 Student와 Employee 인스턴스를 만들 때 마다 세 가지 속성을 모두 각 생성자 함수에 넣기 보다는 
// Person이라는 생성자 함수를 별도로 빼는게 ‘구조화’에 도움이 더 되겠네요 😉
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
  this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');


// 4. 여러 인수를 묶어 하나의 배열로 전달할 때 apply 사용할 수 있어요.
//    - apply를 통해 비효율적인 예시를 효율적인 예시로 바꿔봅시다!
// 비효율
var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];
numbers.forEach(function (number) {
  // 현재 돌아가는 숫자가 max값 보다 큰 경우
  if (number > max) {
    // max 값을 교체
    max = number;
  }

  // 현재 돌아가는 숫자가 min값 보다 작은 경우
  if (number < min) {
    // min 값을 교체
    min = number;
  }
});

console.log(max, min);

//효율
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
// 가장쉽고 실제로 제일 많이 쓰이는 방법임!
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min);

