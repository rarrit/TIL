// 생성자 함수 내부에서의 this
//  - 1. 생성자 : 구체적인 인스턴스(어려우면 객체로 이해!)를 만들기 위한 일종의 틀
//  - 2. 공통 속성들이 이미 준비돼 있어요.
//  - function(name, age){}
var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
};

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi