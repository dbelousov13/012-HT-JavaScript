"use strict";

const myFirstObj = {};
myFirstObj.prop = 43;
console.dir("myFirstObj :>> ", myFirstObj);
myFirstObj.prop = "second prop";
console.log("myFirstObj second prop:>> ", myFirstObj);

const myObject = [1, 4, 5, 7, 3, "oi"];

// Object.defineProperty(myFirstObj);

for (const index in myObject) {
  console.log("index :>> ", index);
}

function sayHello() {
  return setTimeout(() => alert("Hello"), 0);
}
clearTimeout(sayHello());
