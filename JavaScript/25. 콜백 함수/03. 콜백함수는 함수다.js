// 콜백 함수는 함수다.
// 콜백 함수로 어떤 객체의 메서드를 전달하더라도, 그 메서드는 메서드가 아닌 함수로 호출해요.
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  }
};

//method로써 호출
obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);


// map 함수를 만들어 보며 this를 이해해보자.
Array.prototype.map123 = function (callback, thisArg) {
  // map 함수에서 return 할 결과 배열
  var mappedArr = [];
  // this는 현재 전역임, 하지만 나중에 Map123이 메서드로서 수행하면 아래의 [1,2,3]이 this가 되는거임
  for (var i = 0; i < this.length; i++) {
    var mapperValue = callback.call(thisArg || globalThis, this[i]); // 즉시 실행
    mappedArr[i] = mapperValue;
  }
  return mappedArr;
}
var newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});
console.log(newArr);