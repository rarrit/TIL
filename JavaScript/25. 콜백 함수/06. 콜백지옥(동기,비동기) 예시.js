// 콜백지옥이란
// 1. 콜백 함수를 **익명 함수(아래 이미지로 살짝 보시면…)**로 전달하는 **과정이 반복**되어 
//    코드의 **`들여쓰기 수준이 헬 수준`**인 경우를 말해요! 😂😂😂
// 2. 주로 **이벤트 처리** 및 **서버 통신**과 같은 **비동기적 작업을 수행할 때** 발생하죠.
// 3. 뭐가문제일까요? 가독성이 정말 **지옥(hell)**이구요. 오랜 상태로 이렇게 짜여왔기 때문에, 수정도 어렵습니다.

// 예시)
// function(){function(){function(){function(){}}}}...
// 이런 코드들은 비동기 로직에서 많이 발생함
// 그럼 비동기와 동기는 뭘까?

/*
1. 동기 : synchronous (sync)
    1. 현재 실행중인 코드가 끝나야 다음 코드를 실행하는 방식을 말해요!
    2. CPU의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드구요.
    3. 계산이 복잡해서 CPU가 계산하는 데에 오래 걸리는 코드 역시도 동기적 코드에요 😎
2. 비동기 : a + synchronous ⇒ async라고들 흔히 부르죠 (async)
    1. 실행 중인 코드의 **`완료 여부와 무관하게`** **즉시** 다음 코드로 넘어가는 방식
    2. setTimeout, addEventListner 등
    3. 별도의 **요청, 실행 대기, 보류** 등과 관련된 코드는 모두 비동기적 코드
*/

// 코드로서의 예시
// setTimeout 
setTimeout(function () {
  console.log('여기가 먼저 실행됨???'); // 1초뒤 실행해서 아래가 먼저 실행됨
}, 1000); // 몇 초 동안 기다린 다음 해당 로직을 실행함
console.log('여기를 봐줘!!!'); // 내가 먼저 실행됨!

// 일상생활에서의 예시
// 동기적(sync) : 주문한 후에 커피가 나올때까지 기다려주세요!
// - 커피를 만들고 커피를 줘야지만 첫 번재 손님이 나감
// - 그리고 첫번 째 사람이 끝나야 두 번째 사람에게 커피를 줘야지만 두 번째 사람이 나감
// 비동기적 (async) : 주문한 후에 진동벨이 울리면 커피를 가지러 오세요!
// - 음식을 만드는 시간이 각자 다르기에 먼저 만들어진 것을 진동벨로 빠르게 처리하는 처리



// 예시코드
// - 들여쓰기 수준 📉
// - 값 전달 순서 : 아래 → 위
setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);

// 첫 번째 해결방법은 **[기명함수로 변환]**하는 방법이에요.
// 물고 물리면서 결국 끝까지 수행하죠!
// 가독성이 좋아짐 => 코드의 흐름이 위에서 아래로 이어지기 때문
// 근데, 한번만 쓰고 말텐데 이렇게 이름을 다 붙여야 하는건 근본적인 해결 방법이 아님.
var coffeeList = '';

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');