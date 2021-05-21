"use strict";
// const arr3 = [10, 20, 30, 40, 50];
// let x = 0;
// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//   console.log("i :>> ", i);
//   console.log("i=i+i :>> ", (i = i + i));
//   x = x + arr3[i];
//   sum += arr3[i];
// }
// console.log("x :>> ", x);
// console.log("sum :>> ", sum);

// const myArray = {
//   0: 1,
//   1: true,
//   2: 3,
//   3: 4,
//   4: 5,
//   length: 5,
//   pop() {
//     if (this.length === 0) {
//       return;
//     }
//     const lastItem = this[this.length - 1];
//     delete this[--this.length];
//     return lastItem;
//   },
//   push(item) {
//     this[this.length] = item;
//     return ++this.length;
//   },
//   shift() {
//     if (this.length === 0) {
//       return;
//     }
//     const fistItem = this[0];
//     for (let i = 0; i < this.length - 1; i++) {
//       this[i] = this[i + 1];
//     }
//     delete this[--this.length];
//     return fistItem;
//   },
// };

// const myArray2 = {
//   0: 2,
//   1: 3,
//   length: 2,
// };

// console.log("myArray2[1] :>> ", myArray2[1]);
// myArray2.pop = myArray.pop;
// myArray2.push = myArray.push;
// myArray2.shift = myArray.shift;

// const slovo = "Mister";
// const fromArray = prompt();
// function sayHello(vizov, fraza, slovo, fromArray) {
//   if (typeof vizov === "function") {
//     vizov(fraza, slovo, fromArray);
//   }
// }

// sayHello(console.log, "Hello, Jack!", slovo, fromArray);
// sayHello(alert, "Hello, Jack!", slovo);
// sayHello(console.log, "Hello, Smith!", slovo);

const arr4 = [1, 2, 3, 4, 5];

arr4.forEach(pokazZnachenii);

function pokazZnachenii(TekuschiiElement, indexElementa, massiv) {
  console.log(`array[${indexElementa}] = ${TekuschiiElement} ${massiv}`);
}

const arr5 = [{}, {}, {}, {}];

arr5.forEach(functionCallBackDliaForEach);

function functionCallBackDliaForEach(
  TekuschiiElement5,
  indexElementa5,
  massiv5
) {
  TekuschiiElement5.property = "добавлено новое свойство в объектках";
  TekuschiiElement5.property2 = "svoistvo 2";
}
// проверка на четность
const arr6 = [2, 5, 4, 3, 7];
arr6.some(functionDliaProverki);
function functionDliaProverki(item, index, arr) {
  // item,index, arr - могут называться по любому. Означают Значенние элемента, номер элемента в массиве, весь массив. можно index, arr не писать, они не используются в данном случае
  return item % 2 === 0; //из этого вернется или true или false
}

console.log("есть ли четные " + arr6.some(functionDliaProverki));

console.log(
  "arr6.every(functionDliaProverki) :>> ",
  arr6.every(functionDliaProverki)
);

function isOdd(item1, index) {
  console.log(`item1 = ${item1} index ${index}`);
  return item1 % 2 === 0;
}

console.log("arr6.every(isOdd) :>> ", arr6.every(isOdd));
