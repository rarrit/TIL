// [비동기 작업의 동기적 표현 - 제너레이터]

// 이터러블 객체(Iterable)
// 이터러블 = 반복할 수 있는
// 제너레이터: 반복할 수 있는 이터리털 객체를 생성한다.

// yield : 양보하다, 미루다

// !!!!중요!!!: 비동기적인 요소를 왜 동기적으로 바꾸려 하는가?
// - 순서를 보장할 수 없으니까 순서 보장이 필요한 로직에서 순서를 보장 받기 위해서.


// [1] 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};

// *가 붙은 함수가 제너레이터 함수임
// 이 함수를 실행하면 => Iterator 객체가 반환됨

// [2] 제너레이터 함수 선언 !!!
// yield 키워드로 순서 제어
var coffeeGenerator = function* () { // *가 붙은 함수가 제너레이터 함수임
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);
  var americano = yield addCoffee(espresso, '아메리카노');
  console.log(americano);
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);
};

// coffeeMaker : Iterator 객체임
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();


// [Promise - async() / await ]
// 이전에 썻던 방법 : then
// 이번에 쓸 방법 : async(비동기) / await(기다리다);

// coffeeMaker2 함수에서 호출할 함수, addCoffee2 를 선언
var addCoffee2 = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};
// ***
var coffeeMaker2 = async function () { // var coffeeMaker2 = async () => {}
  var coffeeList = '';
  var addCoffee2 = async function (name) {
    coffeeList += (coffeeList ? ', ' : '') + await addCoffee2(name);
  };

  // promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때 까지 실행됨
  // addCoffee("에스프레소") 이 로직이 실행되는게 100초가 걸리면
  await addCoffee2('에스프레소');
  // 이 console.log는 100초 뒤 실행함.
  console.log(coffeeList);
  await addCoffee2('아메리카노');
  console.log(coffeeList);
  await addCoffee2('카페모카');
  console.log(coffeeList);
  await addCoffee2('카페라떼');
  console.log(coffeeList);
};
coffeeMaker2();