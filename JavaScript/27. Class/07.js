// Static Method (= 정적 메소드)
// Class => 객체를 만들기 위해서 사용함
// 다량으로, 안전하고, 정확하게 
// static !!


class Calculator {
  static add(a, b) {
    console.log(`[계산기] 더하기를 진행합니다.`);
    return a + b;
  }

  static substract(a, b) {
    console.log(`[계산기] 빼기를 진행합니다.`);
    return a - b;
  }
}
Calculator.add(3, 5);
Calculator.substract(3, 5);