// [outer]
// outer = outerEnvironmentReference 

// 스코프
// 1. 식별자에 대한 유효범위를 의미해요
// 2. 대부분 언어에서 존재하구요, 당연하게도 JS에서도 존재하죠

// 스코프 체인
// 1. 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는것.
// outer는 현재 호출된 함수가 선언될 당시(이 말이 중요해요!)의 LexicalEnvironment를 참조함
// a. **outer는 현재 호출된 함수가 선언될 당시**(이 말이 중요해요!)의 LexicalEnvironment를 참조해요.
// b. 참조한다는 말이 어려우면, 그 당시의 환경 정보를 저장한다. 정보로 이해해도 괜찮습니다.
// c. 예를 들어, **`A함수 내부에 B함수 선언 → B함수 내부에 C함수 선언(Linked List)`**한 경우 어떻게 될까요?
// d. 결국 타고, 타고 올라가다 보면 **`전역 컨텍스트의 LexicalEnvironment를 참조`**하게 됩니다.
// e. 항상 outer는 오직 자신이 **선언된 시점**의 LexicalEnvironment를 참조하고 있으므로, **가장 가까운 요소부터 차례대로 접근 가능**
// f. 결론 : 무조건 스코프 체인 상에서 가장 먼저 발견된 식별자에게만 접근이 가능

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined
    var a = 3;
  };
  inner();
  console.log(a); // 1 : a에 inner는 콜스택으로 인해 참조할 수 없음 고로 전역 a를 가져와야함 (outer)
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!


// outer 
// 스코프 체인이 가능토록 하는 것(외부 환경의 참조정보)라고 할 수 있다.
// * 외부 환경의 참조정보 라는 말에 집중하자.


/*
각각의 실행 컨텍스트는 LE 안에 record와 outer를 가지고 있고, 
outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니 scope chain에 의해 
상위 컨텍스트의 record를 읽어올 수 있다.
*/