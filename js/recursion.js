"use strict";
// function f() {
//   f();
// }
// 1!=1

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// debugger;
console.log("factorial :>> ", factorial(10));

function numberLogger(n) {
  if (n === 0) {
    return;
  }

  numberLogger(n - 1);
  console.log(n);
}
// debugger;
numberLogger(10);

function bracketWrapper(n) {
  if (n === 1) {
    return "()";
  }
  return `(${bracketWrapper(n - 1)})`;
}

console.log("bracketWrapper(5) :>> ", bracketWrapper(5));
