"use strict";
// function User(name, surname, age) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
// }
// const userProto = new User();

// userProto.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype = userProto;
// const user1 = new User("Vasia", "Testovich", 30);

// console.dir(user1);
// console.log("user1.getFullName :>> ", user1.getFullName());

// /*************** Классовый синтаксис*/

// class UserClass {
//   constructor(name, surname, age) {
//     /*можно называть name, surname, age имена как угодно */

//     this.firstName = name;
//     this.lastName = surname;

//     this.age = age;
//   }

//   /* логика для конструктора классового синтаксиса*/

//   getFullName() {
//     return `${this.firstName} ${this.lastName} ${this.age}`;
//   }
//   set age(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Age should be NUMBER");
//     }
//     if (value < 0 || value > 130) {
//       throw new RangeError("Age between 0 and 130");
//     }
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
// }

// try {
//   const user2 = new UserClass("ClassVasia", "ClassTestovich", 30);
//   console.dir(user2);
//   user2.age = 100;
//   console.log("user2.getFullName :>> ", user2.getFullName());

//   console.log("user2.age :>> ", user2.age);
// } catch (e) {
//   console.error(e);
// }

// /* описать машину*/

// class Fuel {
//   constructor(weight) {
//     this.weight = weight;
//   }
// }

// class Cars {
//   constructor(brand1, model2, year, weightcar, fuel1) {
//     this.brand = brand1;
//     this.model = model2;
//     this.year = year;
//     this.weight = weightcar;
//     this.fuel = fuel1;
//   }

//   getCarInfo() {
//     return `${this.brand} ${this.year} ${this.model} ${this.weight}`;
//   }
//   set year(yearValue) {
//     if (typeof yearValue !== "number") {
//       throw new TypeError("Year must be number");
//     }
//     if (yearValue < 1886 || yearValue > 2021) {
//       throw new RangeError("year between 1886 and 2021");
//     }
//     this._year = yearValue;
//   }
//   get year() {
//     return this._year;
//   }

//   static isCar(someCar) {
//     return someCar instanceof Cars;
//   }

//   getFullWeight() {
//     return this.weight + this.fuel.weight;
//   }
// }

// const car5 = new Cars("wefwe", "wdfw", 1999, 2000);
// console.log("isCar :>> ", isCar);
// const car1 = new Cars("Tesla", "model S", 2500, 2000, new Fuel(45));
// console.dir(car1.getCarInfo());
// console.log("car1.getFullWeight() :>> ", car1.getFullWeight());

//Наследование

class User {
  // базовый класс / родитель
  constructor(name, surname, age, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.email = email;
    this.isBanned = isBanned;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set age(v) {
    // валидация
    this._age = v;
  }
  get age() {
    return this._age;
  }
}

//Moderator = User+properties/methods

class Moderator extends User {
  // дочерний класс/потомок
  constructor(name, surname, age, email, permission = true) {
    super(name, surname, age, email); // вызов конструктора базового класса
    this.permission = permission;
  }
  sendMessage(user, message) {
    //sending message
    console.log(`Message from MODERATOR`);
  }
}

// Administrator = Moderator + ban(User)

class Administrator extends Moderator {
  constructor(name, surname, age, email, permission) {
    super(name, surname, age, email, permission);
  }
  ban(user) {
    user.isBanned = true;
  }
  reBan(user) {
    user.isBanned = false;
  }
}

const user1 = new User("name", "surname", 19, "user1@gmail.com");

//Moderator
const moder1 = new Moderator(
  "namem",
  "surnamem",
  23,
  "moder@gmail.com",
  "moder"
);

console.log("moder1 :>> ", moder1.firstName);
const message = { body: "message text" };
moder1.sendMessage(user1, message);
console.log(moder1.getFullName());

//Administrator
const admin1 = new Administrator("adminn", "surnAdmin", 30, "admmail@gmailcom");
admin1.ban(user1);
// console.log(user1);
admin1.reBan(user1);
// console.log(user1);
// console.log(moder1);

/******************************* */

//FlyingSquirrel=>Squirrel

class Squirrel {
  constructor(name) {
    this._name = name;
  }
  eat(food) {
    console.log(`Squirrel m${this.name} is eatting ${food}`);
  }
  run() {
    console.log(`Squirrel ${this.name} is running`);
  }
}

//FlyingSquirrle = Squirrel +fly() +distance

class FlyingSquirrel extends Squirrel {
  constructor(name, distance) {
    super(name);
    this._distance = distance;
  }
  fly() {
    console.log(`Squirrel ${this._name} is flying to ${this._distance} m.`);
  }
  eat() {
    console.log(`Squirrel ${this.name} eat nuts.`);
  }
}

const squir1 = new FlyingSquirrel("sq1-name", 500);

squir1.fly();
squir1.eat();

/********* */

class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {
    return null;
  }
}

class Triangle extends Figure {
  constructor(a, b, c) {
    super("triangle");
    this._a = a;
    this._b = b;
    this._c = c;
  }
  getArea() {
    const p = (this._a + this._b + this._c) / 2;
    return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
  }
}

class Square extends Figure {
  constructor(a) {
    super("square");
    this._a = a;
  }
  getArea() {
    return this._a * this._a;
  }
}

const triangle1 = new Triangle(7, 8, 9);
console.log("triangle1.getArea() :>> ", triangle1.getArea());

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.get.Area();
  }
  throw new TypeError();
}
