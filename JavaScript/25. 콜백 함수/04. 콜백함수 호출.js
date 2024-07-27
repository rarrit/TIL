// obj
// 2가지 속성 = vals, logValues
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(">>> test start");
    if (this === global) {
      console.log('this가 글로벌입니다. 원하지 않는 결과임닷')
    } else {

    }
    console.log(this, v, i);

    console.log(">>> test end");
  }
};

// 메서드로서 호출, logValues는 메서드로서 해당 this 는 obj 임 
obj.logValues(1, 2);

// callback으로 호출 => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
// 단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues); // this는 글로벌입니닷. 원하지 않는 결과입니닷.