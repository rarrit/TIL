// - 02. 어떤 매치가 성사될까?
//    - 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
//    - **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

// 변수 fullname에 값을 할당함, 실행 컨텍스트를 확인 위해 출력되는 구문으로 이동
var fullname = 'Ciryl Gane';

var fighter = {
  fullname: 'John Jones',
  opponent: {
    fullname: 'Francis Ngannou',
    getFullname: function () {
      // 1. 함수에서 디스는 global or window 임
      // 2. 하지만 getFullname opponent의 메서드임 
      // 3. 메서드 안의 this.name은 'Francis Ngannou'를 가르킴
      return this.fullname;
    }
  },

  getName: function () {
    // 1. getName 또한 함수임 함수면 global or window
    // 2. getName은 figheter의 메서드임
    // 3. 고로 this또한 fighter의 fullname = 'john jones'를 가르킴
    return this.fullname;
  },

  getFirstName: () => {
    // 실행 2를 통해 오게됌
    // (화살표 함수를 사용하여 this 는 외부의 this를 가져옴) 검색했습니다..
    // 외부의 this는 global, window이기에 외부에서 this는 처음 선언한 'Ciryl Gane'이다.
    // Ciryl Gane을 배열로 만들어 0번째임 Ciryl 이됌
    return this.fullname.split(' ')[0];
  },

  getLastName: (function () {
    // 실행 2를 통해 오게됌
    // 즉시 실행하여 this는 fighter가 됌
    // fighter의 fullname의 문자열을 배열로 만들어 인덱스 1번째 값은 Jones를 가르킴
    return this.fullname.split(' ')[1];
  })()

}

// 1차 실행
// fighter.opponent.getFullname() 이동
console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName()); //  Francis Ngannou vs John Jones

// 2차 실행
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName); //  John Jones vs Ciryl Jones