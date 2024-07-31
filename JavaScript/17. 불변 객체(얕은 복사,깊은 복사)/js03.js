// [얕은 복사]
// js01~02 보다 나은 방법 
var copyObject = function (target) {
  var result = {
    name: 'minkyu',
  };

  // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 하지 않아도 괜찮아요.
  // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
  // 되겠죠!?
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
}

//위 패턴을 우리 예제에 적용해봅시다.
var user = {
  name: 'wonjang',
  gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'twojang';

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);

// 중첩된 개체에 대해서 완벽한 복사를 할 수 없음
// 객체안의 객체는 여전히 그 주소를 복사해올 수 밖에 없음
// 고로 깊은 복사를 해야 해결이 가능함
//
