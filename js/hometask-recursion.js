// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

// 3. ** Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

function pow(base, exponent) {
  if (exponent >= 1) {
    if (exponent === 1) {
      return base;
    } else {
      return base * pow(base, exponent - 1);
    }
  } else if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    if (exponent === -1) {
      return base;
    }
    return 1 / (base * pow(base, exponent + 1)); // почему-то степень считает не верно....
  }
}

console.log(pow(5, 5));

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

function bracketWrapper2(n) {
  const brackets = [];
  bracketWrapperRec(n);

  function bracketWrapperRec(n) {
    console.log(brackets);
    if (n === 0) {
      return;
    }
    brackets.unshift("(");
    brackets.push(")");
    bracketWrapperRec(n - 1);
  }

  return brackets;
}

bracketWrapper2(5);

// 3. ** Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
