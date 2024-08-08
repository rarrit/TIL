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

// 아래 부분이 상속에 관련된 코드에요!
class ElectronicCar extends Car {
  constructor(modelName, modelYear, price) {
    // Car에 있는 constructor를 통해 자동차를 만들었어요!
    super(modelName, modelYear, "e", price);
  }
}

const eleCar1 = new ElectronicCar("뉴아이오닉5", "2023", 7000);
console.log(eleCar1.getModelName());