// - 01. 나이든 유저
//  - 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

// 변수를 선언함
var user = {
  name: "john",
  age: 20,
}

// 실행이 안되니 일단 패스 
var getAged = function (user, passedTime) {
  // 매개변수 user는 객체 user를 전달받음
  // 매개변수 passedTime은 6을 전달받음
  let result = {};
  for (props in user) {
    result[props] = user[props];
  }
  result.age = passedTime; // user1 != user2를 수행하기 위해 나이를 할당함
  return result;
}

var agedUser = getAged(user, 6); // 얕은 복사한 값을 agedUser에 할당함

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    // 실패! user2가 존재하지 않습니다!
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log('user1, user2 비교 =>', user1, user2);
    // 통과! 나이가 들면 과거의 당신과는 달라질 거야!
    console.log("Passed! If you become older, you will be different from you in the past!")
  } else {
    // 실패! 사용자 과거와 동일
    console.log("Failed! User same with past one");
  }
}

// 여기서 1차로 실행함 
// user, agedUser는 위에서 선언하고 있음
// 첫번째 매개변수에는 name: "john", age: 20, 값을 가지고 있음
// 두번째 매개변수에서 작성 
agedUserMustBeDifferentFromUser(user, agedUser);

// 결과적으로 else if(user1 ! == user2) 해당 구문이 출력되어야함
// 그 말은 ageUser !== user 여야함