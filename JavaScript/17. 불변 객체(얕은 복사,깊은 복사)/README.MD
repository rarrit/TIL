# JavaScript의 얕은 복사, 깊은 복사

## 공부 링크
[TIL - JavaScript의 얕은 복사, 깊은 복사](https://rarrit.github.io/til/js/js-copy/)

## 목차
### 객체의 불변성을 유지, 변경 방법에 대해 알아보자!
1. 얕은 복사
  - 1차 속성이란?
  - 문법
    - for-in문을 사용한 얕은 복사
    - spread 연산자를 사용한 얕은 복사
2. 깊은 복사
  - 사용 이유
  - 문법
    - 기존 얕은 복사 후 안쪽 객체까지 다시 얕은 복사 실행
    - JSON.parse(JSON.stringify(original))
5. 마무리
