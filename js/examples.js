"use strict";

const array0 = [10, 7, 0, 15, 26, 965, 13, 0, 152];

function evenIndex(currentItem, index, array) {
  if (index % 2 === 0) {
    console.log(`value in ${index} even index is ${currentItem} `);
    // console.log("object :>> ", index);
  }
}
array0.forEach(evenIndex);
// console.log(array0.forEach(evenIndex));
//index%2===0ести элементы с четными индексами.

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).

function evenItems(currentItem) {
  if (currentItem % 2 === 0) {
    console.log(`Even item from array: ${currentItem}`);
  }
}
array0.forEach(evenItems);

// 5 Вывести индексы нулевых элементов (элемент равен нулю).

function zeroElements(currentItem, index) {
  if (currentItem === 0) {
    console.log(`Zero elements are in: ${index} box`);
  }
}

array0.forEach(zeroElements);
// 6 Подсчитать количество нулевых элементов.
// 1 sample
let counter = 0;
function countZero(currentItem) {
  if (currentItem === 0) {
    counter++;
    // console.log("counter :>> ", counter);
  }
}
array0.forEach(countZero);
console.log("counter :>> ", counter);

// 2 sample
console.log(
  `${
    array0.filter((currentItem) => currentItem === 0).length
  } zero elements in array`
);

// let count = 0;
// for

// // Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).
const array1 = [-1, 5, 0, 9, -10, 5, 9];

// 1 способ
const newArray1 = array1.filter(function (positiveItems) {
  return positiveItems > 0;
});

console.log("New array with positive numbers :>> ", newArray1);
// 2 способ
console.log(
  `New array with positive numbers second var:>>  ${array1.filter(
    (item) => item > 1
  )}`
);

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

const array8 = [-1, 5, 0, 9, -10];
// 1 метод
const newArray8 = array8.map(function (squareArray) {
  return squareArray * squareArray;
});
console.log("New array in 2 degree 1-st method :>> ", newArray8);

// 2 метод
console.log(
  `New array in 2 degree 2-nd method ${array8.map((item) => item * item)}`
);

// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
const mixedArray = [1, 6, "some text", 8, 96, -698, 35];

function isPositiveNumber(currentItem) {
  return currentItem > 0;
}
console.log(
  `В данном массиве mixedArray  только числа: ${mixedArray.every(
    isPositiveNumber
  )}`
); //ниями, отрабаотывает как с числами так и с текстовыми значениями, но чувствую в return currentItem > 0 нужно как-то тип задавать...

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
function isNegativeNumber(currentItem) {
  return currentItem < 0;
}
console.log(
  `В данном массиве mixedArray присутвует хотя бы один отрицательный элемент: ${mixedArray.some(
    isNegativeNumber
  )}`
);

// 11 Вывести элементы массива, возведенные в куб.
const cubeMixedArray = mixedArray.map(function (cubeElements) {
  return Math.pow(cubeElements, 3);
});

console.log("cubeMixedArray :>> ", cubeMixedArray);
