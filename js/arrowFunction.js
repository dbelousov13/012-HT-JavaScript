"use strict";

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const factorial2 = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(item => item % 2 === 0);

const b = 3;
const mathNumber = b => Math.pow(b, 2);
console.log(`${mathNumber}`);
