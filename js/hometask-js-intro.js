// Таски на переменные:
console.log(
  "1 Создайте две переменные a и b. Выведите в консоль результ их умножения."
);

let VarA = 13;
let VarB = 2;
console.log("VarA=", VarA);
console.log("VarB=", VarB);
console.log("VarA*VarB = ", VarA * VarB);

console.log(
  "2 Создайте две переменные c и d. Выведите в консоль результат деления."
);
let VarC = 25;
let VarD = 2;
console.log("VarC=", VarC);
console.log("VarD=", VarD);
console.log("VarC/VarD = ", VarC / VarD);

console.log(
  "3) Создайте две переменные e и f. Выведите в консоль результат сложения."
);
let VarE = 1;
let VarF = 2;
console.log("VarE=", VarE);
console.log("VarF=", VarF);
console.log("VarE+VarF = ", VarE + VarF);

console.log(
  "4) Определите переменные со значениями 11, true, 'java script', '100' и выведите их в консоль"
);
let firstVar = 11;
let secondVar = "true";
let thirdVar = "java script";
let fourthVar = "100";

console.log(firstVar, secondVar, thirdVar, fourthVar);

console.log(
  "5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --"
);
let num = 1;
console.log("let num = 1");
console.log("num = num + 11=", (num += 11));
console.log("num = num - 11", (num -= 11));
console.log("num = num * 11", (num *= 11));
console.log("num = num / 11", (num /= 11));
console.log("num = num + 1", ++num);
console.log("num = num - 1", --num);

// /******************************************************************/
console.log("Таски на prompt:");
console.log(
  "1) Запросить число у пользователя, возвести его в квадрат и вывести"
);

let userNumber = prompt("Input your number");
alert("Your number is:" + Math.pow(userNumber, 2));

console.log(
  "2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя."
);
let userNumber2 = prompt(
  "Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя. \n\nInput first number"
);

let userNumber3 = prompt(
  "Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя. \n\nInput second number"
);
alert(
  "Среднее арифметическое от " +
    String(userNumber2) +
    " и " +
    String(userNumber3) +
    " = " +
    (Number(userNumber2) + Number(userNumber3)) / 2
);

// 3) Перевести число минут в секунды. Число спрашивать у пользователя.

let minutes = prompt(
  "Перевести число минут в секунды. Число спрашивать у пользователя. \n\n Input minutes:"
);
alert("It will be " + Number(minutes) * 60 + " seconds");

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

let greeting = "Hello, ";
let userName = prompt("What is your name?");
alert(greeting + userName + "!");

// /******************************************************************/
// Таски на условия:
// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

let userVar = prompt(
  "Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'. \n\nInput your number"
);
if (userVar == +10) alert("You are right");
else alert("Sorry, you missed");

// 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.

// let test = prompt(
// "Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. \n\nInput variable TEST"
// );
// if (test==)

// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

let purchaseCost = prompt(
  "Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер. \n\nInput cost:"
);
if (Number(purchaseCost) <= 499)
  alert("You have no discount \n\nYour price is " + purchaseCost);
if (500 <= Number(purchaseCost) && Number(purchaseCost) <= 800)
  alert(
    "Your discount is 3% \n\nYour price is : " +
      Number(purchaseCost - purchaseCost * 0.03)
  );

if (Number(purchaseCost) > 800)
  alert(
    "Your discount is 5% \n\nYour price is : " +
      Number(purchaseCost - purchaseCost * 0.05)
  );

// /******************************************************************/
// Таски на циклы. Каждую задачу решить всеми тремя циклами!
console.log("1) Вывод чисел от 25 до 0 (порядок уменьшения)\n\nWHILE");

let startNumber = 25;
while (startNumber > -1) console.log(startNumber--);

console.log("1) Вывод чисел от 25 до 0 (порядок уменьшения)\nFOR");

startNumber = 25;
for (startNumber; startNumber > -1; startNumber--) console.log(startNumber);

console.log("1) Вывод чисел от 25 до 0 (порядок уменьшения)\nDO WHILE");
startNumber = 25;
do {
  console.log(startNumber--);
} while (startNumber > -1);

//NO ANSWER
console.log("2) Вывод чисел от 10 до 50, которые кратны 5 \n\nWHILE");

// 3) Найти сумму чисел в пределах от 1 до 100.

// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// /******************************************************************/
