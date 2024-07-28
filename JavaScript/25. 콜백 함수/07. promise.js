// 비동기 작업은 특징이 있음
// - 순서를 보장하지 않음, 언제 결과가 제어권이 나에게 다시 올 지 모르는게 비동기 작업의 특징임
// - setTImeout같은 경우 초가 정해져있지만 그건 setTimeout의 입장이고 제어권을 넘겨준 코드입장에선 모름
// - 실제로 서버클라이언트,API 통신같은 경우 순서를 예상할 수 없음
// 예시) naver와 daum의 api를 전달 받는다.
//      daum에서 전달 받은 값으로 naver에 전달해줘야 할 때


// !!! 비동기 작업의 동기적 표현이 필요함.
// Promise에 대해
// 사실, Promise를 지금 완벽히 이해하기는 정말 어려운 일이에요. 
// 비동기 작업의 동기적 표현이라는 주제를 이해할 수 있을 만큼의 설명을 여러분께 드릴께요 🙂

// promise 는 처리가 끝나면 알려달라는 약속이다.
// 예를들면 네이버에서 날시정보를 가져오면 알려줘. 라는 느낌으로 이해하면 된다.
// - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행돼요.
// - 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 resolve(또는 reject) 둘 중 하나가 실행되기 
//   전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
// - 따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출해요.
// - resolve : 성공했다.
// - reject  : 실패했다.

// 이 방법을 비동기 -> 동기적 표현을 구현할 수 있음
new Promise(function (resolve) { // 콜백함수가 바로실행됌.
  setTimeout(function () {
    var name = '에스프레소';
    console.log(name);
    resolve(name);
  }, 500);
}).then(function (prevName) {
  // 이 안에서 새롭게 promise를 만듬 return 으로 넘어가게 할 수 있도록 함
  return new Promise(function (resolve) {
    setTimeout(function () {
      var name = prevName + ', 아메리카노';
      console.log(name);
      resolve(name);
    }, 500);
  });
}).then(function (prevName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var name = prevName + ', 카페모카';
      console.log(name);
      resolve(name);
    }, 500);
  });
}).then(function (prevName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var name = prevName + ', 카페라떼';
      console.log(name);
      resolve(name);
    }, 500);
  });
});

// 리팩토링(refactoring) : 다시 구조화한다. 즉, 개발에서 리팩토링은 비효율적인 코드를 효율적인 코드로 변경하는 작업
// Re : 다시
// Factoring : 짓는다
// 위의 코드를 리팩토링 해보자.

var addCoffee = function (name) { // 매개변수를 받음 : 변경되는 값은 커피명임
  return function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? `${prevName}, ${name}` : name; // 백틱 사용
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
}
addCoffee('아메리카노')().then(addCoffee('에스프레소')).then(addCoffee('카페모카')).then(addCoffee('카페라떼'));