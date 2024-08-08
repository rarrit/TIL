/*
  ## 기본개념 잡기 | 클래스라는 설계도를 만들어 보자!
  클래스는 객체를 만들 때 반드시 필요한 필수 요소가 있어야함. => constructor
  - Constructor는 Class의 생성자 함수.
  - 생성자 함수는 객체를 생성할 때 호출되며, 객체를 초기화하는 역할을 한다. 
  - constructor 키워드를 사용하여 정의함.
*/


class Person {
  // 우리는 사람이기에 필수 요소를 2개를 넣어본다.
  // name, age
  constructor(name, age) {
    // this 는 우리가 만들 인스턴스임
    this.name = name;
    this.age = age;
  }

  // 정적 메서드 : 찍어내지 않아도 사용 가능함
  // static tell();

  // 메서드 형태로 동사 표현 (인스턴스 메서드 : 찍어내야 사용함)
  sayHello() {
    console.log(this.name + " hello");
  }
  sayAge() {
    console.log(`${this.name}의 나이는 ${this.age} 입니다.`);
  }
}

// 설계도를 통해 인스턴스를(실제 사물) 만들어보자.
const person1 = new Person("김민규", "30");
const person2 = new Person("김태균", "29");

person1.sayHello(); // "김민규 hello"
person2.sayHello(); // "김태균 hello"

person1.sayAge(); // "김민규의 나이는 30살 입니다."
person2.sayAge(); // "김태균의 나이는 29살 입니다."


// Person.tell(); => Promise.all(); 과 같은 사용성임