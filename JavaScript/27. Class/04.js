// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)


class Rectangle {
  constructor(width, height) {
    // underscore : private (은밀하고, 감춰야 할 때)
    this._width = width;
    this._height = height;
  }
  // width를 위한 getter
  get width() {
    return this._width;
  }
  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류 발생
    if (value < 0) {
      console.log('[error] 가로 길이는 0보다 커야 합니다.')
    } else if (typeof value !== 'number') {
      console.log('[error] 가로 길이로 입력된 값이 숫자가 아닙니다.')
    }
    this._width = value;
  }
  // height를 위한 getter
  get height() {
    return this._height;
  }
  // height를 위한 setter
  set height(value) {
    // 검증 1 : value가 음수이면 오류 발생
    if (value < 0) {
      console.log('[error] 세로 길이는 0보다 커야 합니다.')
    } else if (typeof value !== 'number') {
      console.log('[error] 세로 길이로 입력된 값이 숫자가 아닙니다.')
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`이 사각형의 넓이는 ${a} 입니다.`)
  }

}

const rect1 = new Rectangle(10, 20);
rect1.getArea(); // 이 사각형의 넓이는 200입니다.
const rect2 = new Rectangle(10, 30);
const rect3 = new Rectangle(15, 20);
