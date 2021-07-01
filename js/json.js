"use strict";
const obj = {
  length: 15,
  isMale: true,
  getLength() {
    return this.length;
  },
};

const serializedObj = JSON.stringify(obj); //сериализация
const deserializedObj = JSON.parse(serializedObj); //десериализация

const taskObject = {
  name: "Zelenskiy",
  surname: "Volodymyr",
  isMale: true,
  phone: undefined,
  birth: 1982,
  fullName() {
    return this.name + this.surname;
  },
  SymbolValue: Symbol("symbol"),
  massive: [2, "opk", 54],
  something: {
    one: 1,
    two: 2,
  },
};

const serTask = JSON.stringify(taskObject);
console.log(serTask);

const deserTask = JSON.parse(serTask);
console.log(deserTask);
