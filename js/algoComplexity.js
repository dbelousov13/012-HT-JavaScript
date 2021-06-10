const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const value = 4;
function search(value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log("search(0) :>> ", search(10));

function multTable(n) {
  //0(n**2)- квадратичная, потому что прошелся два раза по всем
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}
// multTable(9);

//O(exponent) - by time
//O(1)- by memory

function powLoop(base, exponent) {
  //линейная зависимость по экспоненте
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
// console.log("powLoop() :>> ", powLoop(2, 3));

// O(exponent) - по времени
//O(exponent) - по памяти
function powRecursion(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * powRecursion(base, exponent - 1);
}

// console.log("powRecursion(2,10) :>> ", powRecursion(2, 10));

//O(log n)

//неупорядоченный массив
// [0, 5, 8, 6, 2, 4, 5, 6, 8, 5, 6, 2, 4, 5, 6, 8, 6, 1, 5555]
//упорядоченный массив - можно делить пополам для поиска элемента, например надо 10 и сразу получаем
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//                     [7, 8, 9, 10, 11, 12]
//                             [ 10, 11, 12]

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  do {
    let middle = Math.ceil((start + end) / 2);
    if (value === arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      end = middle - 1;
    }
    if (value > arr[middle]) {
      start = middle + 1;
    }
  } while (start <= end);
  return -1;
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("binarySearch() :>> ", binarySearch(arr1, 0));
