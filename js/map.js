"use strict";

const map1 = new Map();

map1.set("key1", "val1");
console.log("map1.get(key1) :>> ", map1.get("key1"));

const vocabulary = new Map();
vocabulary.set("cat", "кошка");
vocabulary.set("dog", "собака");
console.log("vocabulary.get('old cat') :>> ", vocabulary.get("cat"));
vocabulary.set("cat", "кот");
vocabulary.set("run", "бегать");

const engStr = "dog run cat"; // => "собака бегает кошка"
console.log("translator(engStr) :>> ", Translator(engStr));

// function translator(str) {
//   const engWords = engStr.split(" ");
//   // console.log("engWords :>> ", engWords);
//   const rusWords = engWords.map(item => vocabulary.get(item));
//   // console.log("rusWords :>> ", rusWords);
//   const rusStr = rusWords.join(" ");
//   // console.log("rusStr :>> ", rusStr);
//   return rusStr;
// }

const Translator = str =>
  str
    .split(" ")
    .map(item => vocabulary.get(item))
    .join("");

/*
 *
 * **
 *
 *
 */
// console.log("vocabulary.get('new cat') :>> ", vocabulary.get("cat"));
// console.log("vocabulary.get('dog') :>> ", vocabulary.get("dog"));

// console.log("vocabulary.has('cat') :>> ", vocabulary.has("cat"));
// console.log("vocabulary.has('pig') :>> ", vocabulary.has("pig"));

// const adress = new Map();
// adress.set("Testovich", "Soborniy av.");
// adress.set("Testovich2", "Pobedy str.");
// adress.set("Gagarin", "Kosmichna str.");
// adress.set("Schevchenko", "Tarasova str.");

// console.log('adress.get("Testovich") :>> ', adress.get("Testovich"));
// console.log('adress.has("Gagarin1") :>> ', adress.has("Gagarin1"));

// console.log("adress before delete :>", adress);
// adress.delete("Testovich2");

// console.log("adress after delete :>", adress);

// // adress.clear();
// console.log("adress after clear :>", adress);

// for (const imia_liuboe of adress) {
//   console.log("imia_liuboe :>> ", imia_liuboe);
// }

// // не работает для итерируемого объекта
// // const obj = {
// //   name: "Ira",
// //   age: 20,
// // };

// // for (const tekElKolekcii of obj) {
// //   //   console.log("tekElKolekcii :>> ", tekElKolekcii);
// // }

// for (const znachenia of adress.keys()) {
//   console.log("znachenia :>> ", znachenia);
// }

// for (const znachenia2 of adress.values()) {
//   console.log("znachenia :>> ", znachenia2);
// }
// console.log("adress.values(); :>> ", adress.values());

// // const s = new String("Мама мыла раму");
// // for (const char of s.keys()) {
// //   console.log("s :>> ", char);
// // }

// const arrForMap = [
//   [1, "oehro"],
//   [function () {}, {}],
// ];
// const map3 = new Map(arrForMap);

// // Итератор

// const kyeIterator = adress.keys();
// console.log("kyeIterator :>> ", kyeIterator);

// console.log(kyeIterator.next());
// console.log(kyeIterator.next());
// console.log(kyeIterator.next());
// console.log(kyeIterator.next());

// const arr7 = [1, 2, 4, 6, 34];
// const arr7Iterator = arr7[Symbol.iterator]();

// console.log(arr7Iterator.next());
// console.log(arr7Iterator.next());
// console.log(arr7Iterator.next());
// console.log(arr7Iterator.next());
// console.log(arr7Iterator.next());
// console.log(arr7Iterator.next());

// // [1,5] => 1 2 3 4 5
// // [10,13] => 10 11 12 13
// class Range {
//   constructor(from, to) {
//     (this._from = from), (this._to = to);
//   }
//   [Symbol.iterator]() {
//     let currentValue = this._from; //начальное значение, которое хранит накапливаемые значения
//     return {
//       next: () => {
//         if (currentValue > this._to) {
//           return {
//             value: undefined,
//             done: true,
//           };
//         }
//         return {
//           value: currentValue++,
//           done: false,
//         };
//       },
//     };
//   }
// }
// const range1 = new Range(1, 5);
// for (const item of range1) {
//   console.log("item from symbol iterator :>> ", item);
// }

// const arr8 = [...arr7];

// const arr009 = [1, 2, 3, 4, 5, 6];
// const arr013 = [9, 8, 7, 6, 5, 4];
// // соединили два массива 009 и 013
// const arr14 = [...arr009, ...arr013];

// function forEachCallBack(
//   value,
//   key,
//   map
// ) /*(значение, ключ, весь массив мап) */ {
//   console.log("value :>> ", value);
//   console.log("key :>> ", key);
// }
// adress.forEach(forEachCallBack);
