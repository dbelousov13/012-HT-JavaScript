"use strict";

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const a = counter();
