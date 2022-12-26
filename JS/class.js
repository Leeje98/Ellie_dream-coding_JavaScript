"use strict";
// Object-oriendted programming
// class: template   - 클래스는 템플릿과 같은 것이다
// object: instance of a class  - 클래스(템플릿)에 내용을 넣은것이 오브젝트가 된다
// JavaScript classes
//  - introduced in ES6  - ES6에 추가된 내용
//  - syntactical sugar over prototype-based inheritance

//  1. Class declarations.
class Person {
  // Person라는 클래스 생성
  // constructor
  constructor(name, age) {
    // constructor: 생성자
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
    // this : 생성된 오브젝트
  }
} // class 정의

const ellie = new Person("ellie", 20); // 새로운 오브젝트 생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // getter : 가지고 온다 (획득자)
    return this._age;
  }

  set age(value) {
    // setter : 설정한다 (설정자)
    // if (value < 0) {
    //   throw Error('age can not be negetive')   // 2. 그렇기에 값이 0보다 작다면 오류를 출력한다
    // }
    this._age = value < 0 ? 0 : value; // 3. 오류 대신 값이 마이너스라면 0을 출력한다고 설정
  }
}
// _age : 겟터와 셋터안에 들어가는 변수는 다르게 줘야 한다

const user1 = new User("Steve", "Job", -1);
// 1. -1 : 사람의 나이는 음수가 될수 없다
console.log(user1.age);

// 3. Fields (public, private)   // 정~말 최신에 나온 문법이라 사용하기엔 아직 이르다
// Too soon!
//
class Experiment {
  publicField = 2; // 클래스 외부에서 접근 가능
  #privateField = 0; // 해시기호를 붙히게 되면 클래스 내부에서만 접근 가능, 값이 보여지고 변경가능 - 클래스 외부에선 값을 읽을수도, 변경할수도 없다
}
const experiment = new Experiment();
console.log(Experiment.publicField);
console.log(Experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumder) {
    this.articleNumder = articleNumder;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 이렇게 하면 출력되지않음 (undefined 로 나옴)
console.log(Article.publisher); // 오브젝트마다 붙어있는 것이 아닌 클래스 자체에 있는 것이기때문에 클래스를 조회해야 한다
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `Triangle: color ${this.color}`
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log('🔺')  // 1. draw 함수를 이렇게 재정의하게 되면 새로 정의한 함수내용만 출력된다
    super.draw();       // 2. 이럴때 super함수를 쓰면 원래의 함수(부모함수)를 그대로 가져와 쓸 수 있다
  }
  getArea() {
    return (this.width * this.height) / 2;
  }                     // 이렇게 getArea를 그대로 가져와 내가 원하는 대로 수정해서 사용할 수 있다
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea())




// 6. Class checking: instanceOf  // 왼쪽의 오브젝트가 오른쪽의 클래스의 인스턴스 인지 아닌지 확인 => true 또는 false반환
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());