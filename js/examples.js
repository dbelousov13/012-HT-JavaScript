"use strict";

// function isPalindrome(checkSAtring) {

// }

// function Palindrome(inputPalindrom) {
//   if (inputPalindrom.length == 1) {
//     return true;
//   } else {
//     var i = 0;
//     var j = inputPalindrom.length - 1;
//     while (i < j) {
//       if (inputPalindrom[i] != inputPalindrom[j]) {
//         return false;
//       }
//       i++;
//       j--;
//     }
//   }
//   return true;
// }

// Palindrome("a");
class Stack {
  constructor(maxSize =50) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }


function isPalindrom(string) {
  const firstPart = new Stack();
  for (letter of string) {
    firstPart.push(letter);
    return firstPart;
  }
}

isPalindrom("tenet");


