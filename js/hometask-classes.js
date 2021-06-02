"use srtict";
// 1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для неограниченного числа аргументов.
"use strict";

class MyArrayC {
  constructor(firstItem, secondItem, thirdItem) {
    if (!new.target) {
      return new MyArrayC();
    }

    this.firstItem = firstItem;
    this.secondItem = secondItem;
    this.thirdItem = thirdItem;
  }
}

const arrC = new MyArrayC("fitrr", "oefh", 4);

console.log(arrC);

// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    if (this.from >= this.to) {
      throw new RangeError("From must be less then to ");
    }
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("from must be number");
    }
    this._from = value;
  }
  get from() {
    return this._from;
  }
  set to(value) {
    {
      if (typeof value !== "number") {
        throw new TypeError("to must be number");
      }
      this._to = value;
    }
  }
  get to() {
    return this._to;
  }
  getterRange() {
    const array = [this.from, this.to];
    return Array.from(array);
  }

  validator() {
    const validationNumber = prompt("Input your number");
    if (typeof validationNumber !== "number") {
      throw new TypeError("from must be number");
    }
    return this.from <= validationNumber && validationNumber <= this.to;
  }
}

const range1 = new RangeValidator(4, 100);
console.log("getterRange() :>> ", range1.getterRange());
console.log("range1.validator() :>> ", range1.validator());
