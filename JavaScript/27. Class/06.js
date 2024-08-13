// 상속 extends를 사용하여 전기차를 만들어보자!
// super 공부해야함!

// 새로운 Car class 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 모델명 출력하는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }

  // getters
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getPrice() {
    return this.price;
  }

  // 새로운 가격 반영
  setPrice(newPrice) {
    this.price = newPrice;
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();

console.log(car1.getModelName());
console.log(car1.getModelYear());
console.log(car1.getPrice());

// 가격변동
car1.setPrice(6000);
console.log(car1.getPrice());

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car에 있는 constructor를 통해 자동차를 만들었어요!
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  // 전기자동차의 특수 기능 : 충전
  setChargeTime(time) {
    this.chargeTime = time;
  }

  getChargeTime() {
    return this.chargeTime;
  }
}

const eleCar1 = new ElectronicCar("뉴아이오닉5", "2023", 7000, 60);
console.log(eleCar1.getModelName()); // 추가
console.log(eleCar1.getChargeTime()); // 추가
eleCar1.setChargeTime(10); // 추가
console.log(eleCar1.getChargeTime()); // 추가