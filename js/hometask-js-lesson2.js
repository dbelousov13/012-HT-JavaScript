// ￼Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?

let userNumber = prompt(
  "Таски на условия\n\n1) Делится ли число на 5, или на 3, или на 2 без остатка?\n\n\nInput your number: "
);
if (userNumber % 5 === 0 || userNumber % 3 === 0 || userNumber % 2 === 0) {
  alert("Your number multiples 5 or 3 or 2");
  if (userNumber % 5 === 0) alert("Your number multiples 5");
  if (userNumber % 3 === 0) alert("Your number multiples 3");
  if (userNumber % 2 === 0) alert("Your number multiples 2");
} else {
  alert("Sorry, your number doesn`t multiples 5, 3 or 2 :( ");
}
// почему тут если число делится на 3, но не делится на 2 отрабатывает else?

// Таски на циклы (Only FOR)

// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)
{
  let userFaktorial = prompt(
    "Таски на циклы (Only FOR) \n1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)\n\nInput Faktorial:"
  );
  let rezult = 1;
  for (let i = 1; i <= userFaktorial; i++) {
    console.log("Faktorial= " + (rezult = rezult * i));
  }
}
// 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь

{
  let numberN = prompt(
    "2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь\n\nInput n: "
  );
  let rezult = 0;
  for (let i = 1; i <= numberN; i++) {
    rezult = rezult + 1 / i;
  }
  console.log("Summ= " + rezult);
}

// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).

{
  let lim1 = Number(
    prompt(
      "3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).\n\nInput lim1:"
    )
  );
  let lim2 = Number(
    prompt(
      "3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).\n\nInput lim2:"
    )
  );

  let result = 1;
  for (lim1; lim1 <= lim2; lim1++) {
    result = result * lim1;
  }
  console.log("multiplication is " + result);
}

// Таски на функции
// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// Ожидаемый вывод:
// isAdult(20); // true
// isAdult(4); // false

{
  function isAdult() {
    let userAge = prompt("Input your age");
    if (userAge > 21) console.log("Adult true");
    else console.log("Adult false");
  }
  isAdult();
}

// 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

{
  function checkNumber() {
    let userNumber = prompt("Input number");
    if (userNumber <= 2) alert("Number should be more than 2"); // Тут не получилось сделать break и поставить метку
    let i = 2;
    let squareFromUserNumber = Math.sqrt(userNumber);
    //   alert(squareFromUserNumber);
    squareFromUserNumber = Math.trunc(squareFromUserNumber);
    //   alert(squareFromUserNumber);

    for (i; i <= squareFromUserNumber; i++) {
      console.log("Your number is ordinary", userNumber % i === 1);
      break;
    }
  }

  checkNumber();
}

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

{
  function checkMultiplicity(a, b) {
    return a % b === 0;
  }
  console.log(
    checkMultiplicity((a = prompt("a")), (b = prompt("b"))),
    " = " + a + " / " + b
  );
  console.log("25,5", checkMultiplicity(25, 5));
  console.log("15/3= ", checkMultiplicity(15, 3));
  console.log("15, 5=", checkMultiplicity(15, 5));
  console.log("15, 4= ", checkMultiplicity(15, 4));
}

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

{
  function triangle(a, b, c) {
    return a + b >= c && b + c >= a && c + a >= b;
  }
  //   alert(triangle((a = prompt("a")), (b = prompt("b")), (c = prompt("c"))));
  //   alert(triangle(6, 7, 12));
  console.log("(triangle(4, 5, 10)", triangle(4, 5, 10));
  console.log("(triangle(4, 5, 9)", triangle(4, 5, 9));
  console.log(
    "Triangle with user input numbers",
    triangle(
      Number((a = prompt("a"))),
      Number((b = prompt("b"))),
      Number((c = prompt("c")))
    )
  );
}

// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
console.log("Площадь прямоугольника");
{
  function rectangleArea(a, b) {
    return +a * +b;
  }
  console.log(rectangleArea(10, 15));
}

console.log("Площадь прямоугольника. Function expression");

{
  const rectangleArea = function (a, b) {
    return +a * +b;
  };
  console.log(rectangleArea(20, 40));

  console.log("Площадь треугольника.");
}

{
  function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }

  console.log(triangleArea(4, 5, 8));
}

console.log("Площадь треугольника. Function expression");
{
  const triangleArea = function (a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  };
  console.log(triangleArea(4, 5, 6));
}

console.log("Площадь поверхности конуса. ");
{
  function coneArea(r, l) {
    return Math.PI * r * (r + l);
  }
  console.log(+coneArea(10, 15).toFixed(3));
}

console.log("Площадь поверхности конуса. Function expression");

{
  const coneArea = function (r, l) {
    return Math.PI * r * (r + l);
  };
  console.log(coneArea(10, 20));
}

console.log("Площадь поверхности Параллелепипеда. ");
{
  function parallelepipedArea(a, b, c) {
    return 2 * (a * b + b * c + a * c);
  }
  console.log(+parallelepipedArea(10, 15, 20).toFixed(2));
}

console.log("Площадь поверхности Параллелепипеда. Function expression");

{
  const parallelepipedArea = function (a, b, c) {
    return 2 * (a * b + b * c + a * c);
  };
  console.log(parallelepipedArea(10, 20, 5));
}

// (2 функции на выбор реализовать в формате функционального выражения)

// Таски на объекты
//1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.

const student = {
  name: "Mark",
  surname: "Zukerberg",
  isMale: true,
  adress: "USA, California",
  age: 19,
  fullNameAndFacultet() {
    return this.name + " " + this.surname + ", " + this.facultet;
  },
};

console.log(student);
console.log("Studet age is: ", student.age);
console.log("Studet adress is: ", student.adress);
console.log("student.facultet = cybernetics");
student.facultet = "cybernetics";
console.log(student);
console.log("isMale", student.isMale);
console.log("change gender");
student.isMale = false;
console.log("isMale", student.isMale);

console.log("full name and facultet", student.fullNameAndFacultet());

//2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор)

console.log(
  "2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор)"
);

const student1 = {
  name: "John",
  surname: "Smith",
  universityName: "Freshcode university",
  facultet: "economy",
  group: "pe2021 - 1",
  age: 19,
  education() {
    return this.universityName + ", " + this.facultet + ", " + this.group;
  },
};

console.log(student1);
console.log("fakultet = ", student1.facultet);
console.log("change fakultet");
student1.facultet = "fizvosp";
console.log("new fakultet = ", student1.facultet);

console.log("Student 1 Education: ", student1.education());

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function Book(author, bookName, year, publisher) {
  this.author = author;
  this.bookName = bookName;
  this.year = year;
  this.publisher = publisher;
}

const book01 = new Book(
  "A.Pushkin",
  "Ruslan i Liudmyla",
  "1984",
  "Pushkin Publisher"
);

const book02 = new Book("T.Schevchenko", "Заповіт", "2020", "Видавництво Лева");
console.log("Book 1 ", book01);
console.log("Book 2 ", book02);

function EBook(author, bookName, year, publisher, format, eNumber) {
  this.author = author;
  this.bookName = bookName;
  this.year = year;
  this.publisher = publisher;
  this.format = format;
  this.eNumber = eNumber;
}

const ebook01 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "ePub",
  32
);

const ebook02 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "PDF",
  33 //vscode почему-то убирает "висячие запятые..."
);

const ebook03 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "MS Word",
  34 //vscode почему-то убирает "висячие запятые..."
);

console.log("E-Book 1 ", ebook01);
console.log("E-Book 2 ", ebook02);
console.log("E-Book 3 ", ebook03);
