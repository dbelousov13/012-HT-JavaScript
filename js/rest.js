"use strict";

//arguments
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
// debugger;
console.log("sum(1, 2, 3, 4) :>> ", sum(1, 2, 3, 4));
