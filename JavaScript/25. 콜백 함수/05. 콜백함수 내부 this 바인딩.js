// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법

// 결과만을 위한 코딩 -> 하드코딩.. 10점/100점 짜리 코딩
var obj1 = {
  name: 'obj1',
  func: function () {
    var self = this; // 이 부분!
    return function () {
      console.log(self.name);
    };
  }
};

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback = obj1.func();
setTimeout(callback, 1000); // obj1 출력


// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
  name: 'obj2',
  func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2, 1500); // obj2 출력

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000); // obj3


// call, apply, bind 
// call,apply : 즉시 실행
// bind : this 바인딩해서 리턴해줌

// 가장 좋은 방법 → bind메서드의 활용>
var obj4 = {
  name: 'obj4',
  func: function () {
    console.log(this.name);
  }
};
//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj4.func.bind(obj4), 1000); // 'obj4' 출력

var obj5 = { name: 'obj5' };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj4.func.bind(obj5), 1500);