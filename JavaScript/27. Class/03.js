/*
  ## 클래스 연습해보기

  ### 요구사항
  1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
      다음 네 개의 값이 필수로 입력되어야 한다.
  
      - modelName
      - modelYear
      - type
      - price

  2. makeNoise() 메서드를 만들어 클락션을 출력한다.
  3. 이후 자동차를 3개 정도 만든다.
*/

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 set해서 Get하는 로직까지 

class KiaCar {
  constructor(modelName, modelYear, type, price, sound) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
    this._sound = sound;
  }
  get modelName() {
    return this._modelName;
  }
  // 입력값에 대한 검증까지 가능하다
  set modelName(value) {
    // 유효성 검사
    if (value.length <= 0) {
      console.log('[error] 모델명이 입력되지 않았습니다. 확인 부탁^_^');
      return;
    } else if (typeof value !== 'string') {
      console.log('[error] 입력된 모델명이 문자열이 아닙니다.');
      return;
    }
    // 검증이 완료된 경우에만 setting
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }
  set modelYear(value) {
    if (value.length <= 4) {
      console.log('[Error] 입력된 년도가 4자리가 아닙니다. 확인 부탁^_^');
      return;
    } else if (typeof value !== 'number') {
      console.log('[error] 입력된 년도가 숫자가 아닙니다.');
      return;
    }
    this._modelYear = value;
  }

  get type() {
    return this._type;
  }
  set type(value) {
    if (typeof value !== 'string') {
      console.log('[Error] 문자열로 입력해주셥');
    } else if (value !== 'A' && value !== 'B' && value !== 'C') {
      console.log('[Error] 입력된 타입이 잘못되었습니다.');
      return;
    }

    this._type = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== 'number') {
      console.log('[error] 입력된 값이 숫자가 아닙니다.');
      return;
    } else if (value < 1000000) {
      console.log('[error] 금액은 100만원 이하일 수 없다 확인 하쉬오!');
      return;
    }
    this._price = value;
  }

  get sound() {
    return this._sound;
  }
  set sound(value) {
    if (typeof value !== 'string') {
      console.log('[error] 소리는 문자열임니다.');
      return;
    } else if (value.length <= 1) {
      console.log('[error] 소리가 한 글자일 수 없습니다욧.');
      return;
    }

    this._sound = value;
  }

  // thisInfo() {
  //   console.log(`
  //     - 차량의 이름 ${this._modelName}
  //     - 차량의 연식 ${this._modelYear}
  //     - 차량의 타입 ${this._type}
  //     - 차량의 금액 ${this._price}
  //     - 차량의 클락션 ${this._sound}
  //   `)
  // }

  makeNoise() {
    console.log(`${this._modelName}차량의 클락션 소리는 ${this._sound} 입니다.`)
  }

}
const kiaK3 = new KiaCar("k3", "2012", "A", "1000000", "부어어어아아엉");
const kiaK5 = new KiaCar("k5", "2015", "B", "2000000", "쇼쇼쇽");
const kiaK7 = new KiaCar("k7", "2018", "C", "5000000", "슥-");

// kiaK3.thisInfo();
// kiaK3.makeNoise();
// kiaK5.thisInfo();
// kiaK5.makeNoise();
// kiaK7.thisInfo();
// kiaK7.makeNoise();

// 잘못된 값이 들어갔을 때의 테스트
const kiaK8 = new KiaCar("k8", "2024", "E", "10", "샥");

// setter로 잘못된 값을 설정할 때 에러 확인
kiaK3.type = 'D'; // 유효하지 않은 타입
kiaK3.price = 999999; // 유효하지 않은 금액
kiaK3.sound = '빵'; // 유효하지 않은 소리

// setter로 올바른 값을 설정할 때
kiaK3.modelName = 'morning';
console.log(kiaK3.modelName);

kiaK3.modelYear = 2020;
console.log(kiaK3.modelYear);

kiaK3.type = 'B';
console.log(kiaK3.type);

kiaK3.price = 3000000;
console.log(kiaK3.price);

kiaK3.sound = '빵빵';
console.log(kiaK3.sound);