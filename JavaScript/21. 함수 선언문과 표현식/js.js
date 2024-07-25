// 함수 선언문. 함수명 a가 곧 변수명
// function 정의부만 존재, 할당 명령이 없는 경우
function a() { /* ... */ }
a(); // 실행 ok

// 함수 표현식. 정의한 function을 별도 변수에 할당하는 경우
// (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요)
var b = function () { /* ... */ }
b(); // 실행 ok

// (2) 기명 함수 표현식 : 변수명은 c, 함수명은 d (잘 안쓰임)
// d()는 c() 안에서 재귀적으로 호출될 때만 사용 가능하므로 사용성에 대한 의문
var c = function d() { /* ... */ }
c(); // 실행 ok
d(); // 에러!

/*
- 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다. (객체: 실행할 코드의 환경 정보)
- 그 객체 안에는 3가지가 존재한다.
  ✓ VariableEnvironment (VE)
  ✓ LexicalEnvironment (LE)
  ✓ ThisBindings (나중에 설명!)
- VE와 LE는 실행컨텍스트 생성 시점에 내용이 완전히 같고, 이후 스냅샷 유지 여부가 다르다.
- LE는 다음 2가지 정보를 가지고 있다.
  ✓ record(=environmentRecord) ← [중요!] 이 record의 수집과정이 hoisting
  ✓ outer(=outerEnvironmentReference)
*/


// 함수 선언문은 전체를 호이스팅함
// 함수 표현식은 호이스팅이 불가능함 
//