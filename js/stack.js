class Node {
  constructor(data, next) {
    this._data = data;
    this._next = next;
  }
}

class Stack {
  constructor(maxSize) {
    this._maxSize = 30;
    this._size = 0;
    this._top = null; //объявили, что он пустой
  }
  push(value) {
    if (this._size === this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  pop() {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }
  }
  get peek() {
    return this._top?._data;
  }
  get isEmpty() {
    return this._size === 0;
  }
}

const stack1 = new Stack(10);

// stack1.push(1);
// stack1.push(2);
// console.log("stack1.pop() :>> ", stack1.pop());
// console.log("stack1.peek :>> ", stack1.peek);
// console.log("stack1.pop() :>> ", stack1.pop());
// console.log'use("stack1.peek :>> ", stack1.peek);

// Является ли строка правильной скобочной последовательностью () - ок, (( - не ок, (()-не ок

function checkBracketSequence(string) {
  const brackerStack = new Stack();
  for (const s of string) {
    if (s === "(") {
      brackerStack.push(s);
      continue;
    }
    if (s === ")") {
      if (brackerStack.isEmpty) {
        return false;
      }
      brackerStack.pop();
    }
  }
  return brackerStack.isEmpty;
}

console.log(
  "checkBracketSequence :>> ",
  checkBracketSequence("jvgkujv(gk))))")
);
