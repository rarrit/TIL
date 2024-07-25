// 중첩된 객체에 대한 [얕은 복사] 살펴보기
var user = {
  name: 'wonjang',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc',
  }
};

var user2 = copyObject(user);

user2.name = 'twojang';

// 바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라지죠.
console.log(user.name === user2.name); // false

// 더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에 값이 같아요.
// 더 혼란스러워 지는거죠 ㅠㅠ
user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

// 아래 예도 똑같아요.
user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true


// 중첩된 객체에 대한 [깊은 복사] 살펴보기
var user = {
  name: 'wonjang',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc',
  }
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);

// 결론 : 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사 ⇒ 재귀적 수행!

