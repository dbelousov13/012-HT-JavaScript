"use strict";

// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

// let isBoss = confirm("Ты здесь главный?");

// alert(isBoss); // true, если нажата OK

// function binarySearch(arr, value) {
//   let start = 0;
//   let end = 100;
//   do {
//     let middle = Math.ceil((start + end) / 2);
//     if (confirm(`Your number is less than ${middle}`)) {
//       end = middle;
//         middle = (start + end) / 2; {
//             if (confirm(`Your number is less than ${middle}`){

//          };
//         }
//     } else {
//         end = end + middle;
//         middle =

//       }

//       if (value === arr[middle]) {
//       return middle;
//     }
//     if (value < arr[middle]) {
//       end = middle - 1;
//     }
//     if (value > arr[middle]) {
//       start = middle + 1;
//     }
//   } while (start <= end);
//   return -1;
// }
// const arr1 = [0, 1, 2, 3, 4, 5, 6, 1000, 8, 9];
// console.log("binarySearch(arr1, 6) :>> ", binarySearch(arr1, 7));

let start = 0;
let result = [];
while (start <= 100) {
  result.push(start++);
}
