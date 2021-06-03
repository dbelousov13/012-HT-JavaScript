"use strict";

// Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// Пояснения:
// - внешняя функция addNum(n) имеет параметр n
// - возвращаемая из addNum функция имеет параметр m
// - пример использования:
// const add = addNum(5);
// const result = add(10); // => 15

function addNum(n) {
  return function add(m) {
    return n + m;
  };
}
const add = addNum(5);
const rezult = add(10);

console.log("object :>> ", rezult);
