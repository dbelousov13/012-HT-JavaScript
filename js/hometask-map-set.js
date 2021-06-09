"use strict";

// Map
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
const arr1 = ["first", 1];
const arr2 = ["second", 2];
const arr3 = [3, 5]; //* сделал для лучшего понимания

const m = new Map([arr1, arr2, arr3]);

console.log("m :>> ", m);

// Получите список ключей и значений отдельно.
for (const key of m.keys()) {
  console.log("key :>> ", key);
}

for (const value of m.values()) {
  console.log("value :>> ", value);
}

const divider = [...m.entries()];
console.log("divider :>> ", divider);

const newDivider = new Map(divider);
console.log("newDivider :>> ", newDivider);

// Получите текущее количество элементов.
console.log("m.size :>> ", m.size);

// Добавьте и удалите элемент
m.set("third", "element");
console.log("Добавьте элемент:>> ", m);
m.delete(3);
console.log("Удалите элемент:>> ", m);

// Произведите поиск по ключу

console.log("Map has 3", m.has("third"));
// Set

// Создайте коллекцию Set с начальными значениями 1,2,3.

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(
  "Создайте коллекцию Set с начальными значениями 1,2,3. :>> ",
  mySet
);
// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log("mySet.has(3) :>> ", mySet.has(3)); // Добавите еще несколько элементов.
mySet.add(13);
mySet.add(99);
// С помощью цикла for-of переберите ее значения и выведите в консоль.
for (let value of mySet) {
  value;
  console.log(value);
}

// Найдите сумму этих значений.
let sum = 0;
for (let value of mySet) {
  sum += value;
}
console.log(`Sum= ${sum}`);

// Удалите элемент 2.
mySet.delete(2);

// Очистите всю коллекцию.
mySet.clear();
