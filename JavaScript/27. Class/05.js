// 상속 (Inheritance) - extends
// Class -> 유산으로 내려주는 주요 기능!
// 부모 <-> 자식 (부모,자식,손자 등등등)
// 예: 동물 클래스가 있다해보자. 동물 인스턴스도 각각 만들어 줄 수 있지만 예시로 강아지를 만들 수 있고 강아지 종류도 세부적으로 만들 수 있는것처럼 이해하면 된다.


// 동물 전체에 대한 클래스를 만들어보자

class Animal {
  constructor(name) {
    this._name = name;
  }

  speak() {
    console.log(`${this._name}의 says!`);
  }
}

class Dog extends Animal {
  // 상속받을 땐 Constructor, methods를 기본적으로 상속받아서 냅둬도댐 근데 speak는 재정의 가능
  // overriding : 부모로부터 내려받은 메서드를 재정의할 수 있음
  speak() {
    console.log(`${this._name}의 왉왈뢁!`);
  }
}

const me = new Animal('민규');
const maru = new Dog('마루');
me.speak();
maru.speak();