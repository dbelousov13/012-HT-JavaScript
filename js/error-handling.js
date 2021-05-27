"use strict";
// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

"use strict";

function powErrorCheck(base, exponent) {
  if (exponent === 1) {
    return base;
  }
  if (exponent < 1) {
    throw new RangeError("Number must be more than 0");
  }
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("You must input a number");
  } else {
    return base * powErrorCheck(base, exponent - 1);
  }
}

try {
  // хотел еще через prompt реализовать ввод базы и экспоненты, но отработка ошибок срабатывает не так как я хочу. При вводе букв вместо цифр сообщение об ошибке выглядит так Maximum call stack size exceeded, хотя я ожидаю You must input a number. Думаю связано с тем, что я строку пытаюсь привести к числу...
  // console.log(powErrorCheck(+prompt("Input base"), +prompt("Input exponent")));
  console.log(powErrorCheck(-5, 4));
  console.log(powErrorCheck(-5, 0));
} catch (e) {
  console.log("e.message :>> ", e.message);
}
