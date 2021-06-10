"use strict";

function isPalindrom(phrase) {
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < phrase.length / 2; i++) {
    stack1.push(phrase[i]);
    stack2.push(phrase[phrase.length - i - 1]);
  }

  for (let j = 0; j < phrase.length / 2; j++) {
    if (stack1[j] != stack2[j]) {
      return false;
    } else stack1.pop(j);
    stack2.pop(j);
    return true;
  }
}

console.log("Your phrase is ", isPalindrom("tenet"));
console.log("Your phrase is ", isPalindrom("enot"));
