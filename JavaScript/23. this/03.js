// 콜백 함수 호출 시 그 함수 내부에서의 this
// 함수를 할 때 this를 잃어버리는 것과 맞닿아있음
// 콜백함수도 함수다.

// **“어떠한 함수, 메서드의 인자(매개변수)로 넘겨주는 함수”**
//    - 이 때, 콜백함수 내부의 this는 해당 콜백함수를 넘겨받은 함수(메서드)가 정한 규칙에 따라 값이 결정된답니다. 
//    - **콜백 함수도 함수**기 때문에 this는 전역 객체를 참조하지만(호출 주체가 없잖아요), 콜백함수를 넘겨받은 함수에서 
//    - **콜백 함수에 별도로 this를 지정한 경우**는 예외적으로 그 대상을 참조하게 되어있어요. 다음 예시를 통해 구체적으로 알아봅시다.
// 별도 지정 없음 : 전역객체
setTimeout(function () { console.log(this) }, 300); // (function(){}) => 콜백 함수

// 별도 지정 없음 : 전역객체
[1, 2, 3, 4, 5].forEach(function (x) { // (function(x){}) => 콜백 함수
  console.log(this, x);
});

// addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// 따라서 this는 button을 의미함
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function (e) {
  // 여기서의 this 는 전역이 아니라 #a 이다.
  console.log(this, e);
});