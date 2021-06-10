"use strict";

function MyArray() {
  if (!new.target) {
    return new MyArray();
  }
  this.lenth = 0;
}
const myArrayProto = new MyArray();

myArrayProto.pop = function () {
  if (this.length === 0) {
    return;
  }
  const lastItem = this[this.length - 1];
  delete this[--this.length];
  return lastItem;
};
myArrayProto.push = function () {
  this[this.length] = item;
  return ++this.length;
};

myArrayProto.shift = function () {
  if (this.length === 0) {
    return;
  }
  const firstItem = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  delete this[--this.length];
  return firstItem;
};
MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();
