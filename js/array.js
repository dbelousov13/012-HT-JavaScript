const arr3 = [10, 20, 30, 40, 50];
let x = 0;
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  //   console.log("i :>> ", i);
  //   console.log("i=i+i :>> ", (i = i + i));
  x = x + arr3[i];
  sum += arr3[i];
}
console.log("x :>> ", x);
console.log("sum :>> ", sum);

const myArray = {
  0: 1,
  1: true,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  },
  push(item) {
    this[this.length] = item;
    return ++this.length;
  },
  shift() {
    if (this.length === 0) {
      return;
    }
    const fistItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return fistItem;
  },
};

const myArray2 = {
  0: 2,
  1: 3,
  length: 2,
};

myArray2.pop = myArray.pop;
myArray2.push = myArray.push;
myArray2.shift = myArray.shift;
