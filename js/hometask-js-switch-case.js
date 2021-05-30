// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case
{
  const num = prompt("Input number from 1 to 4");

  switch (num) {
    case "1":
      alert("Winter");
      break;
    case "2":
      alert("Spring");
      break;
    case "3":
      alert("Summer");
      break;
    case "4":
      alert("Autumn");
    default:
      alert("You input wrong number");
      break;
  }
}
// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

{
  const month = prompt("Input month between 1 and 12");
  // if (1 <= month && month <= 12) {
  switch (month) {
    case "1":
    case "2":
    case "12":
      console.log(`your month ${month} is cold winter`);
      break;
    case "3":
    case "4":
    case "5":
      console.log(`your month ${month} is sunny spring`);
      break;
    case "6":
    case "7":
    case "8":
      console.log(`your month ${month} is SUMMER :)`);
      break;
    case "9":
    case "10":
    case "11":
      console.log(`your month ${month} is rainy autumn :)`);
    default:
      //сначала забыл про это и сделал проверку через if :))))
      alert("Wrong number");
  }
  // } else {
  // alert("Wrong number");
  // }
}

// Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const userDay = prompt("Input day of the week");
switch (userDay) {
  case "1":
    console.log(`Monday is ${userDay}-st day of the week`);
    break;
  case "2":
    console.log(`Tuesday is ${userDay}-nd day of the week`);
    break;
  case "3":
    console.log(`Wednesday is ${userDay}-rd day of the week`);
    break;
  case "4":
    console.log(`Thursday is ${userDay}-th day of the week`);
    break;
  case "5":
    console.log(`Friday is ${userDay}-th day of the week`);
    break;
  case "6":
    console.log(`Saturday is ${userDay}-th day of the week`);
    break;
  case "7":
    console.log(`Sunday is ${userDay}-th day of the week`);
    break;
  default:
    console.log(`You press ${userDay}. It's wrong day`);
}

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = prompt("Input day from 1 to 31");
let decade;

if (1 <= day && day <= 10) decade = 1;
else if (10 < day && day <= 20) decade = 2;
else if (20 < day && day <= 31) decade = 3;
else console.log("Number must be from 1 to 31");

switch (+decade) {
  case 1:
    console.log("First :>> ");
    break;
  case 2:
    console.log("Second :>> ");
    break;
  case 3:
    console.log("Third :>> ");
    break;
}
